import axios from "axios";
import { Children, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserLogOut = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/userlogin");
      return null;
    }
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/user/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.statusCode === 200) {
          localStorage.removeItem("token");
          navigate("/userlogin");
        }
      })
      .catch((err) => {
        console.log(err);
        navigate("/userlogin");

      });
  }, [token]);

  // if (!token) {
  //   navigate("/userlogin");
  //   return null;
  // }
  // axios
  //   .get(`${import.meta.env.VITE_BASE_URL}/user/logout`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //   .then((res) => {
  //     if (res.statusCode === 200) {
  //       localStorage.removeItem("token");
  //       navigate("/userlogin");
  //     }
  //   });

  // if (token) {
  //   localStorage.removeItem("token");
  // }
  // return <>{Children}</>;
};

export default UserLogOut;
