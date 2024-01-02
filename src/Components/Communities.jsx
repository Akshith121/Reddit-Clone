import React, { useEffect, useState } from "react";
import "./Communities.css";
import axios from "axios";
import Community from "./Community";

const Communities = (props) => {

    const [communities, setCommunities] = useState([]); 

    const getCommunity = (data) => {
      props.handleCommunity(data);
    }

    useEffect(() => {
       axios.get("http://localhost:4000/communities", {withCredentials: true})
       .then((response) => {
         setCommunities(response.data);
       }).catch(err => {
         console.log(err);
       })
    }, []);

    return (
        <div className="popular-communities-container">
            <p>POPULAR COMMUNITIES</p>
            {communities.map((community) => (
               <Community getCommunity={getCommunity} {...community}/>
            ))}
        </div>
    )
}

export default Communities