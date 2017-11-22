var mongoose    = require('mongoose');

var env       = process.env.NODE_ENV || 'development';
var config    = require("@config")[env];

mongoose.connect(config.host+config.database);
var db = mongoose.connection;

db.on('error', function (err) {
    console.log('connection error:', err.message);
});
db.once('openUri', function callback () {
    console.log("Connected to DB!");
});

const Message = require('./message')

module.exports = {
    Message,
}