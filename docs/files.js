// File System == fs

const fs = require("fs");

// Reading Files

// fs.readFile('./docs/blog.txt', (err, data) => {
//     if(err)
//         console.log(err)
// console.log(data.toString())

// })

// writing Files

// fs.writeFile('./docs/blog.txt', 'Hello, Mina', ()=> {
//     console.log('file was written')
// })

// avec appended on peut ajouter un text suivi du text de file

// fs.appendFile('./docs/blog.txt', '\nhello Ben', () =>{
//  console.log('file was appended');
// })

// Direcories
// fs.mkdir('./DocTest', (err)=> {
// if(err)
// console.log(err)
//     console.log('Folder Created')
// })

// fs.rmdir('./DocTest', (err)=> {
//     if(err)
//     console.log(err)
//     console.log('Folder Removed')
// })

// Deleting Files
// fs.unlink('./JJ.txt', (err)=> {
//     if(err)
//     console.log(err)
// console.log('file removed')
// })

//  NINI PROJECT

// fs.mkdir('./Beny' , (err)=>{
//      if(err)
//      console.log(err)
//     console.log('folder created')
// })

// fs.writeFile('./Beny/blog1.txt', 'Hello, Mina', ()=> {
//         console.log('file was written')
//     })

// fs.unlink('./Beny/blog1.txt', (err)=> {
//         if(err)
//         console.log(err)
//     console.log('file removed')
//     })
// fs.rmdir("./Beny", (err) => {
//   if (err) console.log(err);
//   console.log("Folder Removed");
// });
