import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
let potion = 1120
let Spotion = 150 
let limit = 350
let Slimit = 100
let Bdiamond = 900
let Sdiamond = 750
let Bcommon = 200
let Scommon = 20
let Suncommon = 100
let Buncommon = 600
let Bmythic = 2000 
let Smythic = 1100
let Blegendary = 7500 
let Slegendary = 3000
let Btrash = 10
let Strash = 20
let Bwood = 60
let Bramuan = 1000
let Bkyubi = 5000
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    let _armor = global.db.data.users[m.sender].armor
    let _sword = global.db.data.users[m.sender].sword
    let _bow = global.db.data.users[m.sender].bow
    let bow =  (_bow == 0 ? 20000 : '' || _bow == 1 ? 99 : '' || _bow == 2 ? 999 : '' || _bow == 3 ? 14999 : '' || _bow == 4 ? 29999 : '' || _bow == 5 ? 39999 : '' || _bow == 5 ? 49999 : '' || _bow == 6 ? 59999 : '' || _bow == 7 ? 69999 : '' || _bow == 8 ? 79999 : '' || _bow == 9 ? 89999 : '' || _bow == 10 ? 99999 : '')
    let armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '' || _armor == 5 ? 39999 : '' || _armor == 6 ? 59999 : '' || _armor == 7 ? 69999 : '' || _armor == 8 ? 79999 : '' || _armor == 9 ? 89999 : '' || _armor == 10 ? 99999 : '')
    let sword = (_sword == 0 ? 20000 : '' || _sword == 1 ? 49999 : '' || _sword == 2 ? 99999 : '' || _sword == 3 ? 149999 : '' || _sword == 4 ? 299999 : '' || _sword == 5 ? 39999 : '' || _sword == 6 ? 59999 : '' || _sword == 7 ? 69999 : '' || _sword == 8 ? 79999 : '' || _sword == 9 ? 89999 : '' || _sword == 10 ? 99999 : '')
