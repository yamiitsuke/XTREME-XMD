const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "XTREME~XMD~aJ1kiCzK#XTikvInA3I4Jq8UbF0oVK2qqnrzFwWsgttXUxMwf-QY",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "on",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "on",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "on",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*sᴇᴇɴ ʏᴏᴜʀ sᴛᴀᴛᴜs ʙʏ xᴛʀᴇᴍᴇ xᴍᴅ👑*",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/586h28.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || "+",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝗫𝗧𝗥𝗘𝗠𝗘-𝗫𝗠𝗗",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝗜𝗟 𝗡𝗘 𝗙𝗔𝗨 𝗣𝗔𝗦 𝗔𝗧𝗧𝗘𝗡𝗗𝗥𝗘 𝗗'𝗘̂𝗧𝗥𝗘 𝗣𝗔𝗥𝗙𝗔𝗜𝗧 𝗣𝗢𝗨𝗥 𝗖𝗢𝗠𝗠𝗘𝗡𝗖𝗘𝗥 𝗤𝗨𝗘𝗟𝗤𝗨𝗘𝗦 𝗖𝗛𝗢𝗦𝗘 𝗗𝗘 𝗕𝗜𝗘𝗡",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "50944490345",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐗𝐓𝐑𝐄𝐌𝐄",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ xᴛʀᴇᴍᴇ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/ebeiou.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> * ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ xᴛʀᴇᴍᴇ xᴍᴅ*❄️",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "on",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "off",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "falae",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "529633982655",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
  
