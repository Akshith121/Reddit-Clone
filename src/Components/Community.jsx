import React from "react";

const Community = (props) => {
    return (
        <div onClick={() => props.getCommunity(props.name)} type="button" className="communities-container">
            <img className="community-image" src={props.profile} />
            <div className="community">
                <p>{props.name}</p>
                <p>{props.members} members</p>
            </div>
        </div>)
}

export default Community;