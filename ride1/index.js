const express = require("express");
const app= express();

// function that returns a boolean if the age of the person is more than 14
function isOldEnough(age){
    if(age>=14){
        return true;
    }
    else{
        return false;
    }
}
app.use(isOldEnoughMiddleware);
app.get("/ride1", function(req,res){
res.json({
        msg:"You have successfully riden the ride 1",
    });
})

app.get("/ride2", function(req,res){ // either i can use the middleware here or use it globally , locally(app.get("/ride2",isOldEnoughMiddleware,function(req,res){)
    //but the order matters , like where we have written if we place the middleware after the function then it will not work for that
    // the function writtten after the middleware will work fine with that middleware..
res.json({
        msg:"You have successfully riden the ride 2",
    });
        });
    


// ABOVE CODE IS COMPLETELY BASED ON HOW TO DO IT MANUALLY BUT THE BETTER WAY IS TI BE DONE USING MIDDLEWARES



// now using middleware to do the same task
function isOldEnoughMiddleware(req,res,next){
    const age=parseInt(req.query.age);
    if(age>=14){
        next();  // means if the age is >=14 then let the user propogate the next user
    }
    else{
        res.json({
            msg: " Sorry, you are not of age yet",
        })
    }
}

app.listen(4000);
