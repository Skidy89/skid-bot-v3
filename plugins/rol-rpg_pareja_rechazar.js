import fetch from 'node-fetch'  
import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, text, participants, groupMetadata }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let imgr = flaaa.getRandom()

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
var number = conn.getName(who)

if(!text && !m.quoted) return await conn.sendButton(m.chat, `ππͺππΜπ£?π€  ππ©ππ¦πͺππ©ππ¨ π€ π§ππ¨π₯π€π£ππ πͺπ£ π’ππ£π¨πππ πππ‘ π₯ππ§π¨π€π£π π¦πͺπ π¦πͺπππ§π π¦πͺπ π¨ππ π©πͺ π₯ππ§πππ`, wm, null, [
['ππππ β¨οΈ', '/menu']], fkontak, m)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = conn.getName(m.quoted.sender)
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}  
} catch (e) {
} finally {
	
let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}
let yo = conn.getName(m.sender)
let tu = conn.getName(who)

if(!users) return await conn.sendButton(m.chat, `π΅π ππ ππππππππΜ ππ πππππππ ππππππΜ πππππππ π ππππ ππ ππππ ππ ππππ πππππ`, wm, null, [
['ππππ β¨οΈ', '/menu']], fkontak, m)
	
if(user === m.sender) return await conn.sendButton(m.chat, `πΊπ πππππ  πππππ πππππ ππ πππππ πππ ππ ππππππ`, wm, null, [
['ππππ β¨οΈ', '/menu']], fkontak, m)
	
if(user === conn.user.jid) return await conn.sendButton(m.chat, `ππ ππ πππππ πππ ππ ππππππ ππππππ ππ ππππ ππππππ ππππ ππ π»`, wm, null, [
['ππππ β¨οΈ', '/menu']], fkontak, m)
    
if(global.db.data.users[user].pasangan != m.sender){ 
return await conn.sendButton(m.chat, `π΅π ππππππ ππππππππ π *${tu}* πΊπ πππππππ ππ ππ πππππππππ, ππππππππππ ππππ πππ ππππ ππ ππ ππππππ π ππ`, wm, null, [
['ππππ β¨οΈ', '/menu']], fkontak, m, { contextInfo: { mentionedJid: [user, tu]}})	
	
}else{
global.db.data.users[user].pasangan = ""
return await conn.sendButton(m.chat, `π π³ππππππππππππππ *${yo}* ππ ππ ππππππ π« π¬π ππππππππ ππ πππ πππππππΜπ πππππππ *${tu}*\nπ΅π ππππ ππππππ, π ππ πππππ ππππππ ππππ πππ πππππ π`, `*${tu} π ${yo}*\n` + wm, imgr +'rechazado', [
['ππππ β¨οΈ', '/menu']], m, fkontak, { contextInfo: { mentionedJid: [user, tu, yo]}})	
}}}

handler.command = /^(rechazar|cancelar)$/i
handler.group = true
export default handler
