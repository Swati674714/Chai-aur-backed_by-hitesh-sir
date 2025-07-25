// require ('dotenv').config({path: './.env'});

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from './app.js'
import cookieParser from 'cookie-parser';
import router from "./routes/user.routes.js";
import { json } from "express";

dotenv.config({
    path : './.env'
})

app.use(json());
app.use('/api/v1/user',router);
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running on port ${process.env.PORT }`);
    })
}).catch((error) => {
    console.error("MONGO db connection error:", error);
});

















/*
import express from "express";
const app = express();

(async () => {
    try{
         await  mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`, )
         app.on("error", (error) =>{
            console.log("ERROR:",error);
            throw error
         })
app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}`);
})

    }catch(error){
        console.error("ERROR :", error)
        throw err;
    }
} )() */