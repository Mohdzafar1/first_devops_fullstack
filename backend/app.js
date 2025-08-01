import dotenv from "dotenv";
dotenv.config();
import express from "express"
import './conn.js';
import Task from "./taskModel.js";
import cors from "cors";


const app=express()
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000", "https://yourdomain.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

const PORT=process.env.URL || 8000


app.get("/api/getTask",async(req,res)=>{
    try{
       let task=await Task.find()        
       res.status(200).json({message:"Tasks fetched successfully", tasks: task})       
    }catch(error){
         console.log("Error in root route:", error)
         res.status(500).json({ message: "Internal Server Error" })
    }
})

app.post("/api/create",async(req,res)=>{
    try{
      const{title,desc}=req.body;
      if(!title || !desc){
        return res.status(400).json({ message: "Title and description are required" });
      }      
      let newTask=new Task({title,desc}).save()
      return res.status(201).json({message:"Task created successfully", task: newTask})
    }catch(error){
         console.log("Error in root route:", error)
         res.status(500).json({ message: "Internal Server Error" })
    }
})

app.listen(PORT,()=>{
    console.log(`Server is running on port. ${PORT}`)
})
