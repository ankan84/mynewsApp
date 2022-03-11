
const mongoose=require('mongoose');
const atlas=`mongodb+srv://chatbox:Ankan@1234@cluster0.0uxbw.mongodb.net/myNewsAppDetabase?retryWrites=true&w=majority`
const url=`mongodb://127.0.0.1:27017/admindata`;
mongoose.connect(atlas,{
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then((res)=>{
    console.log('connected')
}).catch(()=>{
    console.log('not-connected')
})