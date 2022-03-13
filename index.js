const Discord = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Client = new Discord.Client({intents: [32767]});
const prefix = "/";
const Canvas = require("canvas");
const { token } = require("./config.json");
const roleClaim = require("./utils/role-claim");
const config = require("./config.json");
const Enmap = require("enmap");





Client.on("ready", async () =>{
  console.log("Le Bot s'est connecté au serveur Secours IDF.");

  //Client.application.commands.create(data);
  Client.guilds.cache.get("950519275230224385").commands.create(data);
  //Client.guilds.cache.get("950519275230224385").commands.create(clear);


  await Client.guilds.cache.get("950519275230224385").commands.fetch();
  console.log(Client.guilds.cache.get("950519275230224385").commands.cache);

  roleClaim(Client);

  Client.user.setActivity(config.activity);
});

Client.login(process.env.TOKEN);

Client.on("messageCreate", message =>{
  //if(message.author.bot) return;
  //message.reply("test");
  //autre possibilité\\ message.channel.send("test");

// Création d'Embeds \\

  // /help \\
  if(message.content === prefix + "help"){

    const embed1 = new Discord.MessageEmbed()

      .setTitle("**__Liste des commandes du Bot__**")
      .setColor("#A23030")
      .setAuthor("Secours IDF - 2022", "https://i.postimg.cc/Y9wTT0Rp/Secours-IDF-logo3.png")
      .setDescription("")
      .setThumbnail("")
      .addField("__/help__", "Affiche les commandes du Bot.")
      .addField("__/ping__", "Mentionne un utilisateur.")
      .addField("__/clear__", "Permet de supprimer des messages dans un salon textuel.")
      .setTimestamp()
      .setFooter("Copyright - Secours IDF");
    
    message.channel.send({embeds: [embed1]});
  }

  // /reglement \\
  if(message.content === prefix + "reglement"){

    const embedReglement = new Discord.MessageEmbed()

      .setAuthor({name: "Secours IDF - Règlement Discord", iconURL: "https://i.postimg.cc/Y9wTT0Rp/Secours-IDF-logo3.png"})
      .setColor("a23030")
      .setFooter({text: "Copyright - Secours IDF 2022"})
      .setTimestamp()
      .setDescription("Acceptez le présent règlement via la réaction ci-dessous avant de passer votre whitelist")
      .addField("📋 1. Nom + Prénom RP", "Mettez le prénom + nom RP de votre personnage sur Discord.")
      .addField("💬 2. RP et HRP", "Il est interdit de parler HRP dans les salons RP sous peine de sanctions.")
      .addField("💼 3. Demande de rôle(s)", "Vous avez à disposition un salon exprès pour demander vos rôles, merci de le faire uniquement dans celui-ci.")
      .addField("🔔 4. Mentions", "Toute mention de staff et/ou de membres inutile sera sanctionnée. Vous avez un salon contact staff exprès pour.")
      .addField("⛔ 5. Manque de respect / propos choquants", "Tout manque de respect et/ou propos choquants seront sévèrement sanctionnés.")
      .addField("📩 6.Pubs", "Il est interdit de faire de la pub sur ce serveur. Pour promouvoir notre serveur une pub déjà faite est disponible.")
      .addField("🎫 7. Tickets", "Veillez à faire attention au type de ticket que vous ouvrez. Un ticket sans suite sera sanctionné.")
      .addField("🔊 8. Langage commun", "Nous sommes ici sur un serveur français. Merci d'utiliser un langage correct et lisible.");

    message.channel.send({embeds: [embedReglement]});
  }

  // /tempête 30min \\
  if(message.content === prefix + "tempete30"){

    const embedTempete30 = new Discord.MessageEmbed()

      .setAuthor({name: "Secours IDF - Tempête", iconURL: "https://i.postimg.cc/Y9wTT0Rp/Secours-IDF-logo3.png"})
      .setColor("a23030")
      .setFooter({text: "Copyright - Secours IDF 2022"})
      .setTitle("**⚡ Tempête dans 30 minutes**")
      .setDescription("Une tempête est en approche, abritez-vous.");

      channel = Client.channels.cache.get('950658294127656970');
      channel.send({embeds: [embedTempete30]});
  }

  // /tempête 5min \\
  if(message.content === prefix + "tempete5"){

    const embedTempete5 = new Discord.MessageEmbed()

      .setAuthor({name: "Secours IDF - Tempête", iconURL: "https://i.postimg.cc/Y9wTT0Rp/Secours-IDF-logo3.png"})
      .setColor("a23030")
      .setFooter({text: "Copyright - Secours IDF 2022"})
      .setTitle("**⚡ Tempête dans 5 minutes**")
      .setDescription("Une tempête est en approche, abritez-vous.");

      channel = Client.channels.cache.get('950658294127656970');
      channel.send({embeds: [embedTempete5]});
  }

  // Douanes ouvertes \\
  if(message.content === prefix + "douaneson"){

    const embedDouanesOn = new Discord.MessageEmbed()

      .setAuthor({name: "Secours IDF", iconURL: "https://i.postimg.cc/Y9wTT0Rp/Secours-IDF-logo3.png"})
      .setColor("0046FF")
      .setFooter({text: "Copyright - Secours IDF 2022"})
      .setTitle("**🛂 | ✅ Douanes Ouvertes**")
      .setDescription("Les Douanes sont ouvertes. Venez passez votre Whitelist.");

      channel = Client.channels.cache.get('950659894720217118');
      channel.send({embeds: [embedDouanesOn]});

  }

  // Douanes fermées \\
  if(message.content === prefix + "douanesoff"){

    const embedDouanesOff = new Discord.MessageEmbed()

      .setAuthor({name: "Secours IDF", iconURL: "https://i.postimg.cc/Y9wTT0Rp/Secours-IDF-logo3.png"})
      .setColor("0046FF")
      .setFooter({text: "Copyright - Secours IDF 2022"})
      .setTitle("**🛂 | ⛔ Douanes Fermées**")
      .setDescription("Les Douanes sont fermées. Plus auncun douanier n'est disponible. Retentez votre chance plus tard.");

      channel = Client.channels.cache.get('950659894720217118');
      channel.send({embeds: [embedDouanesOff]});
  }

  // IP du serveur FiveM \\
  if(message.content === prefix + "ip"){

    const embedIp = new Discord.MessageEmbed()

      .setAuthor({name: "Secours IDF", iconURL: "https://i.postimg.cc/Y9wTT0Rp/Secours-IDF-logo3.png"})
      .setColor("a23030")
      .setTitle("📡 Adresse IP du serveur")
      .setDescription("L'adresse IP est à renter en faisant F8 sur FiveM.\n\n ```Adresse IP indisponible```")
      .setFooter({text: "Copyright - Secours IDF 2022"});

    message.channel.send({embeds: [embedIp]});
  }


});


