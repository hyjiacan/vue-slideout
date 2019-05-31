/**
 * Auto update version
 */
const fs = require('fs')
let pkg = require('./package.json')

const LOCK = false

if (LOCK) {
  console.info('version locked: ' + pkg.version)
  process.exit()
}

let temp = pkg.version.split('.')
let last = temp.pop()
last = parseInt(last) + 1
temp.push(last)

pkg.version = temp.join('.')

fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2), {
  encoding: 'utf-8'
})

console.log('version: ' + pkg.version)
