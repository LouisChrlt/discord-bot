const Discord = require("discord.js");
const { Client, MessageReaction, User } = require("discord.js");
const ROLE_CHANNEL_ID = "950519731553730590";
const firstMessage = require("./first-message");

const emojis ={
  check: "✅ | Règlement Accepté",
  //uncheck: "❌ | Règlement Refusé"
}

/**
 * 
 * @param {MessageReaction} reaction 
 * @param {User} user 
 * @param {Boolean} add 
 */
const handleReaction = (reaction, user, add) =>{
  const emojiName = reaction.emoji.name;
  const {guild} = reaction.message;
  const roleName = emojis[emojiName];

  if(!roleName) return;

  const role = guild.roles.cache.find(role => role.name === roleName);

  if(!role) return;

  const member = guild.members.cache.find(member => member.id === user.id);

  if(!member) return;

  if(add){
    member.roles.add(role);
  }else{
    member.roles.remove(role);
  }
}

/**
 * 
 * @param {Client} Client 
 */
module.exports = (Client) =>{
  const channel = Client.channels.cache.find(channel => channel.id === ROLE_CHANNEL_ID);
  const getEmoji = (emojiName) => Client.emojis.cache.find(emoji => emoji.name === emojiName);
  const reactions = [];

  let message = "";

  for (const key in emojis){  
    const emoji = getEmoji(key);
    if (emoji) {
        reactions.push(emoji);
        const role = emojis[key];
        message += `${emoji} : ${role}\n`;
    }
  }

  firstMessage(channel, message, reactions);

  Client.on('messageReactionAdd', (reaction, user) =>{
    if(reaction.message.channel.id === channel.id)
      handleReaction(reaction, user, true);
  })

  Client.on('messageReactionRemove', (reaction, user) =>{
    if(reaction.message.channel.id === channel.id)
      handleReaction(reaction, user, false);
  })
}