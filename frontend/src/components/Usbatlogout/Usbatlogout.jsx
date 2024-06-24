import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {  UserContext } from "../../context/ContextWrapper";

function Usbatlogout() {
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null); // Clear the user object
    navigate("/");
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);

  return (
     
        <p onClick={() => logout()}>Logout</p>
  );
}

export default Usbatlogout;
