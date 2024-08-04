import express from "express";
import { makeCall } from "../Controller/twilioController.js";
const twilioRouter = express.Router();

twilioRouter.post('/call',makeCall);

export default twilioRouter;