const express=require("express")
const app=express()
require("dotenv").config()
const cors=require("cors")
const userRoutes=require("./routes/user.routes.js")

const connectToDb=require("./db/db.js")
connectToDb()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/",(req, res)=>{
    res.json({"message":"alive"})
})

app.use("/users",userRoutes)

module.exports=app