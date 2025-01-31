const fs = require('fs')

// V1
// const readStream = fs.createReadStream('./docs/blog.txt')

// readStream.on('data', (buffer) => {
//     console.log('nes buffer')
//     console.log(buffer.toString());
// })

// V2
const readStream = fs.createReadStream('./docs/blog.txt',{encoding:'utf8'})
const writeStream = fs.createWriteStream('./docs/blog12.txt')

// readStream.on('data', (buffer) => {
//     console.log('nes buffer')
//     console.log(buffer);


//     writeStream.write('\nNew Buffer\n')
// writeStream.write(buffer)
// })


readStream.pipe(writeStream);


