import express from "express";
import { createusers,generatePassword, getUsersByName } from "../helper.js";
// import { client } from "../index.js";
const router = express.Router();


router.route("/signup").post(async(request,response)=>{

 const {username,password} = request.body;

 const UserFromName = await getUsersByName(username);
 console.log(UserFromName);
 /// check username..
 if (UserFromName){

    response.send( {messgae:"username is already exist"} );
    return;
 }
 //// password..
 if(password.length<8){

 response.send( {messgae:"give longer password"} );
    return;
 }
 //pattern...
//  if(!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8}$/g.test(password)){

//     response.send( {messgae:"pattern doesnot match"} );
//     return;

//  }
 ///save in database..
 const hashpassword = await generatePassword(password);
 console.log(username,hashpassword);
 
 const result=await createusers({username,hashpassword});

 response.send(result);

//  const result=await client
//  .db("B28wd")
//  .collection("users")
//  .insertOne({username,hashpassword});


    
});

    export const usersRouter = router;