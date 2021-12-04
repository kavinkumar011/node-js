
// const express = require("express");    ///// type:"common js"
import express, { request, response } from "express";       /// type:"module"
const app = express();
import { MongoClient } from 'mongodb';
import dotenv from "dotenv";
import cors from "cors";
import bcrypt from "bcrypt";
import { createMoviesInBody,
     getMoviesByFilter, 
     getMoviesById, 
     deleteMoviesByid, 
     updateMovieById } from "./helper.js";
import { moviesRouter } from "./Routes/movies.js";

    





//------------------------------------------------------------------------------------------------//
dotenv.config();///all data in env are comes under process.env
console.log(process.env);

app.use(express.json());

app.use(cors());


app.use("/movies",moviesRouter);
//-----------------------------------------------------------------------------------------------------//
// const MONGO_URL="mongodb://localhost";
// mongodb+srv://kavinkumar:<password>@cluster0.wlhui.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

// const MONGO_URL="mongodb+srv://kavinkumar:kavinkumar011@cluster0.wlhui.mongodb.net"; // how to hide thisone

const MONGO_URL = process.env.MONGO_URL;
async function getconnection(){

    const client = new MongoClient(MONGO_URL);
    await client.connect();  
    console.log("mongodb connected")
    return client;
}

export const client = await getconnection();


//--------------------------------------------------------------------------------------------------//



/////authentication and authorization....
async function generatepassword(password){
     /// salt + hash(password,salt)
    const NoOfRound= 10;

     const salt= await bcrypt.genSalt(NoOfRound);
     console.log(salt);

     const hashpassword = await bcrypt.hash(password,salt);
     console.log(hashpassword);

}
generatepassword("password@123"); 





//--------------------------------------------------------------------------------------------------//
//// response to server....
// const PORT = 8000;
const PORT=process.env.PORT;

app.get("/",(request,response)=>{
    response.send("hai kavinkumar welcome to heroku!!");
   
});


//PORT attached to App....
app.listen(PORT , ()=>{
    console.log("App get started!!!!!")
}); 

//-------------------------------------------------------------------------------------------------//