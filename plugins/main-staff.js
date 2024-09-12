let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🌹 *EQUIPO DE AYUDANTES*

🌱 *Bot:* ${botname}
🍟 *Versión:* ${vs}

👑 *Propietario:*

• Enzito
🌱 *Rol:* Propietario
🌴 *Número:* ${creador}
🚩 *GitHub:* https://github.com/EnzikOFC

🪴  *Desarrollador:*

• Jostin207
🌱 *Rol:* Desarrollador
🌴 *Número:* Wa.me/593939005387
🚩 *GitHub:* https://github.com/Jostin207`
await conn.sendFile(m.chat, icons, 'luffy.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🥷 Developers 👑`,
body: `🚩 Staff Oficial`,
mediaType: 1,
sourceUrl: redes,
//thumbnailUrl: icono
}}
}, { mentions: m.sender })
await m.react(emoji)

/*let icono = '🔰';*/

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler