const express=require('express')
const app=express()
const path=require('path')

var datetime = require("node-datetime");
var dt = datetime.create(new Date());
var day = dt.format("W");
var hour = dt.format("H:M");
var sunday = "Sunday";
var saturday = "Saturday";
var MaxHour = "17:00";
var minHour = "09:00";

app.use(express.static(path.join(__dirname , '/product')))
app.get('/home',(req,res)=>{
    if(hour<MaxHour && hour>minHour && day!=sunday && day !== saturday) {
    res.sendFile(path.join(__dirname , '/product/home'))
    }
    else {
        res.send(" working time (Monday to Friday,  from 9 to 17) ")
    }
})


app.listen(5001, function (err){
     if(err) console.log('server not running') 
     else console.log("server is running on port http://localhost:5001");
 });
 
