const axios = require('axios');
const { reply } = require('./_helper');
module.exports = async (sock, chatId, message, args) => {
    try {
        const surah = parseInt(args[0]) || Math.floor(Math.random()*114)+1;
        const ayah  = parseInt(args[1]) || 1;
        const r = await axios.get(`https://api.alquran.cloud/v1/ayah/${surah}:${ayah}/editions/quran-uthmani,en.asad`, { timeout: 10000 });
        const arabic = r.data.data[0]; const english = r.data.data[1];
        await reply(sock, chatId, `📖 *Quran*\n━━━━━━━━━━━━\n🕌 *Surah ${arabic.surah.englishName} (${surah}:${ayah})*\n\n🔤 *Arabic:*\n${arabic.text}\n\n💬 *Translation:*\n_"${english.text}"_`, message);
    } catch { await reply(sock, chatId, '❌ Usage: .quran <surah> <ayah>\nExample: .quran 2 255', message); }
};
