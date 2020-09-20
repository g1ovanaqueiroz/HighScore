var mongodb = require('mongodb');

var connection = function(){
    var db = new mongodb.Db(
        'highScore', new mongodb.Server('localhost', 27017, {}),
        {}
    );

    return db;
}

module.exports = function(){
    return connection;
}