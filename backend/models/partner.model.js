const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');

const partnerSchema=new mongoose.Schema({
    fullName:{
        firstName:{
            type:String,
            required:true,
            minlength:[3,"firstName  must be 3 characters long minimum"],
        },
        lastName:{
            type:String,
            required:true,
            minlength:[3,"lastName must be 3 characters long minimum"],
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,"email must be 5 characters long minimum"],
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketId:{
        type:String,
    },
    status:{
        type:String,
        default:"inactive",
        enum:["active","inactive"],
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,"color must be 3 characters long minimum"],
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,"plate must be 3 characters long minimum"],
        },
        capacity:{
            type:Number,
            required:true,
            minlength:[1,"capacity must be 1 characters long minimum"],
        },
        type:{
            type:String,
            required:true,
            enum:["car","auto","bike"],
            minlength:[3,"type must be 3 characters long minimum"],
        }

    },
    location:{
        latitude:{
            type:Number,
        },
        longitude:{
            type:Number,
        }
    }
    
});
partnerSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'});
    return token;
};
partnerSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
};
partnerSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10);
};

module.exports=mongoose.model('partner',partnerSchema);