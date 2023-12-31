import React, { useEffect, useState } from "react";
import SideNavbar from "./SideNavbar";
import TopNavbar from "./TopNavbar";
import Post from "./Post";
import Communities from "./Communities";
import "./App.css";
import axios from "axios";

function App() {

  const [posts, setPosts] = useState([]);
  const [endpoint, setEndpoint] = useState("Home");

  useEffect(() => {
    axios.get(`http://localhost:4000/posts?category=${endpoint}`, {withCredentials: true})
    .then((response) => {
      setPosts(response.data); 
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App-container">
      <TopNavbar />
      <hr style={{ "marginTop": "0.4rem" }} />
      <div className="main-content-container">
        <SideNavbar />
        <div className="posts-container-wrapper">
          {posts.map(post => (
            <Post {...post}/>
          ))}
        </div>
        <Communities />
      </div>
    </div>
  );
}

export default App;
