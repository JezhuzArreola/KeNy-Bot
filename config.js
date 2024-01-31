import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['18723484855', 'Jezhuz Arreola', true],
  ['529621630601']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['', '']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: '',
  fgmods: ''
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'DRLg5kY7' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'KeNy┃ᴮᴼᵀ' 
global.author = 'Jezhuz Arreola' 

//--info FG
global.botName = 'KeNy┃ᴮᴼᵀ'
global.fgig = '' 
global.fgsc = 'https://github.com/DarkSideMoon13' 
global.fgyt = ''
global.fgpyp = ''
global.fglog = '' 

//--- Grupos WA
global.fgcanal = ''
global.bgp = ''
global.bgp2 = ''
global.bgp3 = '' //--GP NSFW

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
