var fs = require('fs');
console.log('1')
var data = fs.readFileSync('readme.txt','utf-8')

    console.log(data)

    fs.writeFileSync('write.txt',data)
    console.log('2') 