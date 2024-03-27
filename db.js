const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://archana:archana24@cluster0.lwwafzj.mongodb.net/',{useNewUrlParser:true});

const db=mongoose.connection;
db.on('errer',console.error.bind(console,'connection error'));
db.once('open',function(){
    console.log('Database Connected Successfully..');
})