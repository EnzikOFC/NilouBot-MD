import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
    let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => welcome)
    let pp2 = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => adios)
  let img = await (await fetch(`${pp}`)).buffer()
  let img2 = await (await fetch(`${pp2}`)).buffer()

  let chat = global.db.data.chats[m.chat]

  if (chat.welcome && m.messageStubType == 27) {
    let wel = ` ┌─★ 𝐍𝐢𝐥𝐨𝐮𝐁𝐨𝐭-𝐌𝐃 ✨️ \n │「 𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗼 𝗣𝘂𝘁𝗼 」\n └┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │🦋  𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗼\n   │🌺  ${groupMetadata.subject}\n   └───────────────┈ ⳹`
await conn.sendMini(m.chat, packname, dev, wel, img, img, channel, fkontak)
  }

  if (chat.welcome && m.messageStubType == 28) {
   let bye = ` ┌─★ 𝐍𝐢𝐥𝐨𝐮𝐁𝐨𝐭-𝐌𝐃 ✨️ \n │「 𝗔𝗱𝗶𝗼𝘀, 𝗔𝘀𝗲𝗴𝘂𝗿𝗮𝘁𝗲 𝗗𝗲 𝗩𝗼𝗹𝘃𝗲𝗿 」\n └┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │🥺  𝗦𝗲 𝗳𝘂𝗲\n   │😿 𝗩𝘂𝗲𝗹𝘃𝗲 𝗣𝗿𝗼𝗻𝘁𝗼 𝗔𝗺𝗶𝗴𝗼\n   └───────────────┈ ⳹`
await conn.sendMini(m.chat, packname, dev, bye, img2, img2, channel, fkontak)
  }

  if (chat.welcome && m.messageStubType == 32) {
    let kick = ` ┌─★ 𝐍𝐢𝐥𝐨𝐮𝐁𝐨𝐭-𝐌𝐃 ✨️\n │「 𝗔𝗱𝗶𝗼𝘀 𝗣𝗲𝗻𝗱𝗲𝗷𝗼 」\n └┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │  𝗦𝗲 𝗙𝘂𝗲 𝗨𝗻 🏳️‍🌈\n   │😹 𝗡𝗮𝗱𝗶𝗲 𝗧𝗲 𝗠𝗮𝗻𝗱𝗼 𝗔𝗵 𝗠𝗮𝗻𝗱𝗮𝗿 𝗘𝘀𝗮 𝗠𝗶𝗲𝗿𝗱𝗮\n   └───────────────┈ ⳹`
await conn.sendMini(m.chat, packname, dev, kick, img2, img2, channel, fkontak)
}}

/*import { WAMessageStubType } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true;

  let vn = 'https://qu.ax/cUYg.mp3';
  let vn2 = 'https://qu.ax/cTDa.mp3';
  let welc = welcome;
  let adi = adios;
  let chat = global.db.data.chats[m.chat];
  const getMentionedJid = () => {
    return m.messageStubParameters.map(param => `${param}@s.whatsapp.net`);
  };

  let who = m.messageStubParameters[0] + '@s.whatsapp.net';
  let user = global.db.data.users[who];

  let userName = user ? user.name : await conn.getName(who);

  if (chat.welcome && m.messageStubType === 27) {
    this.sendMessage(m.chat, {
      audio: { url: vn },
      contextInfo: {
        mentionedJid: getMentionedJid(),
        "externalAdReply": {
          "thumbnail": welc,
          "title": "  ͟͞ Ｗ Ｅ Ｌ Ｃ Ｏ Ｍ Ｅ ͟͞  ",
          "body": `${userName}!`,
          "previewType": "PHOTO",
          "thumbnailUrl": null,
          "showAdAttribution": true,
          sourceUrl: [yt, md, channel].sort(() => 0.5 - Math.random())[0]
        }
      },
      ptt: true,
      mimetype: 'audio/mpeg',
      fileName: 'welcome.mp3'
    }, { quoted: fkontak });
  }

  if (chat.welcome && (m.messageStubType === 28 || m.messageStubType === 32)) {
    this.sendMessage(m.chat, {
      audio: { url: vn2 },
      contextInfo: {
        mentionedJid: getMentionedJid(),
        "externalAdReply": {
          "showAdAttribution": true,
          "containsAutoReply": true,
          "title": '  ͟͞ Ａ Ｄ Ｉ Ｏ́ Ｓ ͟͞  ',
          body: `${userName}, se despide.`,
          "previewType": "PHOTO",
          "thumbnailUrl": '',
          "thumbnail": adi,
          "sourceUrl": redes
        }
      }
    }, { quoted: fkontak });
  }
}*/