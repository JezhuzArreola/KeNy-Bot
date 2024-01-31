
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ ${mssg.donate}


`
let img = ''
conn.sendFile(m.chat, img, 'img.jpg', don, m, null, rpyp)
//conn.sendPayment(m.chat, '2000', 'USD', don, m.sender, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler

