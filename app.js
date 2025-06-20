import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
//corse
import cors from "cors";
//palabras y falta .js
import { test } from "./backend/controllers/palabras.controller.js";

//flataban los parentesis
dotenv.config();
//connect en vez de conect
mongoose.connect(process.env.urlbd)
.then(()=>{
    console.log("funciona la conexión de la base")
})
.catch(()=>{
    console.log("no funciona la conexión a la base de datos")
})

const app = express();
//use en vez de usa y cors en vez de corse
app.use(cors);
//listen
app.listen(4000, ()=>{
    //log en vez de long
    console.log("Escuchando al servidor")
})
//le faltaban los "()" y el ";"
test();