const mongoose = require("mongoose");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const userSchema = new mongoose.Schema({
  fullName: {
    firstName: {
      type: String,
      required: true,
      minlength: [3, " firstName  must be 3 characters long minimum "],
    },
    lastName: {
      type: String,
      minlength: [3, "lastName  must be 3 characters long minimum "],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "email must be 5 characters long minimum"],
  },
  password: {
    type: String,
    required: true,
    select:false, 
  },
  socketId: {
    type: String,
  },
});

userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this.id},process.env.JWT_SECRET);
    return token;
}
userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
}
userSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10);
}
const userModel=mongoose.model('user', userSchema);

module.exports = userModel;