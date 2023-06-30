//Set up our Google authentication
// This is backend implementation

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from '@utils/db';
import  User  from '@models/user';

// console.log({
//     clientId: process.env.GOOGLE_ID,
//     clientSecret: process.env.GOOGLE_SECRET,
// })

//In handler we have providers,callbacks
const handler = NextAuth({
    providers:[
        GoogleProvider({
        clientId:process.env.GOOGLE_ID,
        clientSecret:process.env.GOOGLE_SECRET,
        })
    ],
callbacks:{
    async session({session}){
        //get the data for an existing session
    const sessionUser = await User.findOne({
        email:session.user.email
    })
    //Update the iD
    session.user.id = sessionUser._id.toString();
    return session;
    },
    async signIn({profile}){
    try{
    //serverless -> lambda 
    await connectToDB();
    // check if user already exists
    const userExists = await User.findOne({
        email:profile.email,
    })
    //if not create new user and save to db
    if(!userExists){
    await User.create({
        email:profile.email,
        username:profile.name.replace(" ","")
        .toLowerCase(),
        image:profile.picture,
    })
    }
    return true;
    }
    catch(error){
    console.log(error);
    return false;
    }
    }
},
})

export { handler as GET, handler as POST }
