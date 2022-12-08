let handler = async (m, { conn, command, args, usedPrefix }) => { 
    try { 
        let user = global.db.data.users[m.sender]
        let wood = user.wood * 1
        let rock = user.rock * 1
        let string = user.string * 1
        let money = user.money * 1
        let iron = user.iron * 1
        let fishingrod = user.fishingrod * 1
        let pickaxe = user.pickaxe * 1
        let sword = user.sword * 1
        let kyubi = user.kyubi * 1
        let type = (args[0] || '').toLowerCase()
        let prefix = usedPrefix
        
        const buttons1 = [
            {buttonId: `${prefix}mejorar caña`, buttonText: {displayText: `Mejorar Pesca ${rpg.emoticon('fishingrod')}`}, type: 1},
            {buttonId: `${prefix}mejorar pico`, buttonText: {displayText: `Mejorar Pico ${rpg.emoticon('pickaxe')}`}, type: 1},
            {buttonId: `${prefix}mejorar espada`, buttonText: {displayText: `Mejorar Espada ${rpg.emoticon('sword')}`}, type: 1},
        ]
        let lmao1 = `Formato correcto *${usedPrefix}${command} [item]*
Ejemplo *${usedPrefix}${command} espada*

*ðŸ“ŒLista de objetos a mejorar*
${rpg.emoticon('fishingrod')}
${rpg.emoticon('pickaxe')}
${rpg.emoticon('sword')}
${rpg.emoticon('bow')}
${rpg.emoticon('armor')}
`.trim()
        const buttonMessage1 = {
            text: lmao1,
            footer: wm,
            buttons: buttons1,
            headerType: 1
        
        }
        switch (type) {
            case 'caña':
                if (fishingrod == 0) {
                    const buttons = [
                        {buttonId: usedPrefix + `upgrade fishingrod`, buttonText: {displayText: `Craft ${rpg.emoticon('fishingrod')}FishingRod`}, type: 1},
                    ]
                    let lmao = `no tienes una caña usa *${usedPrefix}craft caña* para obtener una`
                    const buttonMessage = {
                        text: lmao,
                        footer: wm,
                        buttons: buttons,
                        headerType: 1
                    }
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                if (fishingrod > 11) return conn.sendButton(m.chat, `*${rpg.emoticon('fishingrod')}FishingRod* la caña esta maxeada`, wm, 'inventario', usedPrefix + 'inv', m)
                let _wood = fishingrod * 25
                let _string = fishingrod * 15
                let _money = fishingrod * 10000
                if (wood < _wood || string < _string || money < _money) return conn.sendButton(m.chat, `Material kamu kurang!!${wood < _wood ? `\n${rpg.emoticon('wood')}wood Kamu Kurang *${_wood - wood}*` : ''}${string < _string ? `\n${rpg.emoticon('string')}String Kamu Kurang *${_string - string}*` : ''}${user.money < _money ? `\n${rpg.emoticon('money')}Uang Kamu Kurang *${_money - money}*` : ''}`, wm, 'inventario', usedPrefix + 'inv', m)
                user.fishingrod += 1
                user.wood -= _wood * 1
                user.string -= _string * 1
                user.money -= _money * 1
                user.fishingroddurability = 0 
                user.fishingroddurability += fishingrod * 50
                conn.sendButton(m.chat, `haz mejorado tu caña con exito*`, wm, 'menu', usedPrefix + 'menu', 'inventario', usedPrefix + 'inv', m)
                break
            case 'pico':
                if (pickaxe == 0) {
                    const buttons = [
                        {buttonId: usedPrefix + `craft pico`, buttonText: {displayText: `Craftea un pico `}, type: 1},
                    ]
                    let lmao = `primero ve y hazte uno  *${rpg.emoticon('pickaxe')}Pickaxe*
craftea uno con *${usedPrefix}craft pico*`
                    const buttonMessage = {
                        text: lmao,
                        footer: wm,
                        buttons: buttons,
                        headerType: 1
                    }
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                if (pickaxe > 11) return conn.sendButton(m.chat, `  level max!!`, wm, 'inventario', usedPrefix + 'inv', m)
                let __rock = pickaxe * 25
                let __wood = pickaxe * 15
                let __money = pickaxe * 15000
                if (rock < __rock || wood < __wood || money < __money) return conn.sendButton(m.chat, `
no tienes lo suficiente para mejorar te falta 
${rock < __rock ? `\n de piedra*${__rock - rock} *` : ''}${wood < __wood ? `\n madera *${__wood - wood}*` : ''}${money < __money ? `\ngemas*${__money - money}*` : ''}`, wm, 'ver inventario', usedPrefix + 'inv', m)
                user.pickaxe += 1
                user.wood -= __wood * 1
                user.rock -= __rock * 1
                user.money -= __money * 1
                user.pickaxedurability = 0
                user.pickaxedurability += pickaxe * 50
                conn.sendButton(m.chat, `haz mejorado tu pico con exito*`, wm, 'inventario', usedPrefix + 'inv', m)
                break
            case 'espada':
                if (sword == 0) {
                    const buttons = [
                        {buttonId: usedPrefix + `craft espada`, buttonText: {displayText: `Craftea una espada`}, type: 1},
                    ]
                    let lmao = `ve y create una primero ${usedPrefix}craft espada*`
                    const buttonMessage = {
                        text: lmao,
                        footer: wm,
                        buttons: buttons,
                        headerType: 1
                    }
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                if (sword > 11) return conn.sendButton(m.chat, ` level max!!`, wm, 'inventario', usedPrefix + 'inv', m)
                let _iron = sword * 25
                let ___wood = sword * 15
                let ___money = sword * 10000
                if (iron < _iron || wood < ___wood || money < ___money) return conn.sendButton(m.chat, `
te falta material
${iron < _iron ? `\nte falta *${_iron - iron}*` : ''}${wood < ___wood ? `\nte falta madera *${___wood - wood}*` : ''}${money < ___money ? `\nte faltan gemas *${___money - money} *` : ''}`, wm, 'inventario', usedPrefix + 'inv', m)
                user.sword += 1
                user.iron -= _iron * 1
                user.wood -= ___wood * 1
                user.money -= ___money * 1
                user.sworddurability = 0 
                user.sworddurability += sword * 50 
                conn.sendButton(m.chat, `haz mejorado tu espada con exito `, wm, 'inventario', usedPrefix + 'inv', m)
                break
            case 'arco':
                if (bow == 0) {
                    const buttons = [
                        {buttonId: usedPrefix + `craft arco`, buttonText: {displayText: `Craft ${rpg.emoticon('bow')}`}, type: 1},
                    ]
                    let lmao = `no tienes un arco usa *${usedPrefix}craft arco* para obtener una`
                    const buttonMessage = {
                        text: lmao,
                        footer: wm,
                        buttons: buttons,
                        headerType: 1
                    }
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                if (bow > 11) return conn.sendButton(m.chat, `*${rpg.emoticon('fishingrod')}FishingRod* la caña esta maxeada`, wm, 'inventario', usedPrefix + 'inv', m)
                let ____wood = bow * 25
                let ____string = bow * 15
                let ____money = bow * 10000
                if (wood < ____wood || string < ____string || money < ____money) return conn.sendButton(m.chat, `Material kamu kurang!!${wood < _wood ? `\n${rpg.emoticon('wood')}wood Kamu Kurang *${_wood - wood}*` : ''}${string < _string ? `\n${rpg.emoticon('string')}String Kamu Kurang *${_string - string}*` : ''}${user.money < _money ? `\n${rpg.emoticon('money')}Uang Kamu Kurang *${_money - money}*` : ''}`, wm, 'inventario', usedPrefix + 'inv', m)
                user.bow += 1
                user.wood -= ____wood * 1
                user.string -= ____string * 1
                user.money -= ____money * 1
                user.bowdurability = 0 
                user.bowdurability += bow * 50
                conn.sendButton(m.chat, `haz mejorado tu caña con exito*`, wm, 'menu', usedPrefix + 'menu', 'inventario', usedPrefix + 'inv', m)
                break
            case 'armadura':
                if (armor == 0) {
                    const buttons = [
                        {buttonId: usedPrefix + `craft armadura`, buttonText: {displayText: `Craft ${rpg.emoticon('armor')}`}, type: 1},
                    ]
                    let lmao = `no tienes una armadura usa *${usedPrefix}craft arco* para obtener una`
                    const buttonMessage = {
                        text: lmao,
                        footer: wm,
                        buttons: buttons,
                        headerType: 1
                    }
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                if (armor > 11) return conn.sendButton(m.chat, `*${rpg.emoticon('fishingrod')}FishingRod* la caña esta maxeada`, wm, 'inventario', usedPrefix + 'inv', m)
                let _____wood = armor * 25
                let _____string = armor * 15
                let _____money = armor * 10000
                let _____kyubi = armor * 1
                if (wood < ____wood || kyubi < ____kyubi || money < ____money) return conn.sendButton(m.chat, `falta ${wood < _wood ? `\n${rpg.emoticon('wood')} *${_wood - wood}*` : ''}${kyubi < ____kyubi? `\n${rpg.emoticon('kyubi')}*${_____kyubi - kyubi}*` : ''}${user.money < _money ? `\n${rpg.emoticon('money')}*${_____money - money}*` : ''}`, wm, 'inventario', usedPrefix + 'inv', m)
                user.armor += 1
                user.wood -= _____wood * 1
                user.kyubi -= _____kyubi * 1
                user.money -= _____money * 1
                user.armordurability = 0 
                user.armordurability += armor * 50
                conn.sendButton(m.chat, `haz mejorado tu armadura con exito*`, wm, 'menu', usedPrefix + 'menu', 'inventario', usedPrefix + 'inv', m)
                break
            default :
                return conn.sendMessage(m.chat, buttonMessage1, { quoted: m })
        }
    } catch (e) {
        console.log(e)
        throw eror
    }
}
handler.help = ['upgrade']
handler.tags = ['rpg']
handler.command = /^(up(grade)?|mejorar)$/i

handler.fail = null

export default handler
