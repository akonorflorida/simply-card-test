import mongoose from "mongoose";

mongoose.connect('mongodb+srv://Nick:0929019440@cards.m38rpma.mongodb.net/?retryWrites=true&w=majority').then((_)=> _)
export const mongo = mongoose.connection
