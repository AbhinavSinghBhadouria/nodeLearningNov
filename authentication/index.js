const express = require("express");
const app = express();
const jwt= require("jsonwebtoken");
const JWT_SECRET= "ilovetheonethatissittingwithme";
const crypto = require("crypto");

app.use(express.json());

// it is storing {username: "harkirat", password: 123 , token: asdsdffjddjdjdkdkdanything};
const users = [];

// function generateToken() {
//   return crypto.randomUUID();
// }

// SIGN-UP ROUTE
app.post("/signing-up", (req, res) => {
  const { username, password } = req.body;

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "You are signed up successfully",
  });
  console.log(users);
});

// SIGN-IN ROUTE
app.post("/signing-in", (req, res) => {
  const { username, password } = req.body;

  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username){
       if(users[i].password === password) {
            foundUser = users[i];
              break;
    }
    else{
        res.json({
                message: "Enter correct password"
    });
    }
  }
}

  if (foundUser) {
    const token = jwt.sign({
        username: username
    },JWT_SECRET); // convert their useername over to a jwt
    // foundUser.token = token;

    res.json({
      message: "Token has been generated",
      token: token,
    });
  } else {
    res.status(401).json({
      message: "Invalid username or password",
    });
  }
  console.log(users);
});


app.get("/me",function(req,res){
    const token= req.headers.token;
    const decodeInformation = jwt.verify(token,JWT_SECRET);
    const username=decodeInformation.username;
    let foundUser=null;
    for(let i=0;i<users.length;i++){
        if(users[i].username === username){
            foundUser=users[i];
        }
    }
    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }
    else{
        res.json({
            message: "token invalid"
        })
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
