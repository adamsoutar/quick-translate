const fs = require('fs')
const path = require('path')
const jsonc = require('jsonc')
const translate = require('@vitalets/google-translate-api')

const inPath = process.argv[2]
const outPath = process.argv[3]

const inputLang = path.basename(inPath).split('.')[0]
const outputLang = path.basename(outPath).split('.')[0]

const input = jsonc.parse(fs.readFileSync(inPath, 'utf8'))

let total = 0
let done = 0

const worlds = ['🌎', '🌍', '🌏']
let worldId = 0
function printProgress () {
  const world = worlds[worldId++ % worlds.length]
  const percentage = Math.round(done / total * 100)
  process.stdout.write(` [${world}] ${done}/${total} (${percentage}%)\r`)
}

async function translateObject (obj) {
  const out = {}
  total += Object.keys(obj).length
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      out[key] = (
        await translate(obj[key], { from: inputLang, to: outputLang })
      ).text
    } else {
      out[key] = await translateObject(obj[key])
    }
    done++
    printProgress()
  }
  return out
}
translateObject(input).then(out => {
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2))

  console.log(`[👌] ${total} strings translated from ${inputLang} to ${outputLang}!`)
})
