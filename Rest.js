let fs=require("fs");
var express = require("express");
let readline=require("readline-sync")
var app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );  
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});
const port=process.env.PORT || 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

let arr=[
  {id: "DFI61", name:"Vishal", city:"Delhi", age:27, gender:"Male", payment:"Credit Card"},
  {id: "JUW88", name:"Amit", city:"Noida", age:49, gender:"Male", payment:"Debit Card"},
  {id: "KPW09", name:"Pradeep", city:"Gurgaon", age:21, gender:"Male", payment:"Wallet"},
  {id: "ABR12", name:"Rohit", city:"Jaipur", age:34, gender:"Male", payment:" Debit Card"},
  {id: "BR451", name:"Preeti", city:"Delhi", age:29, gender:"Female", payment:"Credit Card"},
  {id: "MKR52", name:"Neha", city:"Noida", age:42, gender:" Female ", payment:"Debit Card"},
  {id: "BTT66", name:"Swati", city:"Gurgaon", age:24, gender:" Female ", payment:"Wallet"},
  {id: "CDP09", name:"Meghna", city:"Jaipur", age:38, gender:" Female ", payment:" Debit Card"},
  {id: "KK562", name:"Irfan", city:"Delhi", age:25, gender:"Male", payment:"Credit Card"},
  {id: "LPR34", name:"Gagan", city:"Noida", age:51, gender:" Female ", payment:"Debit Card"},
  {id: "MQC11", name:"John", city:"Gurgaon", age:24, gender:"Male", payment:"Wallet"},
  {id: "AXY22", name:"Gurmeet", city:"Jaipur", age:31, gender:"Male", payment:" Debit Card"}
 ]
let file="hello.txt"



app.get("/svr/resetData",async function(req,res){
  try{
    let data1=JSON.stringify(arr)
    await fs.promises.writeFile(file,data1)
    console.log("write success")
    res.send(arr)
    }
    catch(err)
    {
      console.log(err)
      res.send("error")
    }
})

app.get("/svr/students",async function(req,res){
  try{
    let data1=JSON.stringify(arr)
    await fs.promises.writeFile(file,data1)
     let dat7=await fs.promises.readFile(file,"utf8")
     let da=JSON.parse(dat7)
     res.send(da)
  }
  catch(err)
  {
    res.send(err)
  }
})

app.get("/svr/students/:id",async function(req,res){
   let id=req.params.id
  try{
    let data1=JSON.stringify(arr)
    await fs.promises.writeFile(file,data1)
    let dat7=await fs.promises.readFile(file,"utf8")
    let da=JSON.parse(dat7)
     let id1=da.find((pr)=> pr.id==id)
     res.send(id1)
  }
  catch(err)
  {
    console.log(err)
  }
})

app.get("/svr/students/course/:name",async function(req,res){
  let name=req.params.name
 try{
  let data1=JSON.stringify(arr)
    await fs.promises.writeFile(file,data1)
   let dat7=await fs.promises.readFile(file,"utf8")
   let da=JSON.parse(dat7)
    let id1=da.find((pr)=> pr.name==name)
    res.send(id1)
 }
 catch(err)
 {
   console.log(err)
 }
})

app.post("/svr/students",async function(req,res){
  let data=req.body
  try{
    arr.push(data)
    let data2=JSON.stringify(arr)
    await fs.promises.writeFile(file,data2)
    console.log("write success")
    res.send(arr)
    }
    catch(err)
    {
      console.log(err)
      res.send("error")
    }
})

app.delete("/svr/students/:id",async function(req,res){
  let id=req.params.id;
  try{
    let dat=arr.findIndex((pr)=>pr.id==id)
    let i=arr.splice(dat,1)
    let data2=JSON.stringify(arr)
    await fs.promises.writeFile(file,data2)
    res.send(i)
  }
  catch(err)
  {
    console.log(err)
  }
})