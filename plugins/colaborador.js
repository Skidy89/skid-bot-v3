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
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str = `
🌸 Creador 🌸
+52 1 844 211 4446
+507 6347 6466
+56 9 8686 6901
+6580444123

🥀 ᴄᴏʟᴀʙᴏʀᴀᴅᴏʀ ᴇsᴘᴇᴄɪᴀʟ 🥀

+507 6357 6565

✍️ Agradecimientos

+52 614 594 3890

mi mama

mi perro
`
conn.sendButton(m.chat, str, author, pp, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^colaboradores|agradecimiento?$/i
export default handler
