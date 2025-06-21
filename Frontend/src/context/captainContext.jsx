import { createContext, useContext, useState } from "react";

const CaptainDataContext = createContext();

// export const useCaptain = () => {
//   const context = useContext(CaptainContext);
//   if (!context) {
//     throw new Error("useCaptain must be used within a CaptainProvider");
//   }
//   return context;
// };

export const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  // Login captain
  const loginCaptain = async (credentials) => {
    setLoading(true);
    try {
      // Add your API call here
      setIsAuthenticated(true);
      // Set captain data from response
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  // Logout captain
  const logoutCaptain = () => {
    setCaptain(null);
    setIsAuthenticated(false);
  };

  const value = {
    captain,
    setCaptain,
    isAuthenticated,
    loading,
    loginCaptain,
    logoutCaptain,
  };

  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  );
};
