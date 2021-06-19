const express=require('express');

const UserCtrl=require('../controller/user.controler');

const router=express.Router();

router.post("/",UserCtrl.createUser);

module.exports=router;
    
   

