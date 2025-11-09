const express=require("express");

const app=express();

app.get("/user",function(req,res){
    // let a=1; // undefined
    // b=a.length;

    throw new Error("Something went wrong!");

    res.status(200).json({
        name: "john doe",
        age:39,
    })
});

app.post("/user",function(req,res){
    res.status(200).json({
        msg: " created dummy user",
    })
});

// your task is to
// 1. ensure that if there is ever an exception, the end user sees a status code of 404
// 2. maintain the error count vairabke whose value should go up every time there is an exception in any endpoint

app.use(function(err,req,res,next){
    res.status(404).send({})
})

app.listen(3000);