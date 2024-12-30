const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/movies', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("mongodb server is connected");
})

db.on('error',(error)=>{
    console.error("mongodb error occured:"+error);
})

db.on('disconnected',()=>{
    console.log("mongodob is disconnected");
})

module.exports={
    db
}