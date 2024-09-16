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
  //conn.sendFile(m.chat, link, 'error.jpg', `*🔎 Resultado De: ${text}*\n> ${textbot}`, m, null, rcanal);
const messages = [[ // CARRUSEL 1
'Descripción de Carrusel 1', 
'Footer de Carrusel 1',
link,
[['Botón1', usedPrefix + 'menu'] /* etc... */],
[[null, null]],
[[]],
[[]]
], [ // CARRUSEL 2
'Descripción de Carrusel 2',
'Footer de Carrusel 2',
random1(),
[['Botón1', usedPrefix + 'menu'] /* etc... */],
[[]],
[[]],
[[]]
], [ // CARRUSEL 3
'Descripción de Carrusel 3',
'Footer de Carrusel 3',
random1(),
[['Botón1', usedPrefix + 'menu'] /* etc... */],
[[]],
[[]],
[[]]
], [ // CARRUSEL 4
'Descripción de Carrusel 4',
'Footer de Carrusel 4',
random1(),
[['Botón1', usedPrefix + 'menu'] /* etc... */],
[[]],
[[]],
[[]]
]] /* etc... */
await conn.sendCarousel(m.chat, 'Texto', 'Footer', 'Titulo de Carrusel', messages, m)     
};
handler.help = ['imagen <query>'];
handler.tags = ['buscador', 'tools', 'descargas'];
handler.command = /^(image|imagen)$/i;
handler.register = true;
export default handler;