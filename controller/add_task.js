const express=require('express');

const mongoose=require('../models/Todo.js');

const add_task=((req,res)=>{
    const new_task=req.body;
    console.log(new_task);
});