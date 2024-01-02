import React, { useEffect, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./TopNavbar.css";
import axios from "axios";

const TopNavbar = (props) => {
   const [showLogin, setShowLogin] = useState(false);
   const [showSignup, setShowSignup] = useState(false);
   const [loggedIn, setLoggedIn] = useState(false);
   const [username, setUsername] = useState("");
   const [input, setInput] = useState("");

   const handleLoginPage = (user) => {
      setUsername(user);
      console.log(user);
      setLoggedIn(true);
   }

   const handleLoginRoute = () => {
      setShowLogin(true);
   }

   const closeLogin = () => {
      setShowLogin(false);
   }

   const handleSignupRoute = () => {
      setShowSignup(true);
   }

   const closeSignup = () => {
      setShowSignup(false);
   }

   const handleInputChange = (event) => {
      const value = event.target.value;
      setInput(value);
   }

   const handleInputRequest = (event) => {
      event.preventDefault();
      props.handleSearchInput(input);
   }

   return (
      <div className="top-navbar-container">
         <div>
            <img className="reddit-logo" src="https://logos-download.com/wp-content/uploads/2016/06/Reddit_logo_full_1.png" />
         </div>
         <form onSubmit={handleInputRequest} className="search-input-container">
            <span className="material-symbols-outlined search-icon">search</span>
            <input onChange={handleInputChange} className="input-search" name="search" placeholder="Search Reddit"></input>
         </form>
         <div className="buttons-topnavbar-end">
            <a type="button" className="get-app-btn" href="https://play.google.com/store/apps/details?id=com.reddit.frontpage" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-qr-code-scan" viewBox="0 0 16 16">
               <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5M.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5M4 4h1v1H4z" />
               <path d="M7 2H2v5h5zM3 3h3v3H3zm2 8H4v1h1z" />
               <path d="M7 9H2v5h5zm-4 1h3v3H3zm8-6h1v1h-1z" />
               <path d="M9 2h5v5H9zm1 1v3h3V3zM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8zm2 2H9V9h1zm4 2h-1v1h-2v1h3zm-4 2v-1H8v1z" />
               <path d="M12 9h2V8h-2z" />
            </svg> Get app
            </a>
            {!loggedIn && <button type="button" className="log-in-btn" onClick={handleLoginRoute}>Log In</button>}
            {showLogin && <Login closeLogin={() => closeLogin()} handleLoginPage={handleLoginPage} />}
            {!loggedIn && <button type="button" className="sign-up-btn" onClick={handleSignupRoute}>Sign Up</button>}
            {showSignup && <Signup closeSignup={() => closeSignup()} handleLoginPage={() => handleLoginPage()} />}
            {loggedIn && <a className="new-post-btn" type="button" >Create Post</a>}
            {loggedIn && <div type="button" className="dropdown-login dropdown" data-bs-toggle="dropdown" aria-expanded="false">
               <img className="dropdown-login-img" src="https://tse3.mm.bing.net/th?id=OIP.7Yxk4ZM3SsfTkrtfJ91xGwHaHa&pid=Api&P=0&h=180"></img>
               <span className="dropdown-toggle"></span>
               <ul class="dropdown-menu">
                  <li><a class="dropdown-item">{username}</a></li>
                  <li><a class="dropdown-item" onClick={() => setLoggedIn(false)}>Log out</a></li>
               </ul>
            </div>}
         </div>
      </div>
   )
}

export default TopNavbar;
