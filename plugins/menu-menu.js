import { xpRange } from '../lib/levelling.js'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
let miniurl = imagen4
const defaultMenu = {
  before: `
*┏━「sᴋɪᴅ-ʙᴏᴛ」━⊜*
┃⋄ 👋 *Hola %taguser!!*
┃⋄ 🕒 *Hora*: %time
┃⋄ 🗓 *Fecha*: %date
┃⋄ 📅 *Día*: %week
┗━━◘
%readmore`.trimStart(),
  header: '*┏━⊜「 %category 」*',
  body: '*┃›* %cmd %islimit %isPremium',
  footer: '*┗━━━━━━⬣*\n',
  after: ``,
}
let handler = async (m, { conn, usedPrefix: usedPrefix, args, command, __dirname }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'xp', 'stiker', 'nime', 'search', 'rpg', 'rg', 'frases', 'premium', 'img', 'group', 'logo', 'nable', 'tools', 'fun', 'database', 'downloader', 'audio', 'nsfw', 'info', 'owner', 'main', 'advanced', 'audio', 'vote']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (!args[0]) teks = '404'
  if (teks == 'all') tags = {
    'main': 'Menús📒',
  'info': 'Información👨‍💻',
  'search': 'Busquedas🔎',
  'game': 'Juegos🕹️',
  'xp': 'Nivel Y Economía⚖️',
  'rpg': 'RPG⚔',
  'rg': 'Registro🗃️',
  'sticker': 'Sticker🏞️',
  'frases': 'Frases🥀',
   'img': 'Imágenes🪴',
  'group': 'Grupo👻',
  'logo': 'Maker Y Logos📝',
  'nable': 'Des/Activar opciones⚙️', 
  'premium': 'Premium🪪',
  'nime': 'Anime㊗',
  'downloader': 'Descargas📥',
  'tools': 'Herramientas🧰',
  'fun': 'Diversión🎭',
  'database': 'Base de Datos🗄️',
  'nsfw': 'Nsfw🔞', 
  'owner': 'Creador📌', 
  'advanced': 'Avanzado🖥️',
  'audio': 'Efecto de Audios🔊',
  'vote': 'Votaciones🗳',
  }
  if (teks == 'game') tags = {
    'game': 'Juegos🕹'
  }
  if (teks == 'xp') tags = {
    'xp': 'Nivel Y Economía⚖'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Sticker🏞'
  }
  if (teks == 'nime') tags = {
    'nime': 'Anime㊗'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'RPG⚔'
  }
  if (teks == 'rg') tags = {
    'rg': 'Registro🗃'
  }
  if (teks == 'frases') tags = {
    'frases': 'Frases🥀'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium🪪'
  }
  if (teks == 'img') tags = {
    'img': 'Imágenes🪴'
  }
  if (teks == 'group') tags = {
    'group': 'Grupo👻'
  }
  if (teks == 'logo') tags = {
    'logo': 'Maker Y Logos📝'
  }
  if (teks == 'nable') tags = {
    'nable': 'Des/Activar opciones⚙'
  }
  if (teks == 'tools') tags = {
    'tools': 'Herramientas🧰'
  }
  if (teks == 'fun') tags = {
    'fun': 'Diversión🎭'
  }
  if (teks == 'database') tags = {
    'database': 'Base de Datos🗄'
  }
  if (teks == 'audio') tags = {
    'audio': 'Efecto de Audios🔊'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Descargas📥'
  }
  if (teks == 'advanced') tags = {
    'advanced': 'Avanzado🖥'
  }
  if (teks == 'info') tags = {
    'info': 'Información👨🏻‍💻'
  }
  if (teks == 'owner') tags = {
    'owner': 'Creador📌'
  }
  if (teks == 'main') tags = {
    'main': 'Menús📒'
    }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw🔞'
    }
  if (teks == 'search') tags = {
    'search': 'Busquedas🔎'
    }
  if (teks == 'vote') tags = {
    'vote': 'Votaciones🗳'
    }



  try {
    let packager = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max, totalexp } = xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
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
      second: 'numeric',
      hour12: true
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
    let user = global.db.data.users[m.sender]
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      const sections = [
            {
              "rows": [{
                "title": `Creador 🌹`,
                "description": "Contactos de mi owner",
                "rowId": `${usedPrefix}owner`
              }, {
                "title": "InfoBot 📈",
                "description": "Info acerca del Bot",
                "rowId": `${usedPrefix}infobot`
              }, {
                "title": "Grupos Oficiales 🍉",
                "description": "Grupos aliados de Skid Bot",
                "rowId": `${usedPrefix}grupos`
              }],
              "title": "Aᴄᴇʀᴄᴀ ᴅᴇʟ ʙᴏᴛ "
            }, {
              "rows": [{
                "title": `Menú Completo 📤`,
                "description": "Menú donde se encuentran todos los comandos",
                "rowId": `${usedPrefix}allmenu`
                }],

              "title": "━━◌*̥₊「 1 」₊*̥◌━━"
            }, {
              "rows": [{
                "title": `Registro🗃`,
                "description": "Registros y Información de número de serie",
                "rowId": `${usedPrefix}rg`
              }],
              "title": "━━◌*̥₊「 2 」₊*̥◌━━"
            }, {
              "rows": [{
                "title": `Sticker🏞`,
                "description": "Menú acerca de pegatinas",
                "rowId": `${usedPrefix}stickermenu`
              }],
              "title": "━━◌*̥₊「 3 」₊*̥◌━━"
            }, {
              "rows": [{
                "title": `Desactivar/Activar opciones⚙`,
                "description": "Menu de opciones activables he desactivables",
                "rowId": `${usedPrefix}enable`
              }],
              "title": "━━◌*̥₊「 4 」₊*̥◌━━"
            }, {
              "rows":[{
                "title": `Premium🪪`,
                "description": "Menu para usuarios premium (proximamente)",
                "rowId": `${usedPrefix}menupremium`
              }],
              "title": "━━◌*̥₊「 5 」₊*̥◌━━"
            }, {
              "rows": [{
                "title": `Anime㊗`,
                "description": "Menú de otakus",
                "rowId": `${usedPrefix}animemenu`
              }],
              "title": "━━◌*̥₊「 6 」₊*̥◌━━"
            }, {
              "rows": [{
                "title": `Descargas📥`,
                "description": "Menú de descargas",
                "rowId": `${usedPrefix}descargasmenu`
              }],
              "title": "━━◌*̥₊「 7 」₊*̥◌━━"
            }, {
              "rows": [{
                "title": `Diversión🎭`,
                "description": "Menú divertido",
                "rowId": `${usedPrefix}juegosdelgrupo`
              }],
              "title": "━━◌*̥₊「 8 」₊*̥◌━━"
            }, {
              "rows": [{
                "title": `Creador📌`,
                "description": "Menú de comandos para el creador",
                "rowId": `${usedPrefix}soloparaelpropietario`
              }],
              "title": "━━◌*̥₊「 9 」₊*̥◌━━"
            }, {
              "rows": [{
                "title": `Avanzado🖥`,
                "description": "Comandos avanzados (owner)",
                "rowId": `${usedPrefix}soloparaelpropietario`
              }],
              "title": "━━◌*̥₊「 10 」₊*̥◌━━"
            }, {
              "rows": [{
                "title":  `Efecto de Audios🔊`,
                "description": "Categoría de efectos de audio",
                "rowId": `${usedPrefix}menuaudios`
              }],
              "title": "━━◌*̥₊「 11 」₊*̥◌━━"
            }, {
              "rows": [{
                "title": `Votaciones🗳`,
                "description": "Menú de comandos para iniciar o cerrar votaciones",
                "rowId": `${usedPrefix}menuvote`
              }],
              "title": "━━◌*̥₊「 25 」₊*̥◌━━"
            }]
          const listMessage = {
            text: `
*┏━「sᴋɪᴅ-ʙᴏᴛ」━⊜*
┃⋄ 🕒 *Hora*: ${time}
┃⋄ 🗓 *Fecha*: ${date}
┃⋄ 📅 *Día*: ${week}
┃⋄ 📂 *Version*: 1.4.0 Bug update
┗━━◘

┏━━⊜ *_INFO USER_* ━⊜
┃⋄ 📇 *Nombre*: @${m.sender.split`@`[0]} 
┃⋄ ♦️ *Gemas*: ${limit}
┃⋄ 📊 *Nivel*: ${level}
┃⋄ ✨ *Exp*: ${user.exp - min}/${xp}
┃⋄ 📍 *Rol*: ${role}
┃⋄ 🪪 *Premium*: ${global.prems ? '✅' : '❌'}
┃⋄ 🔮 *Owner*: ${global.owner ? '✅' : '❌'}
┗━━◘`,
            footer: wm,
            title: null,
            mentions: [m.sender],
            buttonText: "Menus",
            sections
        }
        let emot = pickRandom(["📤", "☃️", "🌺", "♨️", "👻", "🥀", "💕","☕","✨", "🚀"])
        await conn.sendMessage(m.chat, { react: { text: emot, key: m.key }})
        await conn.sendMessage(m.chat, listMessage, { quoted: m})
    } else {
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '◜🪙◞' : '')
                .replace(/%isPremium/g, menu.premium ? '◜🪪◞' : '')
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
      p: usedPrefix, uptime, muptime,
      me: conn.getName(conn.user.jid),
      taguser: '@' + m.sender.split("@s.whatsapp.net")[0],
      npmname: packager.name,
      npmdesc: packager.description,
      version: packager.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${usedPrefix}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: packager.homepage ? packager.homepage.url || packager.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    let buttons = [
                    { buttonId: '!owner', buttonText: { displayText: 'Creador 🐢' }, type: 1 },
                    { buttonId: '!infobot', buttonText: { displayText: 'Info 📌' }, type: 1 }
                ]
                let buttonMessage = {
                    image: imagen4,
                    caption: text.trim(),
                    mentions: [m.sender],
                    footer: `*${wm}*`,
                    buttons: buttons,
                    headerType: 4,
                    contextInfo: {
                    mentionedJid: [m.sender],
                    externalAdReply: {
                    showAdAttribution: false,
                    mediaType: 'VIDEO',
                    mediaUrl: 'https://pornhub.com',
                    title: 'sᴋɪᴅ-ʙᴏᴛ',
                    body: '🥀 1.4.0 🥀',
                    thumbnail: miniurl,
                    sourceUrl: global.linkgc
                    }}
                }
                await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
  }
  } catch (e) {
    conn.sendMessage(m.chat, { react: { text: '❌', key: m.key }})
    conn.reply(m.chat, '❎ Lo sentimos, el menú tiene un error', m)
    throw e
  }
}
handler.help = ['listmenu']
handler.tags = ['main']
handler.command = /^(listmenu|menu|Menu|\?)$/i


handler.fail = null
handler.exp = 3

export default handler

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
