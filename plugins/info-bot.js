import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {

const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^bot$/i.test(m.text)) {
conn.reply(m.chat, `🚩 ¡Hola! Soy Nilou, en que puedo ayudarte hoy?\n\n✰ Usa *!menu* para ver mis comandos.`, m, rcanal, )
}
if (/^Akira$/i.test(m.text)) {
conn.reply(m.chat, `*El Mejor Hosting* ❤️‍🩹`, m, rcanal, )
}
if (/^Nilou$/i.test(m.text)) {
conn.reply(m.chat, `*Gracias Por Conocerme.* 🫂`, m, rcanal, )
}
return !0;
};
export default handler;