// SlashCommand \\

// Commande Ping\\
const data = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Mentionne un utilisateur")
  .addUserOption(option => option
    .setName("utilisateur")
    .setDescription("Définissez un utilisateur.")
    .setRequired(true));



Client.on("interactionCreate", interaction =>{
  if(interaction.isCommand()){
    if(interaction.commandName === "ping"){
      let user = interaction.options.getUser("utilisateur");

      if(user != undefined){
        interaction.reply("Vous avez mentionné <@" + user.id + ">");
      }
      else{
        interaction.reply("Séléctionnez un utilisateur.");
      }
    }
  }
});

// Commande Clear\\
new SlashCommandBuilder()
  .setName("clear")
  .setDescription("Commande pour supprimer des messages.")
  .addIntegerOption(option =>
    option.setName("nombre")
      .setDescription("Définissez un nombre de messages à supprimer.")
      .setRequired(true)
  );

Client.on("interactionCreate", interaction =>{
  if(interaction.isCommand()){
    if(interaction.commandName === "clear"){
      var number = interaction.options.getInteger("nombre");

      if(number >= 1 && number <= 100){
        interaction.channel.bulkDelete(number);
        interaction.reply({content: number + " messages supprimés", ephemeral: true});
      }
      else{
        interaction.reply({content: "Le nombre de message à supprimer doit être compris entre 1 et 100."});
      }
    }
  }
});

