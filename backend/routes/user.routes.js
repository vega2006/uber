const express=require('express')
const router=express.Router();
const {body}=require('express-validator');
const userController=require('../controllers/user.controller')
const authMiddleware=require('../middlewares/auth.middleware');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('fullName.firstName').isLength({min:3}).withMessage('Length of name should be 3 atleast'),
    body('password').isLength({min: 5}).withMessage('Password must be 5 char atleast')

],
   userController.registerUser 
);


router.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min: 5}).withMessage('Password must be 5 char atleast')
],
userController.loginUser
);

router.get('/profile',authMiddleware.authUser,userController.getProfile);

router.get('/logout',authMiddleware.authUser,userController.logoutUser);
 module.exports=router;