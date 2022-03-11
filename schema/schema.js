const mongoose=require('mongoose');
// import mongoose from "mongoose";
const bcrypt=require('bcrypt');
const validator=require('validator');

const blogSchema = new mongoose.Schema({
     name:{
        type:String,
        required:true,
        minlength:2
     },
     email:{
        type:String,
        required:true,

        validate(value){
            if(validator.isEmail(value)){
                
            }else{
                throw new Error("Error");
            }
        }
  
      
     },
     password:{
        type:String,
        required:true,
        minlength:3
     }
});

blogSchema.pre('save',async function(next){
 
   
    this.password= await bcrypt.hash(this.password,12);

    next();
})

const Data=mongoose.model('dataadmin', blogSchema);


module.exports=Data;

