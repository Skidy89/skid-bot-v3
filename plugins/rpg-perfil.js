import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, participants}) => {
let pp = 'https://i.imgur.com/WHjtUae.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `El usuario que estΓ‘ mencionando no estΓ‘ registrado en mi base de datos`
try {
pp = await conn.profilePictureUrl(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str = `*π½πΎπΌπ±ππ΄:* ${username} ${registered ? '(' + name + ') ': ''}
*π½ππΌπ΄ππΎ:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*π»πΈπ½πΊ:* wa.me/${who.split`@`[0]}${registered ? '\n*π΄π³π°π³:* ' + age + ' aΓ±os' : ''}
*π»πΈπΌπΈππ΄:* ${limit} πππΎπ
*ππ΄πΆπΈππππ°π³πΎ:* ${registered ? 'Si': 'No'}
*πΏππ΄πΌπΈππΌ:* ${prem ? 'βοΈ' : 'β'}

βββββββββββββββββββββ
β£ ΰΆ¬β π΅ _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
β£ ΰΆ¬β π΅ _${usedPrefix}balance_
β£ ΰΆ¬β π΅ _${usedPrefix}claim_
β£ ΰΆ¬β π΅ _${usedPrefix}lb_
β£ ΰΆ¬β π΅ _${usedPrefix}levelup_
β£ ΰΆ¬β π΅ _${usedPrefix}myns_
β£ ΰΆ¬β π΅ _${usedPrefix}perfil_
β£ ΰΆ¬β π΅ _${usedPrefix}work_
β£ ΰΆ¬β π΅ _${usedPrefix}minar_
β£ ΰΆ¬β π΅ _${usedPrefix}buy_
β£ ΰΆ¬β π΅ _${usedPrefix}buyall_
β£ ΰΆ¬β π΅ _${usedPrefix}tienda
β£ ΰΆ¬β π΅ _${usedPrefix}verificar_
β£ ΰΆ¬β π΅ _${usedPrefix}minar2_
β£ ΰΆ¬β π΅ _${usedPrefix}minar3_
β£ ΰΆ¬β π΅ _${usedPrefix}aventura_
β£ ΰΆ¬β π΅ _${usedPrefix}aventura2_
β£ ΰΆ¬β π΅ _${usedPrefix}aventura3_
β£ ΰΆ¬β π΅ _${usedPrefix}robar_
β£ ΰΆ¬β π΅ _${usedPrefix}dungeon_
β£ ΰΆ¬β π΅ _${usedPrefix}inv_
β£ ΰΆ¬β π΅ _${usedPrefix}cofre_
β£ ΰΆ¬β π΅ _${usedPrefix}craftear_
β£ ΰΆ¬β π΅ _${usedPrefix}unreg *<numero de serie>*_
βββββββββββββββββββββ
`
conn.sendButton(m.chat, str, author, pp, [['πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π»', '/menu']], m)}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^menu|profile?$/i
export default handler
