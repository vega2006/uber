const partnerModel = require("../models/partner.model");
const {validationResult} = require("express-validator");
const partnerService = require("../services/partner.service");
module.exports.registerPartner = async (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
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