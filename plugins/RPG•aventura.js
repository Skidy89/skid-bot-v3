const cooldown = 400000
let handler = async (m, { usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    
    let time = user.lastadventure + cooldown
    if (new Date - user.lastadventure > cooldown) {
    
    if (user.health < 80) return m.reply(`
Necesitas al menos 80 ❤️ de salud para ir a robar!!
Por favor compra pociones primero usando *${usedPrefix}comprar pocion <cantidad>*,
y escribe *${usedPrefix}curar <cantidad>* para usar pociones
`.trim())
    if (user.pickaxe == 0) return m.reply('No tienes un pico, escribe .craft pico para fabricarlo y escapar')
    if (user.armor == 3) return m.reply('nesecitas un kit de pelea como armadura usa .comprar armadura o .upgrade armadura')
    if (user.sword == 6) return m.reply('nesecitas algo con que pelear con la policía mejora tu espada comprandola o mejorandola')
    if (user.weapon == 0) return m.reply('una pistola no viene mal en un atraco compra una estupido')
    if (user.armordurability < 0) return m.reply('tu armadura tiene agujeros por la batalla  parchala primero con #reparar armadura!!')
    if (user.bowdurability < 0) return m.reply('tu arco tiene rota la cuerda reparala con #reparar arco ')
    if (user.sworddurability < 0) return m.reply('tu espada ya no tiene filo afilala con #reparar espada')
    if (user.weapondurability < 0) return m.reply('tu pistola no tiene balas crea unas con #reparar arma')
    
    const rewards = reward(user)
    let text = 'peleaste con la policía y pierdes:'
    for (const lost in rewards.lost) if (user[lost]) {
        const total = rewards.lost[lost].getRandom()
        user[lost] -= total * 1
        if (total) text += `\n*${global.rpg.emoticon(lost)}${lost}:* ${total}`
    }
    text += '\n\nPero has conseguido:'
    for (const rewardItem in rewards.reward) if (rewardItem in user) {
        const total = rewards.reward[rewardItem].getRandom()
        user[rewardItem] += total * 1
        if (total) text += `\n*${global.rpg.emoticon(rewardItem)}${rewardItem}:* ${total}`
    }
    m.reply(text.trim())
    user.lastadventure = new Date * 1
    } else m.reply(`Espera los policias estan buscandote espera  ${time.toTimeString}`)
}
handler.help = ['adventure']
handler.tags = ['rpg']
handler.command = /^(robo2|atraco|(ber)?petualang(ang)?|mulung)$/i

handler.cooldown = cooldown
handler.disabled = false

export default handler

function reward(user = {}) {
    let rewards = {
        reward: {
            money: 20001,
            exp: 3001,
            trash: 10001,
            potion: 2,
            rock: 2,
            wood: 80,
            string: 10,
            batu: 10,
            emerald 100,
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
            iron: [30, 36, 38, 28, 19, 9],
            gold: [0, 0, 0, 0, 0, 1, 0],
            diamond: [0, 0, 0, 0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.fox < 6 && user.fox) || (user.fox > 5 && 5) || 0
                )).fill(0)
            ),
        },
        lost: {
            health: 101 - user.cat * 4,
            armordurability: (15 - user.armor) * 7,
            sworddurability: 20,
            pickaxedurability: 40,
            bowdurability: 50,
            weapondurability: 100
        }
    }
    return rewards
}