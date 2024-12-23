const partnerModel = require("../models/partner.model");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

module.exports.authUser=async (req,res,next)=>{
    const token=req.cookies.token || req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.status(401).json({message: "Unauthorized"});
    }
    const isBlacklisted= await userModel.findOne({token:token});
    if(isBlacklisted){
        res.staus(401).json({message: "Unauthorized"});
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const user=await userModel.findById(decoded._id);
        
        req.user=user;
        return next();
    }catch(err){
        return res.status(401).json({message: err.message});
    }

}

module.exports.authPartner=async (req,res,next)=>{
    const token=req.cookies.token || req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.status(401).json({message: "Unauthorized"});
    }
    const isBlacklisted= await partnerModel.findOne({token:token});
    if(isBlacklisted){
        res.staus(401).json({message: "Unauthorized"});
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const partner=await partnerModel.findById(decoded._id);
        
        req.partner=partner;
        return next();
    }catch(err){
        return res.status(401).json({message: err.message});
    }

}

