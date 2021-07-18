const Algorithm = require('./encryption')

const alg = new Algorithm()
const encoded = alg.encode('qqqqqkkkkkkhkkkkklllqqqqqcftrya')
console.log(encoded)
const decoded = alg.decode(encoded)
console.log(decoded)