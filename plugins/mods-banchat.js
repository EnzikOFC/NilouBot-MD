let handler = async (m) => {

global.db.data.chats[m.chat].isBanned = true
conn.reply(m.chat, `🌹 *La Bot Ah Sido Desactivada En Este Chat*`, m, rcanal, )

}
handler.help = ['banchat']
handler.tags = ['mods']
handler.command = /^desactivarchatbot$/i
handler.mods = true 
export default handler
