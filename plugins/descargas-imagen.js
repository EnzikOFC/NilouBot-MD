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
  const link = image;
  const link2 = image;
  const link3 = image;
  //conn.sendFile(m.chat, link, 'error.jpg', `*🔎 Resultado De: ${text}*\n> ${textbot}`, m, null, rcanal);
const messages = [[ // CARRUSEL 1
'Imagen 1', 
dev,
link,
[[null, null] /* etc... */],
[[null, null]],
[[]],
[[]]
], [ // CARRUSEL 2
'Imagen 2',
dev,
image,
[[null, null] /* etc... */],
[[]],
[[]],
[[]]
], [ // CARRUSEL 3
'Imagen 2',
dev,
link2,
[[null, null] /* etc... */],
[[]],
[[]],
[[]]
], [ // CARRUSEL 4
'Imagen 4',
dev,
link3,
[[null, null] /* etc... */],
[[]],
[[]],
[[]]
]] /* etc... */
await conn.sendCarousel(m.chat, '🚩 Buscador - Imagenes', `🔍 Resultado de: ${text}`, text, messages, m)     
};
handler.help = ['imagen <query>'];
handler.tags = ['buscador', 'tools', 'descargas'];
handler.command = /^(image|imagen)$/i;
handler.register = true;
export default handler;