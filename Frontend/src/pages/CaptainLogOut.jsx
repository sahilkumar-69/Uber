// import React from "react";
import { useNavigate } from "react-router-dom";

const CaptainLogOut = () => {
  const navigate = useNavigate();
  const captainToken = localStorage.getItem("captainToken");
  if (captainToken) {
    localStorage.removeItem("captainToken");
    console.log("Captain logged out");
    
    navigate("/captainlogin");
  }
  return null
  // <div>CaptainLogOut</div>
};

export default CaptainLogOut;