// Commande Ban, Kick \\
Client.on("messageCreate", message =>{
  if(message.author.bot) return;

  if(message.member.permissions.has("ADMINISTRATOR")){
    // Commande Ban \\
    if(message.content.startsWith("!" + "ban")){
      let mention = message.mentions.members.first();

      if(mention == undefined){
        message.reply("Membre non ou mal mentionné.");
      }
      else{
        if(mention.bannable){
          mention.ban();
          message.channel.send(mention.displayName + " a été banni du serveur.");
        }
        else{
          message.reply("Impossible de bannir ce membre.");
        }
      } // Commande Kick \\
    }else if(message.content.startsWith("!" + "kick")){
      let mention = message.mentions.members.first();

      if(mention == undefined){
        message.reply("Membre non ou mal mentionné.");
      }
      else{
        if(mention.kickable){
          mention.kick();
          message.channel.send(mention.displayName + " a été kick du serveur.");
        }
        else{
          message.reply("Impossible de kick de membre.");
        }
      }
    } // Commande Mute \\
    else if(message.content.startsWith("!" + "mute")){
      let mention = message.mentions.members.first();

      if(mention == undefined){
        message.reply("Membre non ou mal mentionné.");
      }
      else{
        mention.roles.add("");
        message.channel.send(mention.displayName + " a été mute du serveur.");
      }
    } // Commande Tempmute \\
    else if(message.content.startsWith("!" + "tempmute")){
      let mention = message.mentions.members.first();

      if(mention == undefined){
        message.reply("Membre non ou mal mentionné.");
      }
      else{
        let args = message.content.split(" ");

        mention.roles.add("");
        setTimeout(function(){
          mention.roles.remove("");
          message.channel.send("<@" + mention.id + "> a été Unmute.");
        }, args[2] * 1000);
      }
    }
  }
});

// Message de départ et arrivée de membres et rôle nouveau membre \\

