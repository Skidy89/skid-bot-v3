const cooldown = 300000
let handler = async (m, { usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    let sword = global.db.data.users[m.sender].sword
    let sdurability = global.db.data.users[m.sender].sworddurability
    let bow = global.db.data.users[m.sender].bow
    let bdurability = global.db.data.users[m.sender].bowdurability
    let pickaxe = global.db.data.users[m.sender].pickaxe
    let pdurability = global.db.data.users[m.sender].pickaxedurability 
    let armor = global.db.data.users[m.sender].armor
    let adurability = global.db.data.users[m.sender].armordurability
    let timers = (cooldown - (new Date - user.lastbattle))
    if (user.health < 80) return m.reply(`Necesitas al menos 80 de Vida para que te recluten!!
Puedes comprar Vida escribiendo *${usedPrefix}comprar pocion <cantidad>*,
y luego *${usedPrefix}curar <cantidad>* para usar pociones
`.trim())
    if (user.bow == 6) return m.reply(`tu ${bow == 0 ? 'arco que no tienes' : '' || bow == 1 ? 'arco sin flechas' : '' || bow == 2 ? 'arco roto' : '' || bow == 3 ? 'arco' : '' || bow == 4 ? 'arco espectral' : '' || bow == 5 ? 'arco reforzado': ''|| bow == 6 ? 'arco escudo' : ''} es muy debil mejoralo y podras unirte a la guerra`)
    if (user.armor == 8) return m.reply(`tu ${armor == 0 ? 'no tiene' : '' || armor == 1 ? 'armadura desgastada' : '' || armor == 2 ? 'armadura con parches' : '' || armor == 3 ? 'kit de pelea' : '' || armor == 4 ? 'kit de policia' : '' || armor == 5 ? 'armadura militar': ''|| armor == 6 ? 'armadura gorka' : ''|| armor == 7 ? 'kit de caballero' : '' || armor == 8 ? 'armadura clonada' : '' || armor == 9 ? 'armadura divina' : '' || armor == 10 ? 'armadura con endoesqueleto' : '' || armor == 11 ? 'armadura de samurai sagrado' : ''} es muy debil y podrian matarte mejorala primero `)
    if (user.sword == 8) return m.reply(`tu ${sword == 0 ? 'espada de carton' : '' || sword == 1 ? 'espada de madera' : '' || sword == 2 ? 'espada de piedra' : '' || sword == 3 ? 'espada de hierro' : '' || sword == 4 ? 'espada de oro' : '' || sword == 5 ? 'espada de diamante': ''|| sword == 6 ? 'doble katana de oro' : ''|| sword == 7 ? 'katana de esmeralda' : '' || sword == 8 ? 'cuchilla de obsidiana' : '' || sword == 9 ? 'abisal' : '' || sword == 10 ? 'samurai sagrada' : '' || sword == 11 ? 'espada doble afiliada' : ''} no es muy fuerte para ir a la guerra`)
    if (user.armordurability < 30) return m.reply('tu armadura tiene agujeros por la batalla  parchala primero con #reparar armadura!!')
    if (user.bowdurability < 20) return m.reply('tu arco tiene rota la cuerda reparala con #reparar arco ')
    if (user.sworddurability < 20) return m.reply('tu espada ya no tiene filo afilala con #reparar espada')
    if (new Date - user.lastbattle <= cooldown) return m.reply(`Ya has ido a la guerra anteriormente!!, por favor espera *${timers.toTimeString()}*
`.trim())
    const rewards = reward(user)
    let text = '*Has ido a la guerra perdiste*:'
    for (const lost in rewards.lost) if (user[lost]) {
        const total = rewards.lost[lost].getRandom()
        user[lost] -= total * 1
        if (total) text += `\n*${global.rpg.emoticon(lost)}:* ${total}%`
    }
    text += '\n\n*Pero conseguiste*:'
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
handler.command = /^(guerra|aventura3|adv3)$/i

handler.cooldown = cooldown
handler.disabled = false

export default handler

function reward(user = {}) {
    let rewards = {
        reward: {
            exp: 1000,
            money: 70000,
            trash: 101,
            string: 25,
            rock: 30,
            iron: 25,
            diamond: 10,
            emerald: 4,
            wood: 80,
            gems: 12,
            kyubi: 8,
            iron: 12,
            potion: 1,
            kinife: 1,
            gold: 25,
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
            bowdurability: 100,
            sworddurability: 100,
            armordurability: (15 - user.armor) * 7
        }
    }
    return rewards
}




