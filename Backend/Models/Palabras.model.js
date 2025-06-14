import { Model, Schema, model } from "mongoose";

const EsquemaPalabras = new Schema ({
    palabras:String
})

export const ModeloPalabras = new Model("palabras", EsquemaPalabras)
