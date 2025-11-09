// creating an http server using express framework
// express
 // node default library => no
//  const express = require("express");

//  const app= express(); // this line is like we have allocated a room to the doctor in the hospital

//  app.listen(3000);
// with above three lines of code our server is live on port 3000, from the above we can say that the doctor is sitting on the cabin and waiting for the patients to come up

const express = require("express");

const app=express();

// jo hmm log link likthe h url bar m usme route k bd jo bhi hmm ? ke bad likhte h use query parameter bolte hai...


function sum(n){
    let ans=0;
    for(let i=1;i<=n;i++){
        ans+=i;
    }
    return ans;
}

app.get("/", (req,res)=>{
    const n=req.query.n;
    const soln=sum(n);

    res.send("hi your sum is "+ soln);
})

app.listen(3000);