let _pickaxe = global.db.data.users[m.sender].pickaxe
let _weapon = global.db.data.users[m.sender].weapon
let weapon =  (_weapon == 0 ? 200000  : '' || _weapon == 1 ? 99000: '' || _weapon == 2 ? 99009 : '' || _weapon== 3 ? 1499009 : '' || _weapon == 4 ? 2990099 : '')
   let pickaxe = (_pickaxe == 0 ? 20000 : '' || _pickaxe == 1 ? 49999 : '' || _pickaxe == 2 ? 99999 : '' || _pickaxe == 3 ? 149999 : '' || _pickaxe == 4 ? 299999 : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    let Kchat = `
🛒ARTICULOS PARA COMPRAR🛍️\n
*Ítems | Precio de compra*\n
• 🥋 Armadura:   ${armor}
• 🗡️ Espada:   ${sword}
• 🏹 Arco: ${bow}
• 🔫 Arma: ${weapon}
• 🥤 Pocion:   ${potion}
• 💎 Diamante:   ${Bdiamond}
• 📦 Comun:   ${Bcommon}
• 🛍️ Raro:   ${Buncommon}
• 🗃️ Mítico:   ${Bmythic}
• 🎁 Legendario:   ${Blegendary}
\n
✅ Ejemplos de uso: ${usedPrefix}comprar pocion 1\n
*Ítems | Precio de venta*\n
• 🥤 Pocion:   ${Spotion}
• ✨ Limit:   ${Slimit}
• 💎 Diamante:   ${Sdiamond}
• 📦 Comun:   ${Scommon}
• 🛍️ Raro:   ${Suncommon}
• 🗃️ Mítico:   ${Smythic}
• 🎁 Legendario:   ${Slegendary}
• 🗑️ basura:   ${Strash}\n
✅ Ejemplo de uso: ${usedPrefix}vender pocion 1 
`.trim()
let buttonMessage= {
'document': { url: `https://github.com/ALBERTO9883` },
'mimetype': `application/pdf`,
'fileName': `:v`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://xnxx.com',
'mediaType': 2,
'previewType': 'pdf',
'title': `🌺₊• ̥ 𝗧𝗜𝗘𝗡𝗗𝗔 𝗥𝗣𝗚 •̥₊🌺`,
'body': ``,
'thumbnail': global.imgshop,
'sourceUrl': 'https//wa.me/5218442114446' }},
'mentions': [m.sender],
'caption': Kchat,
'footer': `es un gusto tenerte aqui \nque deseas?`,
'buttons':[
{buttonId: `${usedPrefix}inv`, buttonText: {displayText: 'Inventario🎒'}, type: 1},
{buttonId: `${usedPrefix}daily`, buttonText: {displayText: 'Claim✨'}, type: 1}
],
'headerType': 6 }
    try {
        if (/shop|tienda/i.test(command)) {
            let count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            let trash = global.db.data.users[m.sender].trash
            switch (jualbeli) {
            case 'buy|comprar':
                switch (_type) {
                    case 'pocion':
                            if (global.db.data.users[m.sender].money >= potion * count) {
                                global.db.data.users[m.sender].money -= potion * count
                                global.db.data.users[m.sender].potion += count * 1
                                conn.reply(m.chat, `Compraste con exito ${count}  pocion/es precio de ${potion * count} dinero\n\nUsa pociones escribiendo: *${usedPrefix}use pocion <número>*`, m)
                            } else conn.reply(m.chat, `Tu dinero no es suficiente para comprar ${count} Pocion/es a precio de  ${potion * count} dinero`,)
                        break
                    case 'limit':
                             if (global.db.data.users[m.sender].exp >= limit * count) {
                             	global.db.data.users[m.sender].exp -= limit * count
                                 global.db.data.users[m.sender].limit += count * 1
                                 conn.reply(m.chat, `Compraste con exito ${count} limit por ${limit * count} exp`, m)
                              } else conn.reply(m.chat, `Tu experiencia no es suficiente para comprar ${count} limit por ${limit * count} exp`, m)
                           break
                    case 'diamante':
                            if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                                global.db.data.users[m.sender].diamond += count * 1
                                global.db.data.users[m.sender].money -= Bdiamond * count
                                conn.reply(m.chat, `Compraste con exito ${count} Diamante(s) por ${Bdiamond * count} monedas`, m)
                            } else conn.reply(m.chat, `Tu dinero no es suficiente`, m)
                        
                        break
                    case 'comun':
                            if (global.db.data.users[m.sender].money >= Bcommon * count) {
                                global.db.data.users[m.sender].common += count * 1
                                global.db.data.users[m.sender].money -= Bcommon * count
                                conn.reply(m.chat, `Compraste con exito ${count} caja(s) comun(es) por ${Bcommon * count} monedas`, m)
                            } else conn.reply(m.chat, `Tu dinero no es suficiente para comprar ${count} caja(s)s comun(es) por ${Bcommon * count} dinero\n\nAbre la caja escribiendo: *${usedPrefix}abrir comun*`, m)
                        
                        break
                    case 'raro':
                            if (global.db.data.users[m.sender].money >= Buncommon * count) {
                                global.db.data.users[m.sender].uncommon += count * 1
                                global.db.data.users[m.sender].money -= Buncommon * count
                                conn.reply(m.chat, `Compraste con exito ${count} caja(s) rara(s) por ${Buncommon * count} monedas`, m)
                            } else conn.reply(m.chat, `Tu dinero no es suficiente para comprar ${count} caja(s) comun(es) por ${Buncommon * count} monedas\n\nAbre la caja escribiendo: *${usedPrefix}abrir raro*`, m)
                        
                        break
                    case 'mitico':
                            if (global.db.data.users[m.sender].money >= Bmythic * count) {
                                    global.db.data.users[m.sender].mythic += count * 1
                                global.db.data.users[m.sender].money -= Bmythic * count
                                conn.reply(m.chat, `Compraste con exito ${count} Cofre mitico por ${Bmythic * count} monedas`, m)
                            } else conn.reply(m.chat, `No tienes suficiente dinero para comprar ${count} caja(s) mitica(s) por ${Bmythic* count} monedas\n\nAbre la caja escribiendo: *${usedPrefix}abrir mitico*`, m)
                        
                        break
                    case 'legendario':
                            if (global.db.data.users[m.sender].money >= Blegendary * count) {
                                global.db.data.users[m.sender].legendary += count * 1
                                global.db.data.users[m.sender].money -= Blegendary * count
                                conn.reply(m.chat, `Compraste con exito ${count} caja(s) legendarias por ${Blegendary * count} monedas`, m)
                            } else conn.reply(m.chat, `No tienes suficiente dinero para comprar ${count} caja(s) legendarias por ${Blegendary * count} monedas\n\nAbre la caja escribiendo: *${usedPrefix}abrir legendario*`, m)
                        
                        break
                    case 'basura':
                            if (global.db.data.users[m.sender].money >= Btrash * count) {
                                global.db.data.users[m.sender].trash += count * 1
                                global.db.data.users[m.sender].money -= Btrash * count
                                conn.reply(m.chat, `Compraste con exito ${count} de basura por ${Btrash * count} monedas`, m)
                            } else conn.reply(m.chat, `No tienes suficiente dinero para comprar ${count} de Basura por ${Btrash * count} monedas`.trim(), m)
                        
                        break
                    case 'espada':
                            if (global.db.data.users[m.sender].sword == 11) return conn.reply(m.chat, 'Tu espada ya esta *Nvl Max* que puedes llegar en la tienda maxeala crafteandola', m)
                            if (global.db.data.users[m.sender].money > sword) {
                                global.db.data.users[m.sender].sword += 1
                                global.db.data.users[m.sender].sworddurability += 50
                                global.db.data.users[m.sender].money -= sword * 1
                                conn.reply(m.chat, `Compraste con exito una espada por ${sword} monedas` ,m)
                            } else conn.reply(m.chat, `No tienes suficiente dinero para comprar una espada por ${sword} monedas`, m)
                     
                        break
                    case 'armadura':
                            if (global.db.data.users[m.sender].armor == 11) return conn.reply(m.chat, 'Tu armadura ya esta *Nivel Max*', m)
                            if (global.db.data.users[m.sender].money > armor) {
                                global.db.data.users[m.sender].armor += 1
                                global.db.data.users[m.sender].armordurability += 100
                                global.db.data.users[m.sender].money -= armor * 1
                                conn.reply(m.chat, `Compraste con exito una armadura por ${armor} monedas` ,m)
                            } else conn.reply(m.chat, `Tu dinero no es suficiente para comprar una armadura por ${armor} dinero`, m)
                        break
                    case 'arma':
                            if (global.db.data.users[m.sender].weapon == 5) return conn.reply(m.chat, 'Tu arma ya esta *Nivel Max*', m)
                            if (global.db.data.users[m.sender].money > weapon) {
                                global.db.data.users[m.sender].weapon += 1
                                global.db.data.users[m.sender].money -= weapon * 1
                                conn.reply(m.chat, `Compraste con exito un arma por ${weapom} monedas` ,m)
                            } else conn.reply(m.chat, `Tu dinero no es suficiente para comprar una arma por ${weapon} dinero`, m)
                        break
                    case 'arco':
                            if (global.db.data.users[m.sender].bow == 11) return conn.reply(m.chat, 'Tu arco ya esta *Nivel Max*', m)
                            if (global.db.data.users[m.sender].money > bow) {
                                global.db.data.users[m.sender].bow += 1
                                global.db.data.users[m.sender].bowdurability = 50
                                global.db.data.users[m.sender].money -= bow * 1
                                conn.reply(m.chat, `Compraste con exito una arco por ${bow} monedas` ,m)
                            } else conn.reply(m.chat, `Tu dinero no es suficiente para comprar una arco por ${bow} dinero`, m)
                        break
                    default:
                        return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'sell|vender': 
                switch (_type) {
                    case 'pocion':
                        if (global.db.data.users[m.sender].potion >= count * 1) {
                            global.db.data.users[m.sender].money += Spotion * count
                            global.db.data.users[m.sender].potion -= count * 1
                            conn.reply(m.chat, `Conpraste con exito ${count} al precio de ${Spotion * count} monedas`.trim(), m)
                        } else conn.reply(m.chat, `Tus pociones no son suficientes`.trim(), m)
                        break
                   case 'limit':
                       if (global.db.data.users[m.sender].limit >= count * 1) {
                            global.db.data.users[m.sender].exp += Slimit * count
                            global.db.data.users[m.sender].limit -= count * 1
                            conn.reply(m.chat, `Compraste con exito ${count} limit a precio de ${Slimit * count} exp`.trim(), m)
                         } else conn.reply(m.chat, `Tus límit no son suficientes`.trim(), m)
                         break
                    case 'comun':
                        if (global.db.data.users[m.sender].common >= count * 1) {
                            global.db.data.users[m.sender].money += Scommon * count
                            global.db.data.users[m.sender].common -= count * 1
                            conn.reply(m.chat, `Venta exitosa, vendiste ${count} Caja(s) común(es) por ${Scommon * count} monedas`.trim(), m)
                        } else conn.reply(m.chat, `Tus Caja(s) Común(es) no son suficientes`.trim(), m)
                        break
                    case 'raro':
                        if (global.db.data.users[m.sender].uncommon >= count * 1) {
                            global.db.data.users[m.sender].money += Suncommon * count
                            global.db.data.users[m.sender].uncommon -= count * 1
                            conn.reply(m.chat, `Venta exitosa, vendiste ${count} caja(s) rara(s) al precio de ${Suncommon * count} monedas`.trim(), m)
                        } else conn.reply(m.chat, `Tu(s) caja(s) rara(s) no son suficientes`.trim(), m)
                        break
                    case 'mitico':
                        if (global.db.data.users[m.sender].mythic >= count * 1) {
                            global.db.data.users[m.sender].money += Smythic * count
                            global.db.data.users[m.sender].mythic -= count * 1
                            conn.reply(m.chat, `Venta exitosa, vendiste ${count} caja(s) mitica(s) por ${Smythic * count} monedas`.trim(), m)
                        } else conn.reply(m.chat, `Tu(s) Caja(s) Mítica(s) no son suficientes`.trim(), m)
                        break
                    case 'legendario':
                        if (global.db.data.users[m.sender].legendary >= count * 1) {
                            global.db.data.users[m.sender].money += Slegendary * count
                            global.db.data.users[m.sender].legendary -= count * 1
                            conn.reply(m.chat, `Venta exitosa, vendiste ${count} caja(s) comun(es) por ${Slegendary * count} monedas`.trim(), m)
                        } else conn.reply(m.chat, `Tu(s) caja(s) legendaria(s) no son suficientes`.trim(), m)
                        break
                    case 'basura':
                        if (global.db.data.users[m.sender].trash >= count * 1) {
                            global.db.data.users[m.sender].trash -= count * 1
                            global.db.data.users[m.sender].money += Strash * count
                            conn.reply(m.chat, `Venta exitosa, vendiste ${count} de basura, y obtienes ${Strash * count} monedas`, m)
                        } else conn.reply(m.chat, `Tu basura no es suficiente`, m)
                        break
                    case 'diamante':
                        if (global.db.data.users[m.sender].diamond >= count * 1) {
                            global.db.data.users[m.sender].diamond -= count * 1
                            global.db.data.users[m.sender].money += Sdiamond * count
                            conn.reply(m.chat, `Venta exitosa, vendiste ${count} diamantes, y obtienes ${Sdiamond * count} monedas`, m)
                        } else conn.reply(m.chat, `Tus diamantes no son suficientes`, m)
                        break
                    default:
                        return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
            default:
                return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
        } else if (/buy|comprar/i.test(command)) {
            let count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'pocion':
                        if (global.db.data.users[m.sender].money >= potion * count) {
                            global.db.data.users[m.sender].money -= potion * count
                            global.db.data.users[m.sender].potion += count * 1
                            conn.reply(m.chat, `Compraste con exito ${count} Pocion(es) a precio de ${potion * count} monedas\n\n*Usa la pocion escribiendo: ${usedPrefix}usar pocion <cantidad>*`, m)
                        } else conn.reply(m.chat, `No tienes suficiente dinero para comprar ${count}  ${potion * count} monedas`,m)
                    
                    break
               case 'limit':
                        if (global.db.data.users[m.sender].exp >= limit * count) {
                        	global.db.data.users[m.sender].exp -= limit * count
                            global.db.data.users[m.sender].limit += count * 1
                            conn.reply(m.chat, `Compraste con exito ${count} a precio de ${limit * count} exp`, m)
                         } else conn.reply(m.chat, `Exp kamu tidak cukup untuk membeli ${count} limit dengan harga ${limit * count} exp`, m)
                         break
                case 'diamante':
                        if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                            global.db.data.users[m.sender].diamond += count * 1
                            global.db.data.users[m.sender].money -= Bdiamond * count
                            conn.reply(m.chat, `Compraste con exito ${count} Diamante(s) por ${Bdiamond * count} monedas`, m)
                        } else conn.reply(m.chat, `Money anda tidak cukup`, m)
                    
                    break
                case 'comun':
                        if (global.db.data.users[m.sender].money >= Bcommon * count) {
                            global.db.data.users[m.sender].common += count * 1
                            global.db.data.users[m.sender].money -= Bcommon * count
                            conn.reply(m.chat, `Compraste con exito  ${count} caja comun a precio de ${Bcommon * count} dinero`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Common crate dengan harga ${Bcommon * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, m)
                    
                    break
                case 'raro':
                        if (global.db.data.users[m.sender].money >= Buncommon * count) {
                            global.db.data.users[m.sender].uncommon += count * 1
                            global.db.data.users[m.sender].money -= Buncommon * count
                            conn.reply(m.chat, `Compraste con exito ${count} caja rara a precio de ${Buncommon * count} dinero`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Uncommon crate dengan harga ${Buncommon * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, m)
                   
                    break
                case 'mitico':
                        if (global.db.data.users[m.sender].money >= Bmythic * count) {
                            global.db.data.users[m.sender].mythic += count * 1
                            global.db.data.users[m.sender].money -= Bmythic * count
                            conn.reply(m.chat, `Compraste con exito ${count} caja/s mitica/s a precio de ${Bmythic * count} dinero`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Mythic crate dengan harga ${Bmythic* count} money\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, m)
                    
                    break
                case 'legendario':
                        if (global.db.data.users[m.sender].money >= Blegendary * count) {
                            global.db.data.users[m.sender].legendary += count * 1
                            global.db.data.users[m.sender].money -= Blegendary * count
                            conn.reply(m.chat, `Compraste con exito ${count} caja/s legendaria/s a precio de ${Blegendary * count} dinero`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Legendary crate dengan harga ${Blegendary * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)
                    
                    break
                case 'basura':
                        if (global.db.data.users[m.sender].money >= Btrash * count) {
                            global.db.data.users[m.sender].trash += count * 1
                            global.db.data.users[m.sender].money -= Btrash * count
                            conn.reply(m.chat, `Compraste con exito ${count} Basura a precio de ${Btrash * count} dinero`, m)
                        } else conn.reply(m.chat, `No tienes suficiente dinero para comprar ${count} Basura por ${Btrash * count} mlnedas`.trim(), m)
                    
                    break
                case 'espada':
                        if (global.db.data.users[m.sender].sword == 11) return conn.reply(m.chat, 'swordmu sudah *Level Max*', m)
                        if (global.db.data.users[m.sender].money > sword * 1) {
                            global.db.data.users[m.sender].sword += 1
                            global.db.data.users[m.sender].sworddurability += 50
                            global.db.data.users[m.sender].money -= sword * 1
                            conn.reply(m.chat, `Compraste con exito una espada a precio de ${sword} dinero` ,m)
                          
                        } else conn.reply(m.chat, `No tienes suficiente dinero para comprar una espada por ${sword} monedas`, m)
                    
                    break
                    case 'arma':
                            if (global.db.data.users[m.sender].weapon == 5) return conn.reply(m.chat, 'Tu arma ya esta *Nivel Max*', m)
                            if (global.db.data.users[m.sender].money > weapon) {
                                global.db.data.users[m.sender].weapon += 1
                                global.db.data.users[m.sender].money -= weapon * 1
                                conn.reply(m.chat, `Compraste con exito un arma por ${weapom} monedas` ,m)
                            } else conn.reply(m.chat, `Tu dinero no es suficiente para comprar una arma por ${weapon} dinero`, m)
                        break
                case 'armadura':
                        if (global.db.data.users[m.sender].armor == 11) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                        if (global.db.data.users[m.sender].money > armor * 1) {
                            global.db.data.users[m.sender].armor += 1
                            global.db.data.users[m.sender].armordurability += 1
                            global.db.data.users[m.sender].money -= armor * 1
                            conn.reply(m.chat, `Compraste con exito una armadura por ${armor} monedas` ,m)
                          
                        } else conn.reply(m.chat, `Tu dinero no es suficiente para comprar una armadura ${armor}`, m)
                case 'arco':
                            if (global.db.data.users[m.sender].bow == 11) return conn.reply(m.chat, 'Tu arco ya esta *Nivel Max*', m)
                            if (global.db.data.users[m.sender].money > bow) {
                                global.db.data.users[m.sender].bow += 1
                                global.db.data.users[m.sender].bowdurability = 50
                                global.db.data.users[m.sender].money -= bow * 1
                                conn.reply(m.chat, `Compraste con exito un arco por ${bow} monedas` ,m)
                            } else conn.reply(m.chat, `Tu dinero no es suficiente para comprar una arco por ${bow} dinero`, m)
                        break
                    break
                default:
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
 
                    break
             case 'pico':
                        if (lobal.db.data.users[m.sender].pickaxe == 11) return conn.reply(m.chat, 'Tu pico esta a nivel maximo', m)
                        if (lobal.db.data.users[m.sender].money > pickaxe * 1) {
                            lobal.db.data.users[m.sender].pickaxe += 1
                            lobal.db.data.users[m.sender].pickaxedurability += ( 0 ? 500 : '' || 1 ? 1000 : '' || 2 ? 1500 : '' || 3 ? 2000 : '' || 4 ? 2500 : '' || 5 ? 3000 : '')
                            lobal.db.data.users[m.sender].money -= pickaxe * 1
                            conn.reply(m.chat, `Compraste un pico por ${pickaxe} de dinero` ,m)
                          
                        } else conn.reply(m.chat, `Tu dinero no es suficiente para comprar un pico que cuesta ${pickaxe} de dinero`, m)
                        break
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
        } else if (/sell|vender|/i.test(command)) {
            let count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'pocion':
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].money += Spotion * count
                        global.db.data.users[m.sender].potion -= count * 1
                        conn.reply(m.chat, `Venta exitosa, vendiste ${count} pocion/es al precio de ${Spotion * count} dinero`.trim(), m)
                    } else conn.reply(m.chat, `Tus pociones no son suficientes`.trim(), m)
                    break
                case 'limit':
                    if (global.db.data.users[m.sender].limit >= count * 1) {
                        global.db.data.users[m.sender].exp += Slimit * count
                        global.db.data.users[m.sender].limit -= count * 1
                        conn.reply(m.chat, `Venta exitosa, vendiste ${count} limit a precio de ${Slimit * count} exp`.trim(), m)
                    } else conn.reply(m.chat, `Tu límite no es suficiente`.trim(), m)
                    break
                case 'comun':
                    if (global.db.data.users[m.sender].common >= count * 1) {
                        global.db.data.users[m.sender].money += Scommon * count
                        global.db.data.users[m.sender].common -= count * 1
                        conn.reply(m.chat, `Venta exitosa, vendiste ${count} caja/s comun/es a precio de ${Scommon * count} dinero`.trim(), m)
                    } else conn.reply(m.chat, `Tus cajas comunes no son suficientes `.trim(), m)
                    break
                case 'raro':
                    if (global.db.data.users[m.sender].uncommon >= count * 1) {
                        global.db.data.users[m.sender].money += Suncommon * count
                        global.db.data.users[m.sender].uncommon -= count * 1
                        conn.reply(m.chat, `Venta exitosa vendiste ${count} cajs/s rara/s a precio de ${Suncommon * count} dinero`.trim(), m)
                    } else conn.reply(m.chat, `Tus cajas raras no son suficientes`.trim(), m)
                    break
                case 'mitico':
                    if (global.db.data.users[m.sender].mythic >= count * 1) {
                        global.db.data.users[m.sender].money += Smythic * count
                        global.db.data.users[m.sender].mythic -= count * 1
                        conn.reply(m.chat, `Venta exitosa, vendiste ${count} caja/s mitica/s a precio de ${Smythic * count} dinero`.trim(), m)
                    } else conn.reply(m.chat, `Tus cajas miticas no son suficientes`.trim(), m)
                    break
                case 'legendario':
                    if (global.db.data.users[m.sender].legendary >= count * 1) {
                        global.db.data.users[m.sender].money += Slegendary * count
                        global.db.data.users[m.sender].legendary -= count * 1
                        conn.reply(m.chat, `Venta exitosa, vendiste ${count} caja/s lendaria/s a precio de ${Slegendary * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Tus cajas legendarias no son suficientes`.trim(), m)
                    break
                case 'basura':
                    if (global.db.data.users[m.sender].trash >= count * 1) {
                        global.db.data.users[m.sender].trash -= count * 1
                        global.db.data.users[m.sender].money += Strash * count
                        conn.reply(m.chat, `Venta exitosa, vendiste ${count} basura, y obtienes ${Strash * count} dinero`.trim(), m)
                    } else conn.reply(m.chat, `Tu basura no es suficiente `.trim(), m)
                    break
                case 'diamante':
                    if (global.db.data.users[m.sender].diamond >= count * 1) {
                        global.db.data.users[m.sender].diamond -= count * 1
                        global.db.data.users[m.sender].money += Sdiamond * count
                        conn.reply(m.chat, `Venta exitosa, vendiste ${count} diamantes, y obtienes ${Sdiamond * count} dinero`, m)
                    } else conn.reply(m.chat, `Tus diamantes no son suficientes `, m)
                    break
                default:
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
        }
    } catch (e) {
        conn.sendMessage(m.chat, buttonMessage, { quoted: m })
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['tienda <vender|comprar> <item>', 'shop <buy|sell> <item>']
handler.tags = ['rpg']
    
handler.command = /^(shop|tienda|vender|sell|comprar)$/i
export default handler

