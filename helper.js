import { ObjectId } from "mongodb";
import { client } from "./index.js";

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



export{ createMoviesInBody,
    getMoviesByFilter, 
    getMoviesById, 
    deleteMoviesByid, 
    updateMovieById };