const express =require("express");

const app=express();

let countofrequests=0;

// you have been given an express server whch has a few endpoints
// your task is to create a global middleware which will
// maintain a count of the number of requests made to the server 

// now lets create a middleware
// function requestcountmiddleware(req,res,next){
//     countofrequests= countofrequests+1;
//     next();
// }

app.get("/requestcount",(req,res)=>{
    res.status(200).json({
        requestcount: countofrequests,
    })
})

app.use(function(req,res,next){
    countofrequests+=1;      // actually this is the middleware that we are needed
    next();
})
app.get("/user",function(req,res){
    res.status(200).json({
        name: "John Doe",
        age:30,
            })
})

app.get("/dummyuser",(req,res)=>{
    res.status(200).json({
        msg:"Dummy users created",
    })
})

app.get("/admin",(req,res)=>{
    res.status(200).json({
        msg: "second dummy user created",
    })
})



app.listen(3000);