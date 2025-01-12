import React, { createContext, useState } from "react";

export const userDataContext = createContext();
const UserContext = ({ children }) => {
  const [userData, setuserData] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
  });

  return (
    <div>
      <userDataContext.Provider value={[userData, setuserData]}>
        {children}
      </userDataContext.Provider>
    </div>
  );
};

export default UserContext;