Client.on("guildMemberAdd", async member =>{

  console.log("Un membre a rejoint le serveur Secours IDF");

  Client.channels.cache.get("950659364660846642").send("<@" + member.id + "> a rejoint le serveur.");

  member.roles.add("950529713762361414");

  // Création CANVAS \\
  var canvas = Canvas.createCanvas(1024, 500);

  ctx = canvas.getContext("2d");

  var background = await Canvas.loadImage("./background.png");
  ctx.drawImage(background, 0, 0, 1024, 500);
  ctx.font = "42px Arial";
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.fillText(member.user.tag, 512, 410);

  ctx.beginPath();
  ctx.arc(512, 166, 119, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();

  var avatar = await Canvas.loadImage(member.user.displayAvatarURL({
    format: "png",
    size: 1024
  }));

  ctx.drawImage(avatar, 393, 47, 238, 238);

  var attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png");

  Client.channels.cache.get("950659364660846642").send({files: [attachment]});
});

Client.on("guildMemberRemove", member =>{

  console.log("Un membre a quitté le serveur.");

  Client.channels.cache.get("952141920690389022").send(member.displayName + " a quitté le serveur.");
});

// Boutons \\

// Bouton "Test" \\
Client.on("messageCreate", message =>{

  if(message.content === "test"){
    var row = new Discord.MessageActionRow()
      .addComponents(new Discord.MessageButton()
        .setCustomId("boutontest")
        .setLabel("Test")
        .setStyle("PRIMARY")
        .setEmoji("🎈")
      );

    message.channel.send({content: "Lien vers test", components: [row]});
  }
});

Client.on("interactionCreate", interaction =>{

  if(interaction.isButton()){
    if(interaction.customId === "boutontest"){
      interaction.reply("Le test a marché");
    }
  }
});

// Bouton Site internet \\
Client.on("messageCreate", message =>{

  if(message.content === "site"){
    var row = new Discord.MessageActionRow()
      .addComponents(new Discord.MessageButton()
        .setLabel("Site internet")
        .setStyle("LINK")
        .setEmoji("💻")
        .setURL("https://louischrlt00.wixsite.com/secoursidf")
      );

    message.channel.send({content: "Lien vers notre site internet", components: [row]});
  }
});

//Menus de séléction \\

// Menu de test \\
Client.on("messageCreate", message =>{
  if(message.author.bot) return;
  if(message.content === "test menu"){

    var row = new Discord.MessageActionRow()
    .addComponents(
      new Discord.MessageSelectMenu()
        .setCustomId("menu1")
        .setPlaceholder("Séléctionnez une option")
        .addOptions([
          {
            label: "Option 1 - test",
            description: "Description option 1",
            value: "option1"
          },
          {
            label: "Option 2 - test",
            description: "Description option 2",
            value: "option2"
          },
        ])
    );
  message.channel.send({content: "Menu de séléction de test.", components: [row]});
  }
});

Client.on("interactionCreate", interaction =>{
  if(interaction.isSelectMenu()){
    if(interaction.customId === "menu1"){
      //console.log(interaction.values);

      if(interaction.values == "option1"){
        interaction.reply({content: "Vous avez séléctionné l'option 1.", ephemeral: true});
      }
      else if(interaction.values == "option2"){
        interaction.reply({content: "Vous avez séléctionné l'option 2.", ephemeral: true});
      }
    }
  }
});

// Système de ticket \\


Client.settings = new Enmap({name: "settings"});

Client.on("messageCreate", async (message) => {
    if(!message.guild || message.author.bot) return;

    let args = message.content.slice(config.prefix.length).split(" ");
    let cmd = args.shift()?.toLowerCase();

    if(!message.content.startsWith(config.prefix) || !cmd || cmd.length == 0) return;

    Client.settings.ensure(message.guildId, {
        TicketSystem1: {
            channel: "",
            message: "",
            category: "",
        }
    })

    //if(cmd == "ping") {
        //return message.reply(`Pong! \`${client.ws.ping}ms\``)
    //}
    //if(cmd == "close") {
        //let TicketUserId = Client.settings.findKey(d => d.channelId == message.channelId);

        //if(!Client.settings.has(TicketUserId)){
            //return message.reply({
                //content: `:x: Ce channel n'est pas un ticket !`
            //})
        //}
        //Client.settings.delete(TicketUserId);
        //message.reply("Le ticket sera fermé dans 3 secondes.");
        //setTimeout(() => {
            //message.channel.delete().catch(()=>{});
        //}, 3000)
    //}
    if(cmd == "ticket") {
        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]); 
        if(!channel) return message.reply(":x: Il faut ping un channel.");

        let TicketEmbed = new Discord.MessageEmbed()
            .setColor("a23030")
            .setTitle("🎫 Tickets")
            .setDescription("Séléctionnez le type de ticket à ouvrir ci-dessous.")
            .setFooter({text: message.guild.name, iconURL: message.guild.iconURL({dynamic: true})});
        
            let Menu = new Discord.MessageSelectMenu()
            .setCustomId("MenuTicket")
            .setPlaceholder("Séléctionnez le type de ticket à ouvrir")
            .setMaxValues(1) 
            .setMinValues(1)
            .addOptions([ //maximum 25 items
                {
                    label: "Entreprises".substr(0, 25), //maximum 25 Letters long
                    value: "entreprises".substr(0, 25), //maximum 25 Letters long
                    description: "Demander la création ou la reprise d'une entreprise.".substr(0, 50), //maximum 50 Letters long
                    emoji: "🏢", //optional
                },
                {
                    label: "Wipe".substr(0, 25), //maximum 25 Letters long
                    value: "wipe".substr(0, 25), //maximum 25 Letters long
                    description: "Faire une demande de Wipe pour votre personnage.".substr(0, 50), //maximum 50 Letters long
                    emoji: "🔄", //optional
                },
                {
                  label: "Mort RP".substr(0, 25), //maximum 25 Letters long
                  value: "mort".substr(0, 25), //maximum 25 Letters long
                  description: "Dossier de mort RP pour votre personnage ou un autre.".substr(0, 50), //maximum 50 Letters long
                  emoji: "💀", //optional
                },
                {
                  label: "Debannissement".substr(0, 25), //maximum 25 Letters long
                  value: "deban".substr(0, 25), //maximum 25 Letters long
                  description: "Dossier de deban vous concernant.".substr(0, 50), //maximum 50 Letters long
                  emoji: "⛔", //optional
                },
                {
                  label: "Autre type de ticket".substr(0, 25), //maximum 25 Letters long
                  value: "autre".substr(0, 25), //maximum 25 Letters long
                  description: "Questions diverses, report de bug, dossier de ripou".substr(0, 50), //maximum 50 Letters long
                  emoji: "🔔", //optional
                }
            ])
        let row = new Discord.MessageActionRow().addComponents(Menu);
        
        channel.send({
            embeds: [TicketEmbed],
            components: [row]
        }).then((msg) => {
            Client.settings.set(message.guildId, channel.id, "TicketSystem1.channel")
            Client.settings.set(message.guildId, msg.id, "TicketSystem1.message")
            Client.settings.set(message.guildId, channel.parentId, "TicketSystem1.category")
            return message.reply("👍 **Message de ticket posté avec succès.**");
        }).catch((e) => {
            console.log(e);
            return message.reply("Erreur lors de la création du message.");
        })
    }
})

