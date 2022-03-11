const express=require('express');
const adminrout=express.Router();
const mongoose=require('mongoose');
const Data=require('../schema/schema');
const router = require('./router');
const AdminData=require('../schema/adminData')
const jwt=require('jsonwebtoken')
const SECRETKEY="MYNAMEISANKANKARMAKAR";
const access=require('../access/adminAccess');
const bcrypt=require('bcrypt')
const axios=require('axios');


adminrout.post('/admin/signup',async(req,res)=>{
    const {name,email,password}=req.body;
   
    try{
        const data=await Data.findOne({email});
       
        if(!data){
            const saveData=new Data({name,email,password});
            const response=await saveData.save();
            if(response!=null){
                res.status(200).send(response)
            }else{
                res.status(400).send();
            }
        }
        else{
            res.status(400).json({mess:"user already register"})
        }
    
        
    }catch(e){
        res.status(400).send();
    }
    
})

adminrout.post('/admin/signin',async(req,res)=>{

    const {email,password}=req.body;
     
    try{
    let email_data=await Data.findOne({email});
    if(email_data){ 

        const isMatch=await bcrypt.compare(password,email_data.password);
        if(isMatch){

        const token=await jwt.sign({id:email_data._id},SECRETKEY);
        res.cookie("access_token",token,{expiresIn:'2h',
        httpOnly:true});
            res.status(200).send(email_data);;

        }else{
            res.status(400).send("error");
        }
    }else{
     res.status(400).json({mess:"email not registed"})
    }
}catch(e){
    res.status(400).send("error");
}

})

// admin post 

adminrout.post('/admin/create-post',access,async(req,res)=>{

    const {articles}=req.body;
    

   try{
     let token=req.cookies.access_token;
     let testToken=await jwt.verify(token,SECRETKEY);
     var myname="ankankarmakar";
     
    const articalsData=new AdminData({
        id:testToken.id,articles
        
    })
    const response=await articalsData.save();
    if(response){ res.status(200).send(response)}
    else{ res.status(400).send("error") }

}catch(e){
    
    res.status(400).send("error")
}

})
 

adminrout.get('/admin-allpost',access,async(req,res)=>{
       try{

        const verify=await jwt.verify(req.cookies.access_token,"MYNAMEISANKANKARMAKAR");
        const admin_allpost=await AdminData.find({id:verify.id})
        if(admin_allpost){
      
            res.status(200).send(admin_allpost);
        }else{
            res.status(400).send();
        }
    

       }catch(e){
           res.status(400).send();
       }
})

adminrout.get('/admin_home', access,async(req,res)=>{
    const verify=await jwt.verify(req.cookies.access_token,"MYNAMEISANKANKARMAKAR");
    const admin_data=await Data.findOne({_id:verify.id});
     res.status(200).send(admin_data);


})
adminrout.post('/logout',(req,res)=>{
    res.clearCookie('access_token');

    res.status(200).send();
     
     

    
})


module.exports=adminrout;