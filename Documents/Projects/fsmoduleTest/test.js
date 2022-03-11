const fs = require('fs')
//console.log(fs);
//fs.open('test.txt','w+', function(err, f) {
// console.log('This is a demo text');
//})


fs.open('demo.txt', 'w+', function (err, f) {
    fs.write(f , 'demo text', function (err) {
           console.log('alright,i am writing to my text file');
           if(err)
           throw err
    })
    if (err) {
        return console.error(err);
    }

    console.log("File opened!!");
});