import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'

/*let icono = '🔰';*/

/*let fkontak = {
  id: '5491168758497@s.whatsapp.net',
  name: 'ENZO' //jajajaaj
};*/


/*let redes = {
youtube: 'https://youtube.com/@Enzito-19'
};*/

let tags = {
  'main': '🄸🄽🄵🄾×🄱🄾🅃',
  'buscador': '🄱🅄🅂🄲🄰🄳🄾🅁🄴🅂',
  'fun': '🄹🅄🄴🄶🄾🅂',
  'citaboom': '🄲🄸🅃🄰🄱🄾🄾🄼',  
  'jadibot': '🅂🄴🅁🄱🄾🅃',
  'rpg': '×🅁×🄿×🄶×',
  'rg': '🅁🄴🄶🄸🅂🅃🅁🄾',
  'xp': '×🄴×🅇×🄿×',
  'sticker': '🅂🅃🄸🄲🄺🄴🅁🅂',
  'anime': '🄰🄽🄸🄼🄴🅂',
  'database': '🄳🄰🅃🄰🄱🄰🅂🄴',
  'fix': '🄵🄸🅇🄼🄴🄽🅂🄰🄹🄴',
  'grupo': '🄶🅁🅄🄿🄾🅂',
  'nable': '🄾🄽 / 🄾🄵🄵', 
  'descargas': '🄳🄴🅂🄲🄰🅁🄶🄰🅂',
  'youtube': '🅈🄾🅄🅃🅄🄱🄴',
  'tools': '🄷🄴🅁🅁🄰🄼🄸🄴🄽🅃🄰🅂',
  'info': '🄸🄽🄵🄾🅁🄼🄰🄲🄸🄾́🄽',
  'nsfw': '🄽🅂🄵🅆', 
  'owner': '🄲🅁🄴🄰🄳🄾🅁', 
  'mods': '🅂🅃🄰🄵🄵',
  'audio': '🄰🅄🄳🄸🄾🅂', 
  'ai': '×🄰×🄸×',
  'transformador': '🄲🄾🄽🅅🄴🅁🅃🄸🄳🄾🅁🄴🅂',
}

const defaultMenu = {
  before: `🎁 𝐌𝐞𝐧𝐮 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝐃𝐞 𝐍𝐢𝐥𝐨𝐮𝐁𝐨𝐭-𝐌𝐃

“Hola *%name* Que Tal? Yo Soy *NilouBot-MD*, %greeting Disfruta De Mi Menú"

.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬⛄◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🎄⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 🄼🄴🄽🅄-🄱🄾🅃໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪🎄
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬⛄◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇❍✎ *🄶rupo Oficial* https://chat.whatsapp.com/IICmKudSbuGBFKMPZitp0h
├ׁ̟̇❍✎ *🄲ʀᴇᴀᴅᴏʀ:* _ᴇɴᴢɪᴛᴏ_
├ׁ̟̇❍✎ *🄼ᴏᴅᴏ:* Público
├ׁ̟̇❍✎ *🄱ᴀɪʟᴇʏs:* Multi Device
├ׁ̟̇❍✎ *🅃ɪᴇᴍᴘᴏ 🄰ᴄᴛɪᴠᴀ:* %muptime
├ׁ̟̇❍✎ *🅄sᴜᴀʀɪᴏs:* %totalreg
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝

%readmore
.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🎁◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮
╭╼☁️⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ 🅄🅂🅄🄰🅁🄸🄾໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪☁️
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬⛄◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯
├ׁ̟̇❍✎ *🄲ʟɪᴇɴᴛᴇ:* %name
├ׁ̟̇❍✎ *🄴xᴘ:* %exp
├ׁ̟̇❍✎ *🄴sᴛʀᴇʟʟᴀs:* %estrellas
├ׁ̟̇❍✎ *🄽ɪᴠᴇʟ:* %level
├ׁ̟̇❍✎ *🅁ᴀɴɢᴏ:* %role
╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝

%readmore
*─ׄ─ׄ─⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ─⭒─ׄ─ׄ─⭒─ׄ─ׅ─*

\t*L I S T A  -  D E  -  C O M A N D O S* 
`.trimStart(),
      header: '.    ╭─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🎄◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╮\n╭╼⛄⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ %category ໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪⛄\n┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬🎄◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸─ׅ─ׅ┈ ─๋︩︪─╯',
  body: '├ׁ̟̇❍✎ %cmd\n',
  footer: '╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝\n',
  after: `> ${dev}`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, estrellas, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        estrellas: plugin.estrellas,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `Powered by https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isdiamond/g, menu.diamond ? '(ⓓ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
taguser: '@' + m.sender.split("@s.whatsapp.net")[0],
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
botofc: (conn.user.jid == global.conn.user.jid ? '✨ 𝙴𝚂𝚃𝙴 𝙴𝚂 𝙴𝙻 𝙱𝙾𝚃 𝙾𝙵𝙲' : `✨ 𝚂𝚄𝙱-𝙱𝙾𝚃 𝙳𝙴: Wa.me/${global.conn.user.jid.split`@`[0]}`), 
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
greeting, level, estrellas, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

await conn.reply(m.chat, '*🎁 ᰩ❥𝐂𝐚𝐫𝐠𝐚𝐧𝐝𝐨 𝐌𝐞𝐧𝐮́ 𝐄𝐬𝐩𝐞𝐫𝐞❦᭄....*', 
null, { 
contextInfo:{ 
forwardingScore: 2022, 
isForwarded: true, 
externalAdReply: {
title: null, 
body: null, 
sourceUrl: gp1, 
thumbnail: icons }}})
await m.react('⛄') 
  let category = "imagen"
  const db = './media/database/db.json'
  const db_ = JSON.parse(fs.readFileSync(db))
  const random = Math.floor(Math.random() * db_.links[category].length)
  const rlink = db_.links[category][random]
  global.vid = rlink
  const response = await fetch(vid)
  const gif = await response.buffer()
// const img = imagen1

await conn.sendMini(m.chat, packname, wm, text.trim(), icons, icons, gp1, null)

  } catch {
    conn.reply(m.chat, '❗ Lo sentimos, el menú tiene un error', m, rcanal, )
   // throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'menuall', 'allmenú', 'allmenu', 'menucompleto'] 
handler.register = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

  var ase = new Date();
  var hour = ase.getHours();
switch(hour){
  case 0: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 1: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 💤'; break;
  case 2: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🦉'; break;
  case 3: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 4: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 5: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 6: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌄'; break;
  case 7: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 8: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 9: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 10: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌞'; break;
  case 11: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌨'; break;
  case 12: hour = 'Bᴜᴇɴᴏs Dɪᴀs ❄'; break;
  case 13: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌤'; break;
  case 14: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌇'; break;
  case 15: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🥀'; break;
  case 16: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌹'; break;
  case 17: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌆'; break;
  case 18: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 19: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 20: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌌'; break;
  case 21: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 22: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 23: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
}
  var greeting = hour;