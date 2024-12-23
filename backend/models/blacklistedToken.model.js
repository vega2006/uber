const mongoose = require('mongoose');   
const blacklistedTokenSchema = new mongoose.Schema({
    token:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:86400
    }
});
const blacklistedTokenModel=mongoose.model('blacklistedToken',blacklistedTokenSchema);
module.exports=blacklistedTokenModel;