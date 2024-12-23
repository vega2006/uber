const partnerModel = require("../models/partner.model");
const {validationResult} = require("express-validator");
const partnerService = require("../services/partner.service");
const blacklistedTokenModel = require("../models/blacklistedToken.model");
module.exports.registerPartner = async (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(401).json({errors: errors.array()})
    }
    const {fullName,email,password,vehicle} = req.body;
    const hashedPassword = await partnerModel.hashPassword(password);
    const partner = await partnerService.createPartner({
        firstName:fullName.firstName,
        lastName:fullName.lastName,
        email,
        password: hashedPassword,
        color:vehicle.color,
        plate:vehicle.plate,
        type:vehicle.type,
        capacity:vehicle.capacity,
        
    });
    const token = partner.generateAuthToken();
    res.status(201).json({token,partner});
}

module.exports.loginPartner = async (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(401).json({errors: errors.array()})
    }
    const {email,password} = req.body;
    const partner = await partnerModel.findOne({email}).select('+password');
    if(!partner){
        return res.status(401).json({message: "invalid email or password"});
    }
    const isValid = await partner.comparePassword(password);
    if(!isValid){
        return res.status(401).json({message: "invalid email or password"});
    }
    const token = partner.generateAuthToken();
    res.cookie("token",token);
    res.status(200).json({token,partner});
}

module.exports.getProfile = async (req,res,next)=>{
    const partner = req.partner;
    res.status(200).json(partner);
}

module.exports.logoutPartner=async (req,res,next)=>{
    res.clearCookie("token");

    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    await blacklistedTokenModel.create({token});

    res.status(200).json({message: "Logged out successfully"});
}