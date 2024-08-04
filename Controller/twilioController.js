import dotenv from "dotenv";
import twilio from "twilio";

dotenv.config();

const FROM = process.env.FROM;
const accountSID = process.env.SID;
const authToken = process.env.TOKEN;
const TO = process.env.TO;

const makeCall = async(req,res)=>{
    try {
        const client = twilio(accountSID,authToken);

        const call = await client.calls.create({
            from:`${FROM}`,
            to:"+918168885966",
            twiml:"<Response><Say>, mummy dahs baihj gye hai, akhroht bhigo de, mummy dahs baihj gye hai, akhroht bhigo de, mummy dahs baihj gye hai, akhroht bhigo de, mummy dahs baihj gye hai, akhroht bhigo de, mummy dahs baihj gye hai, akhroht bhigo de, mummy dahs baihj gye hai, akhroht bhigo de, mummy dahs baihj gye hai, akhroht bhigo de, mummy dahs baihj gye hai, akhroht bhigo de, mummy dahs baihj gye hai, akhroht bhigo de, Mummy it's  10 o'clock,soak the walnuts, Mummy it's  10 o'clock,soak the walnuts, Mummy it's  10 o'clock,soak the walnuts, Mummy it's  10 o'clock,soak the walnuts, ,Mummy it's  10 o'clock,soak the walnuts ,Mummy it's  10 o'clock,soak the walnuts </Say></Response>",
        });

        console.log(call);
        res.status(200).json({"Success":"true"});
    } catch (error) {
        res.status(500).json(error);
    }
}

export {makeCall};