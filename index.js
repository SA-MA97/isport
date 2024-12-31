const express = require('express');
const mongoose = require("mongoose");

const app = express()

const eventdashboard =require("./models/eventdashboard");

mongoose.connect("mongodb+srv://karajaassouma:130502@cluster0.szoq7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected successfully");
}).catch((error)=>{
    console.log("error with connecting with the DB ",error)
})
//mongodb+srv://karajaassouma:<db_password>@cluster0.szoq7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0




app.use(express.json())

app.get('/',(req,res)=>{
    
    res.send('free pickup game finder and organizer')

});

app.get('/dashboard',(req,res)=>{
    
    //res.send('welcom minh!')
   // res.sendFile(__dirname+"/views/dashboard.html");
   res.render("dashboard.ejs",{
    name:"minh",
    email:"minhemail",
   })

});


app.get('/search',(req,res)=>{
    
    res.send('search by')

});

app.get('/users/2',(req,res)=>{
    //console.log(req.body);
    //console.log(req.query);
   // res.send(`${req.body.name},email:${req.query.email}`);

    res.json({
        name:req.body.name,
        email: req.query.email
    })
   
});


app.get('/event/2',(req,res)=>{
    
    res.send('')

});

//=== eventdashboard event===
app.post("/eventdashboard",async(req,res)=>{
    const neweventdashboard = new eventdashboard
    const event = req.body.eventname
    const locals = req.body.localsName
    const attend= req.body.attendess
    const date_et_temps= req.body.date



    neweventdashboard.eventname= event;
    neweventdashboard.localsName= locals;
    neweventdashboard.attendess= attend;
    neweventdashboard.date= date_et_temps;
    await neweventdashboard.save();

    res.json(neweventdashboard);
});
app.get("/eventdashboard",(req,res)=>{
   const eventdashboard= eventdashboard.find();
   console.log("event ",eventdashboard);
   res.json(eventdashboard);
});
app.listen(5000,()=>{
    console.log("i am listening in prot 5000");
});