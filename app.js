import express from "express";
import twilioRouter from "./Routes/twilioRoutes.js";

const app = express();

// Routes
app.get("/",(req,res)=>{res.status(200).json({"Backend":"Working"})});
app.use('/api',twilioRouter);


export default app;