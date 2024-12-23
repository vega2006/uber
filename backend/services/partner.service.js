const partnerModel = require("../models/partner.model");

module.exports.createPartner = async ({
    firstName,lastName,email,password,color,plate,capacity,type})=>{
    if(!firstName || !email || !password || !color || !plate || !capacity || !type){
        throw new Error('All fields are required');
    }
    const partner = partnerModel.create({
        fullName:{
            firstName,
            lastName
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            type
        },
        
    });    
    return partner;
}