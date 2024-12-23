const express=require('express')
const router=express.Router();
const {body}=require('express-validator');
const userController=require('../controllers/user.controller')
router.post('/register',[
    body('email').isEmail().withMessage('invalid email'),
    body('fullName.firstName').isLength({min:3}).withMessage('length of name should be 3 atleast'),
    body('password').isLength({min: 5}).withMessage('pass must be 5 char atleast')

],
   userController.registerUser 
)

 module.exports=router;