let handler = async (m, { conn, command }) => {
let gps = `*◜💙 GRUPOS OFICIALES 💙◞*

🌹 ${packname} 
${gp1}

🌹 ${packname} 2
${gp2}

🌹 ${packname} 3
${gp3}

 *◜🤍 COLABORACIONES 🤍◞*

💖 ${colab1}
${gp4}

💖 ${colab2}
${gp5}

💖 ${namecomu}
${comunidad1}

💖 ${namecomu2}
${comunidad2}

 *◜💦 CANALES OFICIALES 💦◞*

🌻 ${namechannel}
${channel}

🌻 ${namechannel2}
${channel2}`

await m.react(emojis) 

await conn.sendFile(m.chat, imagen3, 'luffy.jpg', gps, fkontak, null, rcanal)}

handler.tags = ['main']
handler.help = ['grupos']
handler.command = /^grupos|gruposniloi|linkre|nilougp|gpnilou|gruposofc|gruposoficiales$/i
handler.register = true

export default handler
