require('dotenv').config();

const { ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');


const DB_URI = process.env.DB_URI;

mongoose.set('strictQuery',false)

module.exports = ()=>{
    return mongoose.connect(DB_URI,{
        useNewUrlParser:true,serverApi:ServerApiVersion.v1
    })
}

