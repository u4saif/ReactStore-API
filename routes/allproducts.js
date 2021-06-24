const express=require('express');
const router=express.Router();
const data= require('./data.json');

router.get('/',(req,res)=>{
    res.status(200).send(data);
});

router.get('/:id',(req,res)=>{
    let filterData=data.filter((a)=>{ return a.id==req.params.id});
    res.status(200).send(filterData);
});

module.exports =router;