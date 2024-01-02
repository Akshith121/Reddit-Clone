import React from "react";
import "./Post.css";

const Post = (props) => {
    return (
        <div>
            <div className="post-container">
                <div className="post-top">
                    <div className="post-top-left">
                        <img src={props.profile} /> 
                        <a>{props.author}</a>
                        <div className="separator">.</div>
                        <div>
                            <p>{props.postedAt}</p>
                        </div>
                    </div>
                    <div className="post-top-right">
                        <button className="join-btn">Join</button>
                        <div className="more-btn">
                            <div>.</div>
                            <div>.</div>
                            <div>.</div>
                        </div>
                    </div>
                </div>
                <div className="headline-container">
                    <h5>{props.title}</h5>
                </div>
                <div className="post-image">
                    <img src={props.image} />
                </div>
                <div className="post-bottom">
                    <div className="post-voting-btn">
                        <div type="button" className="upvote-btn"><span class="material-symbols-outlined">shift</span></div>
                        <div className="vote-count">25</div>
                        <div type="button" className="downvote-btn"><span class="material-symbols-outlined">shift</span></div>
                    </div>
                    <div className="post-comments">
                        <div className="chat-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-square" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                            </svg>
                        </div>
                        <div className="comment-count">1.2k</div>
                    </div>
                    <div className="post-share">
                        <span className="material-symbols-outlined send-icon">upload</span>
                        <div className="share-text">share</div>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default Post;