const jwt=require('jsonwebtoken');

 module.exports=async(req,res,next)=>{
     try{
     const verify=await jwt.verify(req.cookies.access_token,"MYNAMEISANKANKARMAKAR")
     if(verify){
        next();
     }else{
         res.status(400).send("error")
     }
    }catch(e){
        res.status(400).send("eorror")
    }
 }