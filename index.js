import express from 'express';

const app=express();
const port=8000;
app.listen(port,()=>{
    console.log("app is running on port 8000",port);
})