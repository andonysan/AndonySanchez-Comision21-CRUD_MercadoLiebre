const {writeFileSync, readFileSync} = require('fs')
const path = require('path');

module.exports = {
    readJson: (file) =>{
        return JSON.parse(readFileSync(path.join(__dirname, `${file}.json`), 'utf-8'))
    },
    writeJson: (array,file) =>{
        writeFileSync(path.join(__dirname, `${file}.json`),JSON.stringify(array,null, 3), 'utf-8')
        return null;
    }
}