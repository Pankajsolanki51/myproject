const mongoos = require('mongoose');
async function connectToDb(url){
    return mongoos.connect(url);
}

module.exports = {
    connectToDb,
}