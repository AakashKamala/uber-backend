const mongoose=require("mongoose")

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT).then(()=>{
        console.log("connected to db")
    }).catch(error=>{console.log(error)})
}

module.exports=connectToDb