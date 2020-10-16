const express = require("express");
const parser = require("body-parser");
//const path = require("path");

const app = express();

app.use(parser.urlencoded({extended:false}));

const root=__dirname;
app.get("/",(req,res)=> res.send("Testing Express"));
app.get("/Home",(req,res)=> res.send("<h1>Home Page of the Application"));
app.get("/NewUser",(req,res)=> res.sendFile(root+"/UserRegistration.html"));
app.get("/Register",(req,res)=>{
    const name =req.query.uname;
    const address =req.query.uaddress;
    const phone =req.query.uphone;
    res.send(`<h1${name} from ${address} has been registered with phone number ${phone}>`);
})
    app.post("/Register",(req,res)=>{
        if(req.body==null){
            res.send(`<h1>There is no data posted to the server</h1>`);
        }
        else{
            const name =req.body.uname;
            const address =req.body.uaddress;
            const phone =req.body.uphone;
            res.send(`<h1${name} from ${address} has been registered with phone number ${phone}>`);
        }
    })
    app.listen(1234,()=>{
    console.log("Server is running at 1234");
}) 