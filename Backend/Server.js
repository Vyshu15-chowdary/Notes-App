import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

//import notesmodel

import Notes from "./NotesModel.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//middleware

app.use(cors());
app.use(express.json());

//mongodb connection

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

.then(()=> console.log("Mongodb connected"))
.catch((err)=> console.log("❌ mongodb connection error:",err));

//Api routes

//get all routes

app.get("/api/notes",async(req,res)=>{
    try{
        const notes = await Notes.find();
        res.json(notes);
    } catch(err){
        res.status(500).json({error:"Failed to fetch notes"})
    }
});
