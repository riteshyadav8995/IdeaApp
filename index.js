import express from 'express';
import ideaRoutes from './routes/idea.routes.js';

const app=express();
const port=8000;
app.use(express.json());// this is use for to read json file to js
//stiching the route here
ideaRoutes(app);
app.listen(port,()=>{
    console.log("app is running on port",port);
})