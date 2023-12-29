import React from "react";
import "./SideNavbar.css";

const SideNavbar = () => {
  return (
    <div className="sideNavbar">
      <div className="sidebar-link">
        <div className="sidebar-menu">
          <div className="btn sidebar-menu-btn" type="button">
            <span class="material-symbols-outlined">home</span>
            <a>Home</a>
          </div>
          <div className="btn sidebar-menu-btn" type="button">
            <span class="material-symbols-outlined">whatshot</span>
            <a>Popular</a>
          </div>
        </div>
        <hr />
        <div className="btn sidebar-subreddits">
          <a>RECENT</a>
          <span class="material-symbols-outlined">expand_more</span>
        </div>
        <hr />
        <div className="btn sidebar-subreddits">
          <a>TOPICS</a>
          <span class="material-symbols-outlined">expand_more</span>
        </div>
        <hr />
        <div className="btn sidebar-subreddits extras">
          <a>RESOURCES</a>
          <span class="material-symbols-outlined">expand_more</span>
        </div>
        <div className="btn sidebar-subreddits extras">
          <a>POPULAR POSTS</a>
          <span class="material-symbols-outlined">expand_more</span>
        </div>
      </div>
    </div>
  )
}

export default SideNavbar;
