import mongoose from "mongoose";

mongoose.connect("mongodb+srv://goncalvespedro:123@cluster0.qu4gl9l.mongodb.net/Node-Express");

let db = mongoose.connection;

export default db;