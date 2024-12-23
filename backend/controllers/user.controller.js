const blacklistedTokenModel = require("../models/blacklistedToken.model");
const userModel=require("../models/user.model");
const userService=require("../services/user.service");
const {validationResult}=require("express-validator");


module.exports.registerUser=async (req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const {fullName,email,password}=req.body;
    const hashedPassword=await userModel.hashPassword(password);
    const user=await userService.createUser({
        firstName:fullName.firstName,
        lastName:fullName.lastName,
        email,
        password:hashedPassword
    })
    const token=user.generateAuthToken();
    res.status(201).json({token,user});
}


module.exports.loginUser=async (req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const {email,password}=req.body;
    const user=await userModel.findOne({email}).select('+password');
    if(!user){
        return res.status(401).json({message: "invalid email or password"});
    }
    const isValid=await user.comparePassword(password);
    if(!isValid){
        return res.status(401).json({message: "invalid email or password"});
    }
    const token=user.generateAuthToken();
    res.cookie("token",token);
    res.status(200).json({token,user});
}

module.exports.getProfile=async (req,res,next)=>{
    const user=req.user;
    res.status(200).json(user);
}

module.exports.logoutUser=async (req,res,next)=>{
    res.clearCookie("token");
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    await blacklistedTokenModel.create({token});

    res.status(200).json({message: "Logged out successfully"});
}