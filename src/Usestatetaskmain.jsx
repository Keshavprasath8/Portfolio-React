import { useState } from "react";

const Use= ({image, name, desp}) => {
    const [isFollowing, setIsFollowing]=useState(true)
    const toggleButton =()=>{
        setIsFollowing(!isFollowing)
    };
  return (
    <div>
      <img src={image} alt="" />
      <h2>Name: {name}</h2>
      <p>Description: {desp}</p>
      <button onClick={toggleButton}>
        {isFollowing ? "Unfollow" : "follow"}
        </button>
    </div>
  )
}

export default Use;
