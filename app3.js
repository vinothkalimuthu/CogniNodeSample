var fs = require('fs');

fs.mkdirSync('temp');

if(fs.existsSync('temp')){
  process.chdir('temp');
   fs.writeFileSync('test.txt', 'Hello World')

}

// var fs = require('fs');
// fs.mkdir('temp', function(err){
//     fs.exists('temp', function(exists){
//         if(exists){
//             process.chdir('temp');
//             fs.writeFile('test.txt', 'Hello World', function(err){
//                 console.log('done');
//             })
//         }
//     })

// })