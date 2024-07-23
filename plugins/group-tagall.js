let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*🛍️https://chat.whatsapp.com/LxUojYCbNsr51Okm42spfT* ${pesan}`
let teks = `*⬇️Si deseas info de bot entra ami grupo*
 ${oi}\n\n⭐ *@b.00jjks:*\n`
for (let mem of participants) {
teks += `⭐ @${mem.id.split('@')[0]}\n`}
teks += `➤ 𝐁𝐨𝐭 𝐄𝐥𝐦𝐨`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler