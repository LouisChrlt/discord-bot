const { MessageEmbed } = require("discord.js");

//let message = "Accepter le règlement via la réaction : ✅ \n\n";

let message = new Discord.MessageEmbed()
  .setAuthor({name: "Secours IDF - Règlement Discord", iconURL: "https://i.postimg.cc/Y9wTT0Rp/Secours-IDF-logo3.png"})
  .setColor("a23030")
  .setFooter({text: "Copyright - Secours IDF 2022"})
  .setTimestamp()
  .setDescription("Acceptez le présent règlement via la réaction ci-dessous avant de passer votre whitelist")
  .addField("📋 1. Nom + Prénom RP\n Mettez le prénom + nom RP de votre personnage sur Discord.");
channel.send({embeds: [message]});

// /ticket \\
if(message.content === prefix + "ticket"){

  const embedTicket = new Discord.MessageEmbed()

  .setColor("a23030")
  .setTitle("Ticket")
  .setDescription(`Ouvrir un ticket ci-dessous`)
  .setTimestamp()
  .setFooter({text: "Copyright - Secours IDF"})

  const btn = new Discord.MessageActionRow().addComponents(new Discord.MessageButton()
  
  .setStyle("PRIMARY")
  .setEmoji("📩")
  .setLabel("Ouvrir un ticket")
  .setCustomId("ticket"))

  message.delete()
  message.channel.send({embeds: [embedTicket], components: [btn]})


Client.on("interactionCreate", async (interaction) =>{

  if(interaction.isButton()){

    if(interaction.customId === "ticket"){
      let channel = interaction.guild.channels.create(`ticket-de-${interaction.user.id}`, {type: "GUILD_TEXT"})
      await channel.setParent(interaction.channel.parentId)

     channel.permissionOverwrites.create(interaction.user, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true,
        READ_MESSAGE_HISTORY: true
      })

      channel.permissionOverwrites.create("950521107000209458", {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true,
        READ_MESSAGE_HISTORY: true
      })

      channel.permissionOverwrites.create("950521266090172416", {
       SEND_MESSAGES: true,
        VIEW_CHANNEL: true,
        READ_MESSAGE_HISTORY: true
      })

      let EmbedNewTicket = new Discord.MessageEmbed()
        .setColor("a23030")
        .setTitle("Ticket créé")
        .setDescription(`${interaction.user.tag} a créé un nouveau ticket.`)
        .setThumbnail(interaction.user.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        .setFooter({text: "Secours IDF", iconURL: bot.user.displayAvatarURL({dynamic: true})})

        const btn2 = new Discord.MessageActionRow().addComponents(new Discord.MessageButton()
        .setStyle("DANGER")
        .setEmoji("🔒")
        .setLabel("Fermer le ticket")
        .setCustomId("close"),
        new Discord.MessageButton()
        .setStyle("PRIMARY")
        .setEmoji("📑")
        .setLabel("Demander le transcript")
        .setCustomId("transcript"),

        await channel.send({embeds: [EmbedNewTicket], components: [btn2]})
        )
      }
    }
  })   
}