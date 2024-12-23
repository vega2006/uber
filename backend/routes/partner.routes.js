const express=require('express');
const router=express.Router();  
const {body}=require('express-validator');  
const partnerController=require('../controllers/partner.controller');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('fullName.firstName').isLength({min:3}).withMessage('Length of name should be 3 atleast'),
    body('password').isLength({min: 5}).withMessage('Password must be 5 char atleast'),
    body('vehicle.color').isLength({min:3}).withMessage('Length of color should be 3 atleast'),
    body('vehicle.plate').isLength({min:3}).withMessage('Length of plate should be 3 atleast'),
    body('vehicle.capacity').isLength({min:1}).withMessage('Length of capacity should be 1 atleast'),
    body('vehicle.type').isLength({min:3}).withMessage('Length of type should be 3 atleast'),
    body('vehicle.type').isIn(['car','auto','bike']).withMessage('Invalid vehicle type'),
    
],
   partnerController.registerPartner 
);


module.exports=router;