import { ObjectId } from "mongodb";
import { client } from "./index.js";
import bcrypt from "bcrypt";

////function created here... refactor method.....
async function getMoviesByFilter(filter) {
    return await client
        .db("B28wd")
        .collection("movies")
        .find(filter)
        .toArray();
}
async function createMoviesInBody(data) {
    return await client
        .db("B28wd")
        .collection("movies")
        .insertMany(data);
}

async function getMoviesById(id) {
    return await client
        .db("B28wd")
        .collection("movies")
        .findOne({ _id: ObjectId(id) });
}
async function updateMovieById(id, data) {
    return await client.db("B28wd")
        .collection("movies")
        .updateOne({ id: id }, { $set: data });
}
async function deleteMoviesByid(id) {
    return await client.db("B28wd")
        .collection("movies")
        .deleteOne({ id: id });
}
//// users function....

async function createusers(data) {
    return await client
        .db("B28wd")
        .collection("users")
        .insertOne(data);
}
async function getUsersByName(username) {
    return await client
        .db("B28wd")
        .collection("users")
        .findOne({ username:username });
}

/////authentication and authorization....
async function generatePassword(password){
    /// salt + hash(password,salt)
   const NoOfRound= 10;

    const salt= await bcrypt.genSalt(NoOfRound);
    console.log(salt);

    const hashpassword = await bcrypt.hash(password,salt);
    console.log(hashpassword);
    return hashpassword;

}


export{ createMoviesInBody,
    getMoviesByFilter, 
    getMoviesById, 
    deleteMoviesByid, 
    updateMovieById,
    generatePassword,
    createusers,
    getUsersByName
    
  };