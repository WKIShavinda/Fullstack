const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pScema = new Schema({

    username: {
        type : String,
        required:true
    },
    email: {
        type : String,
        required:true
    },
    phone: {
        type : String,
        required:true
    },
    message: {
        type : String,
        required:true
    }
})
module.exports = mongoose.model("contactus",pScema)