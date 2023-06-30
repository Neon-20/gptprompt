//To see others profiles
"use client";
import { useEffect,useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) =>{
    const searchParams = useSearchParams();
    const userName = searchParams.get("name");

    const [userPosts, setUserPosts] = useState([])

    useEffect(()=>{
        const fetchPosts = async() => {
        const response = await fetch(`/api/users/${params?.id}/posts`);
        const data = await response.json();

        setUserPosts(data);
    };
    if(params?.id) fetchPosts();
},[params.id]);//The second args ensures that the func shd only re-run if params.id is changed


return(
    <Profile
    name = {userName}
    desc={`Welcome to ${userName}'s personal profile.Explore ${userName}'s Prompts.`}
    data = {userPosts}
    />
);
};

export default UserProfile;