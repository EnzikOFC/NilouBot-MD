let handler = async (m, { conn, isRowner}) => {
let _muptime
let totalreg = Object.keys(global.db.data.users).length
let totalchats = Object.keys(global.db.data.chats).length
let pp = 'https://tinyurl.com/ys5umedp'
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) 
const used = process.memoryUsage()
let nilou = `╭─⬣「 *Estado De Nilou* 」⬣\n`
nilou += `│ 🚩 *Creador ∙* Enzito\n`
nilou += `│ 📚 *Grupos Unidos ∙* ${groupsIn.length}\n`
nilou += `│ 👤 *Chats Privados ∙* ${chats.length - groupsIn.length}\n`
nilou += `│ 💬 *Total De Chats ∙* ${chats.length}\n`
nilou += `│ 🍟 *Usuarios Registrados ∙* ${totalreg}\n`
nilou += `│ 🍭 *Grupos Registrados ∙* ${totalchats}\n`
nilou += `│ 🕜 *Actividad ∙* ${muptime}\n`
nilou += `╰─⬣`
await conn.sendFile(m.chat, pp, 'luffy.jpg', nilou, fkontak, null, rcanal)
}
handler.help = ['status']
handler.tags = ['info']
handler.command = /^(estado|status|estate|state|stado|stats)$/i
handler.register = true
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}