let handler = async (m, { conn, isPrems}) => { //lastmiming
const fkontak = {
        "key": {
        "participants":"0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"    
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    }

let user = global.db.data.users[m.sender]
let premium = user.premium  
let minar = `${pickRandom(['has buscado y has encontrado','la suerte te acompaña y encuentras',
'encontraste un lugar misterioso y robas','te recluta un caza recompesas y te da','no buscas nada y te cae del cielo'])}`

let pp = './Menu2.jpg'

let aqua = `${pickRandom([0, 2, 3, 1, 5])}` * 1
let aquapremium = `${pickRandom([2, 4, 6, 7, 5, 9])}` * 1

let rock = `${pickRandom([6, 9, 0, 12, 2])}` * 1
let rockpremium = `${pickRandom([13, 9, 17, 20, 25])}` * 1

let pancingan = `${pickRandom([1, 0, 2, 1, 0, 0, 0])}` * 1
let pancinganpremium = `${pickRandom([1, 3, 4, 9, 2, 5, 8])}` * 1

let potion = `${pickRandom([2, 0, 1, 9, 7])}` *1
let potionpremium = `${pickRandom([1, 9, 7, 2, 5])}` * 1
const recompensas = {	
  aqua: premium ? aquapremium : aqua,
  rock: premium ? rockpremium : rock,
  pancingan: premium ? pancinganpremium : pancingan,
  potion: premium ? potionpremium  : potion,
}
//let xp = Math.floor(Math.random() * 2000)
let money = `${pickRandom([100000, 20000, 25000, 30000000, 300000070, 400000, 400050, 4000080, 50000, 510000, 60040, 680, 704, 760, 800, 840, 880, 900, 1000, 1059, 1080, 1100, 1190, 1230, 1380, 1399, 1290, 1300, 1340, 1350, 1590, 1400, 1450, 1700, 1800, 1900, 2000, 0, 0, 10, 1, 99, 999, 1789, 1430])}` * 1
let moneypremium = `${pickRandom([500, 600, 700, 800, 900, 1000, 1050, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1950, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3400, 3500, 3600, 3700, 3800, 3850, 3900, 3950, 4000])}` * 1

let time = user.lastcoins + 600000 //10 min
user.money += premium ? moneypremium : money  
let texto = ''
for (let reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue
    user[reward] += recompensas[reward]
texto += `+${recompensas[reward]} ${global.rpgshop.emoticon(reward)}\n`}

conn.sendHydrated(m.chat, `*${premium ? '🎟️ Recompensa Premium' : '🆓 Recompensa Gratis'}*\n*${minar}*\n*${money} ${global.rpgshop.emoticon('money')}*`,`🍁 𝗕 𝗢 𝗡 𝗢\n` + texto + `\n\n🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}`, pp, md, '𝙈𝙮𝙨𝙩𝙞𝙘𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙈𝙞𝙣𝙖𝙧 𝘿𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨 💎', `.minar3`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', `.menu`]
], m,)
user.lastcoins = new Date * 1  
}
handler.help = ['rpg']
handler.tags = ['skid']
handler.command = ['buscar', 'search'] 
handler.fail = null
handler.rowner = true
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}  

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
