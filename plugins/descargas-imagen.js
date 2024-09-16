import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*🚩 Uso Correcto: ${usedPrefix + command} Nilou*`;
  conn.reply(m.chat, '🚩 *Descargando su imagen...*', m, {
  contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
  title: packname,
  body: wm,
  previewType: 0, thumbnail: icons,
  sourceUrl: channel }}})
  const res = await googleImage(text);
  const image = await res.getRandom();
  //conn.sendFile(m.chat, link, 'error.jpg', `*🔎 Resultado De: ${text}*\n> ${textbot}`, m, null, rcanal);
const messages = [[ // CARRUSEL 1
'1 Imagen', 
dev,
await res.getRandom()]
], [ // CARRUSEL 2
'2 Imagen',
dev,
await res.getRandom()]
], [ // CARRUSEL 3
'3 Imagen',
dev,
await res.getRandom()]
], [ // CARRUSEL 4
'4 Imagen',
dev,
await res.getRandom()
]] 
await conn.sendCarousel(m.chat, '🚩 Buscador - Imagenes', `> 🔍 Resultado de: ${text}`, text, messages, fkontak)     
};
handler.help = ['imagen <query>'];
handler.tags = ['buscador', 'tools', 'descargas'];
handler.command = /^(image|imagen)$/i;
handler.register = true;
export default handler;