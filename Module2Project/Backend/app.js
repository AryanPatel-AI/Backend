import express from 'express';
import cors from "cors";

const app=express();

//Middleware 
app.use(express.json());
app.use(cors());


//listener method

app.listen(3000,(error)=>{
 if(error) throw new Error("Error in starting the server");
 console.log("Server is running on port 3000");
});