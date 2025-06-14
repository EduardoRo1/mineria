import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";


mongoose.connect (process.env.urlbd)
.then(()=>{
    console.log("Si jalo")
})
.catch((error)=>{
    console.log("No jalo", error)
})

const app = express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("Escuchando al servidor")
})
