const express= require('express');
const router= express.Router();
const data = require('./data.json');

router.post("/",(req,res)=>{
    let ids=req.body.id.map(a=>Number(a));
    let cartProduct=data.filter((a)=>{ return ids.indexOf(a.id)>-1});
    res.status(201).send(cartProduct);
});



module.exports=router;