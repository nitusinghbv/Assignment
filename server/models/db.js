const mongoose=require('mongoose');

const url="mongodb://127.0.0.1:27017/test";

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const conn=mongoose.connection;

conn.on("open",()=>{
    console.log("Connected to database ");
});
conn.on("error", () => {
    console.log("Not connected");
  });