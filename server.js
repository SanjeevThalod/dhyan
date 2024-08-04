import app from "./app.js";
import dotenv from "dotenv";
import cron from "node-cron";
import axios from "axios";

dotenv.config();
const URL = process.env.URL

app.listen(process.env.PORT,()=>{
    console.log(`Server running on ${process.env.PORT}`);
});

cron.schedule('0 22 * * *', async () => {
    try {
      const response = await axios.post(URL);
      console.log('API call successful:', response.data);
    } catch (error) {
      console.error('API call failed:', error);
    }
  });