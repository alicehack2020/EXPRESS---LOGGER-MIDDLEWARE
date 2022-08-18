const express=require("express")
const morgan=require("morgan")
const app=express()


app.use(morgan(":method :status :res[content-length] :response-time ms - :date :http-version :url"))

app.get("/",(req,res)=>{
    res.send({"message":"welcome"})
})

app.listen(3000,()=>{
    console.log("server started");
})
