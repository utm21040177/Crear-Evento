import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { register, login, updateProfile } from './controllers/UsersController.js';
import { createEvent } from './controllers/EventsController.js';




dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Conectado c="));

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Is not working (it is)")
})

app.post("/user/register", register)
app.post("/user/login", login)
app.put("/user/updatePorfile/:id", updateProfile)

app.post("/event/create", createEvent)


app.listen(4000, ()=>console.log("Server is running"))
