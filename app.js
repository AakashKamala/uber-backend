const express=require("express")
const app=express()
require("dotenv").config()
const cors=require("cors")

app.use(cors())

app.get("/",(req, res)=>{
    res.json({"message":"alive"})
})

module.exports=app