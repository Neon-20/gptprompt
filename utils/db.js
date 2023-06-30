import mongoose, { mongo } from "mongoose";
let isConnected = false;// to track the connect. status


export const connectToDB = async () =>{
    mongoose.set('strictQuery',true)//set mongoose options
    if(isConnected){
        console.log("MongoDB is already connected");
        return;// just to stop it from running
    }
    try{
    await mongoose.connect(process.env.MONGODB_URI,{
        dbName:"share_prompt",
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    isConnected=true;
    console.log("MongoDB Connected");
    }
    catch(error){
    console.log(error);
    }
}

