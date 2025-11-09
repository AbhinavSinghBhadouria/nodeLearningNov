const express = require("express")
const app= express();
const jwt= require("jsonwebtoken");
const JWT_SECRET= "thenextsecwheniheardsomethingistartedhatingher";


app.use(express.json());

const users=[]
app.post("/signing-up", function(req,res){
    const username= req.body.username
    const password= req.body.password
    users.push({
        username: username,
        password: password
    });
    res.json({
        message: "You are signedUp successfully"
    });
})

app.post("/signing-in",function(req,res){
    // now the verification and all starts from there only..
    const username= req.body.username
    const password = req.body.password

    let founduser= null;

    for(let i=0;i<users.length;i++){
        if(users[i].username === username && users[i].password ===password){
            foundUser= users[i];
        }
    }
  if(!foundUser){
    res.json({
        message: "Credentials are Incorrect"
    })
    return 
}
else{
    const token= jwt.sign({
        username
    }, JWT_SECRET);

    res.json({
        token: token
    })
}  
})

app.get("/me", function(req,res){
    // we can do both the things i.e we can either decode it or we can even verify it but only decoding is a vulnerabillity to the code
    // it can be decode to anyone without checking the identity of the owner..
    const token = req.headers.token;

    // const decodedData= jwt.decode(token);

    const decodedData= jwt.verify(token, JWT_SECRET);

    if(decodedData.username){
        let foundUser=null;
        for(let i=0;i< users.length ;i++){
            if(users[i].username=== decodedData.username){
                foundUser = users[i]
            }
        }
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }


})


app.listen(3000,()=>console.log("We are live at port 3000"));