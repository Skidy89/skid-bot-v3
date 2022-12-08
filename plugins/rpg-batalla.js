const cooldown = 300000
let handler = async (m, { usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    let timers = (cooldown - (new Date - user.lastbattle))
    if (user.health < 80) return m.reply(`Necesitas al menos 80 de Vida para que te recluten!!
Puedes comprar Vida escribiendo *${usedPrefix}comprar pocion <cantidad>*,
y luego *${usedPrefix}curar <cantidad>* para usar pociones
`.trim())
let ke = await fetch(`https://api.worldbank.org/v2/country/${ct.getRandom()}?format=json`)
let kt = await ke.json()
    if (user.bow == 0) return m.reply('No tienes un arco craftea un arco improvisado o compra uno!!')
    if (user.armor == 0) return m.reply('No tienes una armadura craftea una armadura con #craft o compra uno')
    if (user.sword == 0) return m.reply('No tienes una espada craftea uno o no prodas ser reclutado')
    if (user.armordurability < 30) return m.reply('tu armadura tiene agujeros por la batalla  parchala primero con #reparar armadura!!')
    if (user.bowdurability < 20) return m.reply('tu arco tiene rota la cuerda reparala con #reparar arco ')
    if (user.sworddurability < 20) return m.reply('tu espada ya no tiene filo afilala con #reparar espada')
    if (new Date - user.lastbattle <= cooldown) return m.reply(`Ya has ido a la guerra!!, por favor espera *${timers.toTimeString()}*
`.trim())
    const rewards = reward(user)
    let text = `*Has sido reclutado por ${pickRandom(['kratos', 'un rebelde', 'un asesino a sueldo', '', 'la senda dorada'])} y te llevaron a ${kt[1][0].capitalCity} y perdiste*:`
    for (const lost in rewards.lost) if (user[lost]) {
        const total = rewards.lost[lost].getRandom()
        user[lost] -= total * 1
        if (total) text += `\n*${global.rpg.emoticon(lost)}:* ${total}%`
    }
    text += `\n\n*has ${pickRandom(['perdido', 'ganado', 'escapado'])}Pero igual conseguiste*:`
    for (const rewardItem in rewards.reward) if (rewardItem in user) {
        const total = rewards.reward[rewardItem].getRandom()
        user[rewardItem] += total * 1
        if (total) text += `\n*${global.rpg.emoticon(rewardItem)}:* ${total}`
    }
    m.reply(text.trim())
    user.lastbattle= new Date * 1
}
handler.help = ['battle']
handler.tags = ['rpg']
handler.command = /^(reclutado|aventura2|adv2)$/i

handler.cooldown = cooldown
handler.disabled = false

export default handler

function reward(user = {}) {
    let rewards = {
        reward: {
            exp: 1000,
            trash: 101,
            string: 25,
            rock: 30,
            iron: 25,
            diamond: 10,
            emerald: 4,
            common: 2 * (user.dog && (user.dog > 2 ? 2 : user.dog) * 1.2 || 1),
            uncommon: [0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.dog > 2 && user.dog < 6 && user.dog) || (user.dog > 5 && 5) || 2
                )).fill(0)
            ),
            mythic: [0, 0, 0, 0, 0, 1, 0, 0, 0].concat(
                new Array(8 - (
                    (user.dog > 5 && user.dog < 8 && user.dog) || (user.dog > 7 && 8) || 3
                )).fill(0)
            ),
            legendary: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0].concat(
                new Array(10 - (
                    (user.dog > 8 && user.dog) || 4
                )).fill(0)
            ),
            iron: [0, 0, 0, 1, 0, 0],
            gold: [0, 0, 0, 0, 0, 1, 0],
            diamond: [0, 0, 0, 0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.fox < 6 && user.fox) || (user.fox > 5 && 5) || 0
                )).fill(0)
            ),
        },
        lost: {
            health: 101 - user.cat * 4,
            bowdurability: 10,
            sworddurability: 10,
            armordurability: (15 - user.armor) * 7
        }
    }
    return rewards
}



