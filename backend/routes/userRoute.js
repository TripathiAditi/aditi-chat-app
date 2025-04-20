import express from "express";
import { register,login,logout, getOtherUsers } from "../controllers/userController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";


const router = express.Router();

// router.route("/register").get((req,res)=>{
//   console.log("hello bruh")
//   res.json({msg: "hello bruh"})
// });

//   router.route("/register").post((req,res)=>{
//   // console.log(req)
//   // console.log(req.body)
//   // res.json({msg: "noo"})
//   register(req,res)
// });

  router.route("/register").post(register);
  router.route("/login").post(login);
  router.route("/logout").get(logout);
  router.route("/").get(isAuthenticated, getOtherUsers);
/*
passing the function register as a callback, not calling it immediately.

You're calling the register function immediately while defining the route, and the result of that function (whatever it returns) is what's passed to .post(). But .post() expects a function (i.e., middleware) — not the result of a function.

So, if register() doesn’t return a function, this will break your code.
*/

export default router;