import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
   let img = imagen1

  let chat = global.db.data.chats[m.chat]

  if (chat.welcome && m.messageStubType == 27) {
    let wel = ` ┌─★ 𝐍𝐢𝐥𝐨𝐮𝐁𝐨𝐭-𝐌𝐃 🌻\n │「 𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗼/𝗮 」\n └┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │🙈  *Bienvenido*\n   │🌺  ${groupMetadata.subject}\n   └───────────────┈ ⳹`
await conn.sendMini(m.chat, packname, dev, wel, img, img, channel, fkontak)
  }

  if (chat.welcome && m.messageStubType == 28) {
   let bye = ` ┌─★ 𝐍𝐢𝐥𝐨𝐮𝐁𝐨𝐭-𝐌𝐃 🌻 \n │「 𝗔𝗱𝗶𝗼𝘀 」\n └┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │😿  *Se fue*\n   │🌺 *Espero y regreses*\n   └───────────────┈ ⳹`
await conn.sendMini(m.chat, packname, dev, bye, img, img, channel, fkontak)
  }

  if (chat.welcome && m.messageStubType == 32) {
    let kick = ` ┌─★ 𝐍𝐢𝐥𝐨𝐮𝐁𝐨𝐭-𝐌𝐃 🌻\n │「 *Adios* 」\n └┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │😹 𝗘𝘅𝗽𝘂𝗹𝘀𝗮𝗱𝗼\n   │🤡 𝗡𝗼 𝗥𝗼𝗺𝗽𝗮𝘀 𝗟𝗮𝘀 𝗥𝗲𝗴𝗹𝗮𝘀 𝗗𝗲𝗹 𝗚𝗿𝘂𝗽𝗼!\n   └───────────────┈ ⳹`
await conn.sendMini(m.chat, packname, dev, kick, img, img, channel, fkontak)
}}