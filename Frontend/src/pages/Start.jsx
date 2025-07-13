import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { uber_logo } from "../imgUrl";
import { userDataContext } from "../context/userContext";

const Start = () => {
  // const user = useContext(userDataContext);
  // console.log(user);

  return (
    <div>
      <div className=" bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] bg-cover bg-center h-screen pt-8 flex  w-full justify-between flex-col">
        <img
          className=" mix-blend-multiply  w-14 ml-8"
          src={uber_logo}
          alt=""
        />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>
          <Link
            to="/user/login"
            className=" flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
