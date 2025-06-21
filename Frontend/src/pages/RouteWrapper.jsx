import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../context/userContext";
import axios from "axios";

const RouteWrapper = ({ children }) => {
  const { user } = useContext(userDataContext);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!token) {
      navigate("/userlogin");
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
        navigate("/userlogin");
      });
    // console.log(response);
  }, [token]);

  return <>{children}</>;
};

export default RouteWrapper;
