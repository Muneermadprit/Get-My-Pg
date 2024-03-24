const mongoose = require('mongoose')
const { type } = require('os')

module.exports = mongoose.model('user',{
    id      : {type:Number},
    fullname : {type: String},
    email : {type: String},
    phone : {type: String},
    image  : {type:String}


},'userdata')