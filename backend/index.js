import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors";
import messageRoute from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";
import { app,server } from "./socket/socket.js";
dotenv.config({});



// const app=express();
// app.use(cors({
//   origin: "http://localhost:5173", // or "*" for all origins (not secure for prod)
//   credentials: true, // if you're sending cookies
// }));
// app.use(cors()); // This allows all origins (wildcard)

app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.use(cookieParser());
const origins = ["http://localhost:5173", "https://college-project-frontend-d5um.onrender.com"]
const corsOption={
  origin: origins,
  credentials:true
};
app.use(cors(corsOption));

const PORT = process.env.PORT || 8080;


//routes

app.use("/api/v1/user",userRoute)
app.use("/api/v1/message",messageRoute)

server.listen(PORT,()=>{
  connectDB();
  console.log(`server running at port ${PORT}`);
})