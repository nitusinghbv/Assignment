const mongoose=require('mongoose');

const {Schema}=mongoose;
 const userSchema=new mongoose.Schema({
     name:{type:String,minlength:3,maxlength:20},
     email:{type:String,maxlength:45,required:true,unique:true},
     password:{type:String,maxlength:100},
    });

    const User=mongoose.model("user",userSchema);



    module.exports=User;