// src/components/Profile.js
import React, { useState, useEffect } from "react";
import "./Profile.css";
import { ClipboardIcon, HeartIcon, UserIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  if (!localStorage.token) {
    return <div>Loading...</div>;
  }

  return (
    <div id="align">
      <div id="iconos">
        <div className="iconsDiv" onClick={() => navigate("/newrecipe")}>
          <h3>Add recipes</h3>
          <UserIcon />
        </div>
        <div className="iconsDiv" onClick={() => navigate("/myrecipes")}>
          <h3>My recipes</h3>
          <ClipboardIcon />
        </div>
        <div className="iconsDiv" onClick={() => navigate("/myfavourites")}>
          <h3>My favourites</h3>
          <HeartIcon />
        </div>
      </div>
    </div>
  );


  
};

export default Profile;
