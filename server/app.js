const express=require('express');

const bodyParser=require('body-parser');

require('./models/db');

const cors=require('cors');

const app=express();
app.use(cors());

app.use(bodyParser.json());

const port=process.env.PORT || 8888;

app.get("/",(req,res)=>{
    res.status(200).send("server")
})

app.use("api/user",require('./routes/user.route'));

app.listen(port,()=>{
    console.log("connected to server");
});