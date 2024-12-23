const dotenv=require('dotenv');
dotenv.config();
const cookieParser=require('cookie-parser');

const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
const userRoutes=require('./routes/user.routes');
app.use(express.json());
app.use(express.urlencoded({extented:true}));
app.use(cookieParser());
app.get('/',(req,res)=>{
    res.send('hello world');
});
 
app.use('/users',userRoutes); 
const connectToDb=require('./db/db');
connectToDb();

module.exports=app;

