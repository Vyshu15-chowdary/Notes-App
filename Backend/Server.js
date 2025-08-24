import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

//import notesmodel

import Notes from "./NotesModel.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
