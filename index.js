var fs = require('fs')
var path = require('path')
var zlib = require('zlib')

var path2pics = path.join(__dirname, 'img')

function loadGzipBufferSync(file) {
  return zlib.gzipSync(fs.readFileSync(file))
}

var PICS = new Map(
  fs.readdirSync(path.join(path2pics)).map(function(pic){
   return [ pic, loadGzipBufferSync(path.join(path2pics, pic)) ]
  })
)

module.exports = PICS
