const express= require("express");
const app= express();

// in express if you want to send json data
// you first need to parse the json data
// convert into javascript object
// so to do so we need to use the express.json library
let middleware= express.json();


// body parser function does the same task as it does in the express.json .....
// app.use(middleware);

// or 

app.use(bodyparser.json());

app.post("/sum", function(req,res){
    console.log(req.body)
    const a= parseInt(req.body.a);
    const b= parseInt(req.body.b);

    res.json({
        ans: a+b,
    });
});

app.listen(3000);