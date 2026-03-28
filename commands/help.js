const settings = require('../settings');
module.exports = async (sock, chatId, message) => {
    const menu = `
╔══════════════════════════╗
║    🕷️  𝐒𝐏𝐈𝐃𝐄𝐑𝐖𝐄𝐁  🕸️
║      Connect & Enjoy  
║  v${settings.version} | 100+ Commands 
╚══════════════════════════╝

🕸️ ─── 𝐆𝐄𝐍𝐄𝐑𝐀𝐋 ─── 🕷️
♤ help
♤ menu
♤ ping
♤ alive
♤ owner
♤ pair
♤ uptime
♤ session

🎵 ─── 𝐌𝐄𝐃𝐈𝐀 ─── 🎵
♤ sticker
♤ steal
♤ toimg
♤ play
♤ lyrics
♤ tts
♤ vv
♤ getdp
♤ savestatus

🛠️ ─── 𝐓𝐎𝐎𝐋𝐒 ─── 🛠️
♤ weather
♤ wiki
♤ news
♤ tr
♤ calc
♤ define
♤ urban
♤ qr
♤ country
♤ github
♤ currency
♤ remind
♤ time
♤ encode
♤ decode
♤ reverse
♤ upper
♤ lower
♤ password
♤ today

🎮 ─── 𝐅𝐔𝐍 ─── 🎮
♤ joke
♤ dadjoke
♤ fact
♤ quote
♤ motivate
♤ 8ball
♤ flip
♤ dice
♤ choose
♤ roast
♤ ship
♤ love
♤ compliment
♤ insult
♤ truth
♤ dare
♤ rate
♤ zodiac
♤ horoscope
♤ tictactoe
♤ poll

👥 ─── 𝐆𝐑𝐎𝐔𝐏 𝐀𝐃𝐌𝐈𝐍 ─── 👥
♤ kick
♤ kickall
♤ promote
♤ demote
♤ mute
♤ unmute
♤ lock
♤ unlock
♤ warn
♤ warnings
♤ clearwarn
♤ del
♤ tagall
♤ hidetag
♤ antilink
♤ antibadword
♤ antispam
♤ welcome
♤ goodbye
♤ groupinfo
♤ admins
♤ topmembers
♤ setname
♤ setdesc
♤ getlink
♤ resetlink
♤ chatbot

👑 ─── 𝐎𝐖𝐍𝐄𝐑 𝐎𝐍𝐋𝐘 ─── 👑
♤ mode
♤ ban
♤ unban
♤ bc
♤ autoreply
♤ alwaysonline
♤ grouplist

🤖 ─── 𝐀𝐈 ─── 🤖
♤ ai
♤ ask

━━━━━━━━━━━━━━━━━━━━━━━━━━
🕷️ _SpiderWeb — Weaving Your Experience_ 🕸️
`;
    await sock.sendMessage(chatId, { text: menu }, { quoted: message });
};