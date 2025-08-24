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

//get all notes

app.get("/api/notes",async(req,res)=>{
    try{
        const notes = await Notes.find();
        res.json(notes);
    } catch(err){
        res.status(500).json({error:"Failed to fetch notes"})
    }
});

//create a new note

app.post("/api/notes",async(req,res)=>{
    try{

        const {title,content} = req.body;
        const newNote = new Notes({title,content});
        await newNote.save();
          res.status(201).json(newNote);
    }catch(err){
      res.status(400).json({error:"Failed to add note"})

    }
});

//update a note

app.put("/api/notes/:id",async(req,res)=>{
try{
        const updatedNote = await Notes.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );

        res.json(updatedNote)
}catch(err){
res.status(400).json({error:"Failed to update note"});
}
});

//delete a note

app.delete("/api/notes/:id",async (req,res) =>{
    try{

        await Notes.findByIdAndDelete(req.params.id);
        res.json({message:"Note deleted successfully"});
    }
    catch(err){
        res.status(400).json({error:"Failed to delete a note"})

    }
});

//server 

app.listen(PORT,()=>{
    console.log(`😉 server is listening now at http://localhost:${PORT}`)
});


