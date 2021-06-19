const User=require('../models/user.model')


class UserCtrl{
    static createUser(req,res){

        const userObj= new User(req.body);

        userObj.save()
        .then((result)=>{
            res.status(200).send({message:'created',data:result});
        })
        .catch((err)=>{
            res.status(500).send({message:'not created',error:err});
        });

    }

    // login details checking
    static authenticate(req, res) {
        const { email, password } = req.body;
        
        if(!email || !password)
        res.status(404).send({ message: "Invalid email or password", error:null });  
        else
        
        User.findOne({ email: email,status: 1 }, (err, result) => {
          if (err || !result)
            res.status(404).send({ message: "Invalid email", error: err });
          else if (!result.password)
            res.status(404).send({ message: "Password not available", error: err });
          else if (password == result.password) {     
            res.status(200).send({
              message: "Login successful",
              data: result,
            });
          } else {
            res.status(404).send({ message: "Invalid password", error: err });
          }
        });
      }
}
    module.exports=UserCtrl