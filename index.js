
// const express = require("express");    ///// type:"common js"
import express, { request, response } from "express";       /// type:"module"
const app = express();
import { ObjectId } from "mongodb";
import { MongoClient } from 'mongodb';
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();///all data in env are comes under process.env
console.log(process.env);


app.use(express.json());

app.use(cors());




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

const client = await getconnection();




///movies...

// const movies=[];



app.post("/movies",async(request,response)=>{

    const data = request.body;
    // console.log(data);

    const result = await client
    .db("B28wd")
    .collection("movies")
    .insertMany(data);
    response.send(result);
    // console.log(result);
});



//// response to server....
// const PORT = 8000;
const PORT=process.env.PORT;

app.get("/",(request,response)=>{
    response.send("hai kavinkumar welcome to heroku!!");
   
});

/// query parameter.....

app.get("/movies",async(request,response)=>{

    console.log(request.query);

    // const {language,rating}=request.query;
      // console.log(language,rating);

    const filter = request.query;
     console.log(filter);

     if(filter.rating){
         filter.rating = parseInt(filter.rating)
     }

//     let filtermovie=movies;
// if(language){
//     filtermovie= filtermovie.filter((mvs)=> mvs.language==language)
  
// }
// if(rating){
//     filtermovie=filtermovie.filter((mv)=> mv.rating==rating)
    
// }
// response.send(filtermovie);



//// mongodb method....

const filtermovie = await client
.db("B28wd")
.collection("movies")
.find(filter)
.toArray();

response.send(filtermovie);

});

/// response to server /movies path/id---params.....
app.get("/movies/:id",async (request,response)=>{
    console.log(request.params)
    const {id}=request.params 

    const movie= await client
    .db("B28wd")
    .collection("movies")
    .findOne({_id : ObjectId(id)});
   
    // const movie= movies.filter((mv)=> mv.id==id);
    movie ?  response.send(movie) : response.status(404).send({message:"No matching movies found!!!!!"})

});

/// delete method....
app.delete("/movies/:id",async(request,response)=>{

const {id}=request.params;
console.log(id);

const result= await client.db("B28wd")
.collection("movies")
.deleteOne({id:id});

result.deletecount>0
?  response.send(result) : response.status(404).send({message:"No matching movies found!!!!!"})

});

//// put method....edit & update...

app.put("/movies/:id",async(request,response)=>{

    const {id}=request.params;
    console.log(id);
    const data = request.body;

    const result= await client.db("B28wd")
    .collection("movies")
    .updateOne({id:id},{$set:data});

    const movie= await client
    .db("B28wd")
    .collection("movies")
    .findOne({id : id});/////////to find({})

    response.send(movie);
    
    // result.deletecount>0
    // ?  response.send(result) : response.status(404).send({message:"No matching movies found!!!!!"})
    
    });

//PORT attached to App....
app.listen(PORT , ()=>{
    console.log("App get started!!!!!")
}); 

