import { createContext } from "react";
import React, { useState } from "react";

const UserContext = createContext("user");

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("user"); // Puedes inicializarlo con un valor por defecto

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
