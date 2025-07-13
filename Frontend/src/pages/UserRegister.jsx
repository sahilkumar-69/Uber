import React, { useState, useContext } from "react";
import { uber_logo } from "../imgUrl";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { userDataContext } from "../context/userContext";

const UserRegister = () => {
  const [userData, setUserData] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
    password: "",
  });

  const [userContext, setUserContext] = useContext(userDataContext);

  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name === "fistname" || name === "lastname") {
  //     setUserData((prevdata) => ({
  //       ...prevdata,
  //       fullname: {
  //         ...prevdata.fullname,
  //         [name]: value,
  //       },
  //     }));
  //   } else {
  //     setUserData((prevdata) => ({
  //       ...prevdata,
  //       [name]: value,
  //     }));
  //   }
  // };

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/user/register`,
      userData
    );

    if (response.status === 201) {
      const { token, user } = response;
      setUserContext({ user, ...userContext });
      localStorage.setItem("token", token);
      navigate("/home");
      // console.log(response)
    }
    // console.log(userData);
    setUserData({
      fullname: {
        firstname: "",
        lastname: "",
      },
      email: "",
      password: "",
    });
  };

  return (
    <div className=" flex flex-col h-screen justify-between p-7">
      <div>
        <img className=" mix-blend-multiply w-14 mb-4" src={uber_logo} alt="" />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your name?</h3>
          <div className="flex gap-3 mb-4 justify-center w-full">
            <input
              type="text"
              name="firstname"
              value={userData.fullname.firstname}
              // onChange={(e) => handleOnChange(e)}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  fullname: { ...userData.fullname, firstname: e.target.value },
                })
              }
              required
              placeholder="First Name"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-base placeholder:text-sm"
            />
            <input
              type="text"
              name="lastname"
              value={userData.fullname.lastname}
              // onChange={(e) => handleOnChange(e)}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  fullname: { ...userData.fullname, lastname: e.target.value },
                })
              }
              // required
              placeholder="Last Name"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"
            />
          </div>
          <h3 className="text-lg font-medium mb-2">What's your email?</h3>
          <input
            type="email"
            name="email"
            value={userData.email}
            // onChange={(e) => handleOnChange(e)}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            required
            placeholder="email@example.com"
            className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            name="password"
            value={userData.password}
            // onChange={(e) => handleOnChange(e)}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            type="password"
            required
            placeholder="password"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
          />
          <button className="bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base">
            Create new Account
          </button>
          <p className="text-center">
            Already have an account?
            <Link to="/user/login" className="text-blue-600  ">
              {" "}
              Login Here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px] leading-tight ">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          the <span className="underline">Google privacy policy</span> and{" "}
          <span className="underline">Term of service policy</span>
        </p>
      </div>
    </div>
  );
};

export default UserRegister;
