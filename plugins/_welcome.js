import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
    img = imagen1

  let chat = global.db.data.chats[m.chat]

  if (chat.welcome && m.messageStubType == 27) {
    let wel = ` ┌─★ 𝐍𝐢𝐥𝐨𝐮𝐁𝐨𝐭-𝐌𝐃 ✨️ \n │「 *Bienvenido* 」\n └┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │🦋  *Bienvenido*\n   │🌺  ${groupMetadata.subject}\n   └───────────────┈ ⳹`
await conn.sendMini(m.chat, packname, dev, wel, img, img, channel, fkontak)
  }

  if (chat.welcome && m.messageStubType == 28) {
   let bye = ` ┌─★ 𝐍𝐢𝐥𝐨𝐮𝐁𝐨𝐭-𝐌𝐃 ✨️ \n │「 *Adios* 」\n └┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │🥺  *Se fue*\n   │😿 *Espero y no regreses*\n   └───────────────┈ ⳹`
await conn.sendMini(m.chat, packname, dev, bye, img, img, channel, fkontak)
  }

  if (chat.welcome && m.messageStubType == 32) {
    let kick = ` ┌─★ 𝐍𝐢𝐥𝐨𝐮𝐁𝐨𝐭-𝐌𝐃 ✨️\n │「 *Adios* 」\n └┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │🥺 *Se fue*\n   │😿 *Espero y no regreses*\n   └───────────────┈ ⳹`
await conn.sendMini(m.chat, packname, dev, kick, img, img, channel, fkontak)
}}