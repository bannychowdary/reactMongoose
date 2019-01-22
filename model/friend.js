var mongoose = require('mongoose')
var mongoSchema = mongoose.Schema
var friendSchema = new mongoSchema({
    "title":String,
    "description":String,
    "image":String,
    "link":String
})

module.exports= mongoose.model('allfriends',friendSchema)
