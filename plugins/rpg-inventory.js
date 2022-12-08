/* creado por skid */

import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, participants}) => {
let pp = 'https://i.imgur.com/WHjtUae.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `El usuario que está mencionando no está registrado en mi base de datos`

try {
pp = await conn.profilePictureUrl(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let prem = global.prems.includes(who.split`@`[0])
let { money, joincount, kyubi, fideos, legendary, common, uncoommon, mythic, aqua, coal, eleksirb, umpan } = global.db.data.users[m.sender]
let { trash, health, potion, iron, wood, rock, gems, emerald, string, ramuan, role } = global.db.data.users[m.sender]
let sword = global.db.data.users[m.sender].sword
let { pisang, apel, jeruk, anggur, mangga, botol, kardus, kuda, fox, kucing, anjing, banteng, harimau, gajah, kambing, panda, buaya, kerbau, sapi, monyet, babihutan, babi, ayam, makananpet, ayamg, ssapi, ayamb, sapir, pet,} = global.db.data.users[m.sender]
let sdurability = global.db.data.users[who].sworddurability
let bow = global.db.data.users[m.sender].bow
let bdurability = global.db.data.users[who].bowdurability
let pickaxe = global.db.data.users[m.sender].pickaxe
let pdurability = global.db.data.users[m.sender].pickaxedurability 
let armor = global.db.data.users[m.sender].armor
let adurability = global.db.data.users[m.sender].armordurability
let weapon = global.db.data.users[m.sender].weapon
let wdurability = global.db.data.users[m.sender].weapondurability
let pareja = global.db.data.users[m.sender].pasangan
let pasangan = global.db.data.users[m.sender].pasangan
let inventory = `
*🎒 inventario de ${name}*
*♥️ Vida: ${health}*
*💕 Pareja: *» *${pasangan ? `@${pasangan.split("@")[0]}` : `Soltero/a`}**
*🗑️ Basura: ${trash}*
*♦️ Gemas: ${money}*
*🥤Pociones: ${potion}*
*🌀Magia: ${kyubi}*
*🗡️ Espada: ${sword == 0 ? 'no tiene' : '' || sword == 1 ? 'espada de madera' : '' || sword == 2 ? 'espada de piedra' : '' || sword == 3 ? 'espada de hierro' : '' || sword == 4 ? 'espada de oro' : '' || sword == 5 ? 'espada de diamante': ''|| sword == 6 ? 'doble katana de oro' : ''|| sword == 7 ? 'katana de esmeralda' : '' || sword == 8 ? 'cuchilla de obsidiana' : '' || sword == 9 ? 'abisal' : '' || sword == 10 ? 'samurai sagrada' : '' || sword == 11 ? 'espada doble afiliada' : ''}*
🔮Durabilidad: ${sdurability}%*
*🏹Arco: ${bow == 0 ? 'no tiene' : '' || bow == 1 ? 'arco sin flechas' : '' || bow == 2 ? 'arco roto' : '' || bow == 3 ? 'arco' : '' || bow == 4 ? 'arco espectral' : '' || bow == 5 ? 'arco reforzado': ''|| bow == 6 ? 'arco escudo' : ''|| bow == 7 ? 'arco penetrante' : '' || bow == 8 ? 'arco multiple' : '' || bow == 9 ? 'arco de la perdicion' : '' || bow == 10 ? 'arco sagrado' : '' || bow == 11 ? 'arco explosivo' : ''}*
*🔮 Durabilidad: ${bdurability}%*
*⛏️pico:  ${pickaxe == 0 ? 'no tiene' : '' || pickaxe == 1 ? 'pico sin filo' : '' || pickaxe == 2 ? 'pico roto' : '' || pickaxe == 3 ? 'pico de hierro' : '' || pickaxe == 4 ? 'pico de la fortuna' : '' || pickaxe == 5 ? 'pico reforzado': ''|| pickaxe == 6 ? 'pico martillo' : ''|| pickaxe == 7 ? 'pico de la suerte' : '' || pickaxe == 8 ? 'pico multiple' : '' || pickaxe == 9 ? 'pico divino' : '' || pickaxe == 10 ? 'pico de Minecraft' : '' || pickaxe == 11 ? 'pico hackeado' : ''}*
🔮 Durabilidad: ${pdurability}%*
*🥋armadura: ${armor == 0 ? 'no tiene' : '' || armor == 1 ? 'armadura desgastada' : '' || armor == 2 ? 'armadura con parches' : '' || armor == 3 ? 'kit de pelea' : '' || armor == 4 ? 'kit de policia' : '' || armor == 5 ? 'armadura militar': ''|| armor == 6 ? 'armadura gorka' : ''|| armor == 7 ? 'kit de caballero' : '' || armor == 8 ? 'armadura clonada' : '' || armor == 9 ? 'armadura divina' : '' || armor == 10 ? 'armadura con endoesqueleto' : '' || armor == 11 ? 'armadura de samurai sagrado' : ''}*
*🔮Durabilidad: ${adurability}%*
*🔫Arma: ${weapon == 0 ? 'no tiene' : '' || weapon == 1 ? 'arma desgastada' : '' || weapon == 2 ? 'pistola doble' : '' || weapon == 3 ? 'ak47 de oro' : '' || weapon == 4 ? 'arma militar' : '' || weapon == 5 ? 'minigun': ''}*
*🔮Durabilidad: ${wdurability}%*

*objetos:*
*🪵Madera: ${wood}*
*🪨 Roca: ${rock}*
*♠️ Gema oscura: ${gems}*
*⛓️ Hierro:${iron}*
*🕸️ Cuerda: ${string}*
*🪙Token: ${joincount}*
*🧪 Ingrediente NOVA: ${ramuan}*
*💚 Esmeralda: ${emerald}*
*🍜 Fideos: ${fideos}*
*🪱 Carnada: ${umpan}*
*💡 Electricidad: ${eleksirb}*
*💧 Agua: ${aqua}*
*⚱️ Carbón: ${coal}*
*🍶 Botellas: ${botol}*
*🪧 Carton: ${kardus}*


Cajas:
*📦 Caja comun: ${common}*
*🥡 Caja Poco Común: ${uncoommon}*
*🗳️ Caja Mítica: ${mythic}*
*🎁 Caja Legendaria: ${legendary}*
*${rpg.emoticon('pet')}: ${pet}*

Comidas:
*🥓 Comida de Mascota :   ${makananpet}*
*🍖 Pollo a la Parrilla :  ${ayamb}*
*🍗 Pollo frito :   ${ayamg}*
*🥘 Alimento de Carne :  ${sapir}*
*🥩 Bistec de Carne : ${ssapi}*
*🎒 Total inv » ${makananpet + ayamb + ayamg + sapir + ssapi} Comida*



*Animales para cocinar:*
*${rpg.emoticon('bull')} ➡️ ${banteng}*
*${rpg.emoticon('tiger')} ➡️ ${harimau}*
*${rpg.emoticon('elephant')} ➡️ ${gajah}*
*${rpg.emoticon('kambing')} ➡️ ${kambing}*
*${rpg.emoticon('panda')} ➡️ ${panda}*
*${rpg.emoticon('buaya')} ➡️ ${buaya}*
*${rpg.emoticon('kerbau')} ➡️ ${kerbau}*
*${rpg.emoticon('cow')} ➡️ ${sapi}*
*${rpg.emoticon('monyet')} ➡️ ${monyet}*
*${rpg.emoticon('Jabali')} ➡️ ${babihutan}*
*${rpg.emoticon('babi')} ➡️ ${babi}*
*${rpg.emoticon('ayam')} ➡️ ${ayam}*

*🥢 Animales listos para Cocinar*
*💬 Animales totales » ${ buaya + gajah + panda + babihutan + monyet + harimau + kerbau + kambing + ayam + sapi + babi + banteng } Para Cocinar*
`
conn.sendButton(m.chat, inventory, author, pp, [['🏝️ ᴀᴠᴇɴᴛᴜʀᴀ️', '/adv']], m)}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^inv|inventario?$/i
export default handler
