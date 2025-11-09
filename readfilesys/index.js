const express= require("express")
const app = express();
const fs= require("fs");

app.get("/file/:filename",function(req,res){
    const name= req.params.filename;
    console.log(name);
    fs.readFile(name,"utf-8",(err,data)=>{
        res.json({
            data
        });
    })
})
 
app.listen(4000);