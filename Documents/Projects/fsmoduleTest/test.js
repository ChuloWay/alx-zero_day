const fs = require('fs')
fs.open('demo.txt', 'w+', function (err, f) {
    fs.write(f, 'Testing demo text', function (err) {
           console.log('alright,i am writing to my text file');
           if(err)
           throw err
    })
    if (err) {
        return console.error(err);
    }

    console.log("File opened!!");
});