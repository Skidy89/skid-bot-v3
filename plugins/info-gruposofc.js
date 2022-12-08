let media = imagen4
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
ɢʀᴜᴘᴏ ᴏғɪᴄɪᴀʟ

${grupos}

ᴄᴀɴᴀʟ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ
https://youtube.com/@skid921

ᴅᴜᴇɴ̃ᴏ

wa.me/+528442114446

`.trim(), wm, media, [['💟 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 💟', '#menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
