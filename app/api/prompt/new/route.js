import { connectToDB } from "@utils/db"
import Prompt from "@models/prompt";

//api backend for creating posts.
export const POST = async(req) =>{
    const {userId,prompt,tag} = await req.json()
    //taking requests

    //We connect to the DB
    try{
    await connectToDB();
    const newPrompt = new Prompt({
        creator:userId,
        prompt,
        tag
    })
    await newPrompt.save()// To save to DB
    return new Response(JSON.stringify(newPrompt),{status:201});
    }
    catch(error){
    return new Response("Failed to create a new prompt",{status:500})
    }
}
