const express=require('express');
const app=express();

const PORT=process.env.PORT||5000;
require('./db/conn')
app.use(express.json());
const router=require('./router/router');
const adminrout=require('./router/adminrouter');
const cookieparser=require('cookie-parser');
app.use(cookieparser());
app.use(router);
app.use(adminrout);

if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"));
    app.get("*",(req,res)=>{
        const path=require('path');
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
      
}


app.listen(PORT,()=>{
    console.log("listening......")
})