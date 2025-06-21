import React, { createContext, useState } from "react";

export const userDataContext = createContext();
const UserContext = ({ children }) => {
  const [userContext, setUserContext] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
  });

  return (
    <div>
      <userDataContext.Provider value={[userContext, setUserContext]}>
        {children}
      </userDataContext.Provider>
    </div>
  );
};

export default UserContext;
