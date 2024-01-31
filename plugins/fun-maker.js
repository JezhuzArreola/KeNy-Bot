
let handler = async (m, { conn, usedPrefix, command }) => {
    
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let who2 = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false 
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://imgur.com/lQGIM44.jpg')
    let me = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://imgur.com/lQGIM44.jpg')

    m.react(rwait)
    switch (command) {
      
      case 'trash':
      case 'basura':
      let img = global.API('KeNy-Bot', '/api/maker/trash', { url: pp }, 'apikey')
      conn.sendFile(m.chat, img, 'img.png', `✅ ${mssg.result}`, m)
      m.react(done)
      break 
      case 'rip':
      let ri = global.API('KeNy-Bot', '/api/maker/rip', { url: pp }, 'apikey')
      conn.sendFile(m.chat, ri, 'img.png', `✅ ${mssg.result}`, m)
      m.react(done)
      break
      case 'shit':
      let sh = global.API('KeNy-Bot', '/api/maker/shit', { url: pp }, 'apikey')
      conn.sendFile(m.chat, sh, 'img.png', `✅ ${mssg.result}`, m)
      m.react(done)
      break 
      case 'spank':
      case 'azotar':
      if (!who2) return m.reply(`✳️ ${mssg.noMention}\n\n📌 ${mssg.example} : ${usedPrefix + command} @tag`)
      let az = global.API('KeNy-Bot', '/api/maker/spank', { url: me, url2: pp }, 'apikey')
      conn.sendFile(m.chat, az, 'img.png', `✅ ${mssg.result}`, m)
      m.react(done)
      break  
      case 'imgdel':
      let del = global.API('KeNy-Bot', '/api/maker/delete', { url: pp }, 'apikey')
      conn.sendFile(m.chat, del, 'img.png', `✅ ${mssg.result}`, m)
      m.react(done)
      break 
      case 'beautiful':
      let bea = global.API('KeNy-Bot', '/api/maker/beautiful', { url: pp }, 'apikey')
      conn.sendFile(m.chat, bea, 'img.png', `✅ ${mssg.result}`, m)
      m.react(done)
      break 

    }
  }
  handler.help = ['trash', 'rip', 'shit', 'spank', 'imgdel', 'beautiful']
  handler.tags = ['fun']
  handler.command = /^(trash|basura|rip|shit|spank|azotar|imgdel|beautiful)$/i
  
  export default handler
  
