
import fg from 'api-dylux'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `📌 ${mssg.example} :\n*${usedPrefix + command}* `
          m.react(rwait)
          
          try {
          let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
          let te = ` 
┌─⊷ *TWITTER DL*
▢ *${mssg.desc}:* ${desc}
└───────────`
conn.sendFile(m.chat, HD, 'twitter.mp4', te, m)
m.react(done)
} catch (e) {
    m.reply(`✳️ ${mssg.error}`)
  } 
  
}
handler.help = ['twitter'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = ['twitter', 'tw', 'x']
handler.diamond = true

export default handler
