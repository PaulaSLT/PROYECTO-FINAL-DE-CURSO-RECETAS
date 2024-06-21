// src/components/Profile.js
import React, { useState, useEffect } from "react";
import "./Profile.css";
import { ClipboardIcon, HeartIcon, UserIcon } from "@heroicons/react/24/outline";

const Profile = () => {
  if (!localStorage.token) {
    return <div>Loading...</div>;
  }

  return (
    <div id="iconos">
        <div className="iconsDiv">
          <h3>Search my recipes</h3>
          <UserIcon />
        </div>
        <div  className="iconsDiv">
          <h3>My recipes</h3>
          <ClipboardIcon />
        </div>
        <div className="iconsDiv">
          <h3>My favourites</h3>
          <HeartIcon />
        </div>
    </div>
  );


  
};

export default Profile;
