const express=require('express')

const User=require('../models/user')
const router=express.Router();
router.post('/users',async(req,res)=>{
    const {name,email,age}=req.body;
    
try {
    const user=new User({name,email,age})
     user.save();
     res.send(user);
} catch (error) {
   console.error(error);
   res.status(500) 
}

})

router.get('/users',async(req,res)=>{
  //  const {name,email,age}=req.body;
    
try {
    const user=await User.find({})
    
     res.send(user);
} catch (error) {
   console.error(error);
   res.status(500) 
}

})
router.put('/users/:id',async(req,res)=>{
    const {id}=req.params
    const {name,email,age}=req.body;
    
try {
    const user=await new User.findByIdAndUpdate(id,{name,email,age},{new:true})
    
     res.send(user);
} catch (error) {
   console.error(error);
   res.status(500) 
}

})
router.delete('/users:id',async(req,res)=>{
    const {id}=req.params;
    
try {
    const user=await User.findByIdAndDelete({id})
     user.save();
     res.send(user);
} catch (error) {
   console.error(error);
   res.status(500) 
}

})
module.exports=router;