Client.on("interactionCreate", async (interaction) => {
    if(!interaction.isSelectMenu() || !interaction.guildId || interaction.message.author.id != Client.user.id) return
    
    Client.settings.ensure(interaction.guildId, {
        TicketSystem1: {
            channel: "",
            message: "",
            category: "",
        }
    })

    let data = Client.settings.get(interaction.guildId)
    if(!data.TicketSystem1.channel || data.TicketSystem1.channel.length == 0) return

    //right ticket system
    if(interaction.channelId == data.TicketSystem1.channel && interaction.message.id == data.TicketSystem1.message) {        
        switch(interaction.values[0]){
            case "entreprises": {
                let channel = await CreateTicket({
                    OpeningMessage: "Ticket en cours de création...",
                    ClosedMessage: `Ticket de dossier d'entreprise ouvert - <#{channelId}>`,
                    embeds: [ new Discord.MessageEmbed()
                      .setColor("a23030")
                      .setAuthor({name: "Secours IDF - Dossier d'entreprise", iconURL:("https://i.postimg.cc/Y9wTT0Rp/Secours-IDF-logo3.png")})
                      .setDescription("Créez ci-dessous votre dossier de création ou reprise d'entreprise.")
                      .addField("🧑🏼 Identité RP", "Votre nom et prénom RP et identifiant discord (@).")
                      .addField("🔍 Présentation de votre personnage", "Décrivez le caractère et la vie de votre personnage.")
                      .addField("🆕 Concept", "Définisser le concept que vous souhaitez intégrer en jeu.")
                      .addField("🧾 Organisation", "Décrivez l'organisation souhaitée pour votre entreprise.")
                      .setTimestamp()
                      .setFooter({text: "Copyright - Secours IDF 2022"})
                    ]
                }).catch(e=>{
                    return console.log(e)
                })
                console.log(channel.name); //work in the channel ... Awaiting message .. application etc.
            } break;
            case "wipe": {
                let channel = await CreateTicket({
                    OpeningMessage: "Ticket en cours de création...",
                    ClosedMessage: `Ticket de dossier de Wipe ouvert - <#{channelId}>`,
                    embeds: [ new Discord.MessageEmbed()
                      .setColor("a23030")
                      .setAuthor({name: "Secours IDF - Dossier de Wipe", iconURL:("https://i.postimg.cc/Y9wTT0Rp/Secours-IDF-logo3.png")})
                      .setDescription("Créez ci-dessous votre dossier de Wipe.")
                      .addField("❔ Raisons", "Définissez les raisons de ce changement souhaité.")
                      .addField("👨🏼‍🦳 Ancienneté", "Notez l'ancienneté de votre personnage. (doit être supérieur à 2 mois)")
                      .setTimestamp()
                      .setFooter({text: "Copyright - Secours IDF 2022"})
                    ]
                }).catch(e=>{
                    return console.log(e)
                })
                console.log(channel.name); //work in the channel ... Awaiting message .. application etc.
            } break;
            case "mort": {
              let channel = await CreateTicket({
                  OpeningMessage: "Ticket en cours de création...",
                  ClosedMessage: `Ticket de dossier de Mort RP ouvert - <#{channelId}>`,
                  embeds: [ new Discord.MessageEmbed()
                    .setColor("a23030")
                    .setAuthor({name: "Secours IDF - Dossier de Mort RP", iconURL:("https://i.postimg.cc/Y9wTT0Rp/Secours-IDF-logo3.png")})
                    .setDescription("Créez ci-dessous votre dossier de Mort RP.")
                    .addField("🧑🏼 Identité RP", "Votre nom et prénom RP et identifiant discord (@). Notez aussi l'identité de la personne visée si tel est le cas.")
                    .addField("❔ Raisons", "Définissez les raisons de cette mort souhaitée.")
                    .addField("🎬 Scène", "Décrivez la scène prévue.")
                    .addField("🚪 Porte de sortie", "Quelle(s) porte(s) de sortie(s) laissez-vous à votre opposant ?")
                    .addField("🔍 Preuves", "Donnez les preuves que vous avez contre votre cible.")
                    .setTimestamp()
                    .setFooter({text: "Copyright - Secours IDF 2022"})
                  ]
              }).catch(e=>{
                  return console.log(e)
              })
              console.log(channel.name); //work in the channel ... Awaiting message .. application etc.
          } break;
          case "deban": {
            let channel = await CreateTicket({
                OpeningMessage: "Ticket en cours de création...",
                ClosedMessage: `Ticket de dossier Deban ouvert - <#{channelId}>`,
                embeds: [ new Discord.MessageEmbed()
                  .setColor("a23030")
                  .setAuthor({name: "Secours IDF - Dossier de Deban", iconURL:("https://i.postimg.cc/Y9wTT0Rp/Secours-IDF-logo3.png")})
                  .setDescription("Créez ci-dessous votre dossier de Deban.")
                  .addField("🧑🏼 Identité", "Votre discord.")
                  .addField("💻 Steam HEX", "Votre Steam HEX.")
                  .addField("📆 Date", "La date du ban.")
                  .addField("❔ Raisons", "Donnez les raisons de votre ban.")
                  .addField("📢 Explications", "Donnez vos explications concernant ce ban.")
                  .addField("🔓 Motivations", "Donnez vos motivations et pourquoi nous devrions vous deban.")
                  .setTimestamp()
                  .setFooter({text: "Copyright - Secours IDF 2022"})
                ]
            }).catch(e=>{
                return console.log(e)
            })
            console.log(channel.name); //work in the channel ... Awaiting message .. application etc.
          } break;
          case "autre": {
            let channel = await CreateTicket({
                OpeningMessage: "Ticket en cours de création...",
                ClosedMessage: `Ticket de dossier Deban ouvert - <#{channelId}>`,
                embeds: [ new Discord.MessageEmbed()
                  .setColor("a23030")
                  .setAuthor({name: "Secours IDF - Autre ticket", iconURL:("https://i.postimg.cc/Y9wTT0Rp/Secours-IDF-logo3.png")})
                  .setDescription("Faites part ci-dessous de votre demande.")
                  .addField("❔ Questions", "Diverses questions à poser à un staff.")
                  .addField("🔧 Bug", "Report de bug (Discord, Serveur FiveM).")
                  .addField("🔐 Ripou", "Dossier Ripou sur le serveur.")
                  .setTimestamp()
                  .setFooter({text: "Copyright - Secours IDF 2022"})
                ]
            }).catch(e=>{
                return console.log(e)
            })
            console.log(channel.name); //work in the channel ... Awaiting message .. application etc.
          } break;
        }
        
        async function CreateTicket(ticketdata) {
            return new Promise(async function(resolve, reject) {
                await interaction.reply({
                    ephemeral: true,
                    content: ticketdata.OpeningMessage
                })
                let { guild } = interaction.message;
                let category = guild.channels.cache.get(data.TicketSystem1.category);
                if(!category || category.type != "GUILD_CATEGORY") category = interaction.message.channel.parentId || null; 
                let optionsData = {
                    type: "GUILD_TEXT",
                    topic: `${interaction.user.tag} | ${interaction.user.id}`,
                    permissionOverwrites: [],
                }
                if(Client.settings.has(interaction.user.id)){
                    let TicketChannel = guild.channels.cache.get(Client.settings.get(interaction.user.id, "channelId"))
                    if(!TicketChannel) {
                        Client.settings.delete(interaction.user.id)
                    } else {
                        return interaction.editReply({
                            ephemeral: true,
                            content: `Vous avez déjà un ticket <#${TicketChannel.id}>`
                        })
                    }
                }
                optionsData.permissionOverwrites = [...guild.roles.cache.values()].sort((a, b) => b?.rawPosition - a.rawPosition).map(r => {
                    let Obj = {}
                    if(r.id){
                        Obj.id = r.id;
                        Obj.type = "role";
                        Obj.deny = ["SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS", "ADD_REACTIONS", "ATTACH_FILES"]
                        Obj.allow = [];
                        return Obj;
                    } else {
                        return false;
                    }
                }).filter(Boolean);
                //Add USER ID Permissions to the TICKET
                optionsData.permissionOverwrites.push({
                    id: interaction.user.id,
                    type: "member",
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS", "ADD_REACTIONS", "ATTACH_FILES"],
                    deny: [],
                })
                optionsData.permissionOverwrites.push({
                  id: "950521107000209458",
                  type: "admin",
                  allow: ["SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS", "ADD_REACTIONS", "ATTACH_FILES"],
                  deny: [],
                })
                optionsData.permissionOverwrites.push({
                  id: "950521266090172416",
                  type: "modo",
                  allow: ["SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS", "ADD_REACTIONS", "ATTACH_FILES"],
                  deny: [],
                })
                optionsData.permissionOverwrites.push({
                  id: "950521761735278673",
                  type: "douanier",
                  allow: ["SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS", "ADD_REACTIONS", "ATTACH_FILES"],
                  deny: [],
                })
                
                //if there are too many, remove the first ones..
                while (optionsData.permissionOverwrites.length >= 99){
                optionsData.permissionOverwrites.shift();
                }
                if(category) optionsData.parent = category;
                guild.channels.create(`ticket-${interaction.user.username.split(" ").join("-")}`.substr(0, 32), optionsData).then(async channel => {
                    await channel.send({
                        content: `<@${interaction.user.id}>`,
                        embeds: ticketdata.embeds
                    }).catch(()=>{});
                    Client.settings.set(interaction.user.id, {
                        userId: interaction.user.id,
                        channelId: channel.id,
                    })
                    await interaction.editReply({
                        ephemeral: true,
                        content: ticketdata.ClosedMessage.replace("{channelId}", channel.id)
                    }).catch(()=>{});
                    resolve(channel);
                }).catch((e)=>{
                    reject(e)
                });
            })
            
        }

    } 
})





