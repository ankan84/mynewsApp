const mongoose=require('mongoose');


const adminSchema = new mongoose.Schema({

     id:{
         type:String,
          required:true
     },
         
    articles:
        {
            source: {
                id:{type:String},
                name:{type:String}
            },
            author:{type:String},
            title:{type:String,
                required:true
            },
            description: {type:String},
            url: {type:String},
            urlToImage: {type:String},
            publishedAt:{type:String,
            default:new Date().toISOString().substring(0,10)
            },
            content:{type:String}
        }
   
});



const AdminData=mongoose.model('adminwriteData', adminSchema);


module.exports=AdminData;

