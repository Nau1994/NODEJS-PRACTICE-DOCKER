import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import { startGraphQlServe } from "./graphql";

async function startServe() {
    const app=express()

    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    
    app.use(expressMiddleware(await startGraphQlServe()))

    app.use('/',(req,res)=>{res.send({"message":"server running on 8080"})})
    app.listen(8080,()=>{
        console.log("server running on 8080");

    })
}

startServe()