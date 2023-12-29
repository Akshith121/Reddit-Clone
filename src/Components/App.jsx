import React from "react";
import SideNavbar from "./SideNavbar";
import TopNavbar from "./TopNavbar";
import Post from "./Post";
import Communities from "./Communities";
import "./App.css";

function App() {
  return (
    <div className="App-container">
      <TopNavbar />
      <hr style={{ "marginTop": "0.4rem" }} />
      <div className="main-content-container">
        <SideNavbar />
        <div className="posts-container-wrapper">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <Communities />
      </div>
    </div>
  );
}

export default App;
