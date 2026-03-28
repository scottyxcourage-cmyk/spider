const { downloadContentFromMessage } = require('@whiskeysockets/baileys');
const { reply, getSender, getIsOwner } = require('./_helper');
module.exports = async (sock, chatId, message) => {
    const sender = getSender(sock, message);
    if (!await getIsOwner(sock)(sender, sock, chatId)) return reply(sock, chatId, '❌ Owner only.', message);
    const ctx = message.message?.extendedTextMessage?.contextInfo;
    const quoted = ctx?.quotedMessage;
    if (!quoted) return reply(sock, chatId, '❌ Reply to a view-once message with .vv2', message);
    const voMsg = quoted?.viewOnceMessage?.message || quoted?.viewOnceMessageV2?.message || quoted;
    const imgMsg = voMsg?.imageMessage; const vidMsg = voMsg?.videoMessage;
    if (!imgMsg && !vidMsg) return reply(sock, chatId, '❌ Not a view-once media.', message);
    try {
        const type = imgMsg ? 'image' : 'video';
        const stream = await downloadContentFromMessage(imgMsg||vidMsg, type);
        const chunks = []; for await (const c of stream) chunks.push(c);
        if (type==='image') await sock.sendMessage(chatId, { image: Buffer.concat(chunks), caption: '🔓 View Once\n\n_spider©_' }, { quoted: message });
        else await sock.sendMessage(chatId, { video: Buffer.concat(chunks), caption: '🔓 View Once\n\n_spider©_' }, { quoted: message });
    } catch { await reply(sock, chatId, '❌ Failed.', message); }
};
