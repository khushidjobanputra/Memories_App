const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('Connection Succesful');
}).catch((err)=>console.log(err));