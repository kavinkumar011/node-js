import express from "express";
const router = express.Router();
import { createMoviesInBody,
    getMoviesByFilter, 
    getMoviesById, 
    deleteMoviesByid, 
    updateMovieById } from "../helper.js";

///movies...

// const movies=[];

router.route("/").post(async(request,response)=>{

    const data = request.body;
    // console.log(data);

    const result = await createMoviesInBody(data);
    response.send(result);
    // console.log(result);
});

/// query parameter.....

router.route("/").get(async(request,response)=>{

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

const filtermovie = await getMoviesByFilter(filter);

response.send(filtermovie);

});

/// response to server /movies path/id---params.....
router.route("/:id").get(async (request,response)=>{
    console.log(request.params)
    const {id}=request.params 

    const movie= await getMoviesById(id);
   
    // const movie= movies.filter((mv)=> mv.id==id);
    movie ?  response.send(movie) : response.status(404).send({message:"No matching movies found!!!!!"})

});

/// delete method....
router.route("/:id").delete(async(request,response)=>{

const {id}=request.params;
console.log(id);

const result= await deleteMoviesByid(id);

result.deletecount>0
?  response.send(result) : response.status(404).send({message:"No matching movies found!!!!!"})

});

//// put method....edit & update...

router.route("/:id").put(async(request,response)=>{

    const {id}=request.params;
    console.log(id);
    const data = request.body;

    const result= await updateMovieById(id, data);

    const movie= await getMoviesById(id);

    response.send(movie);
    
    });


    export const moviesRouter =  router;