const mongoose = require('mongoose')

const bizProSchema = new mongoose.Schema({
    imageURL:String,
    name:String,
    desc:String,
    more:String
})

const bizProModel = mongoose.model('bizProModel', bizProSchema)

module.exports = bizProModel