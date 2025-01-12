import React, { useState } from "react";
import { uber_logo } from "../imgUrl";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(data)
    setdata({
      email: "",
      password: "",
    });
  };

  return (
    <div className=" flex flex-col h-screen justify-between p-7">
      <div>
        <img
          className=" mix-blend-multiply  w-14 mb-3"
          src={uber_logo}
          alt=""
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your email?</h3>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={(e) => setdata({ ...data, email: e.target.value })}
            required
            placeholder="email@example.com"
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            name="password"
            value={data.password}
            onChange={(e) => setdata({ ...data, password: e.target.value })}
            type="password"
            required
            placeholder="password"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
          />
          <button className="bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base">
            Login
          </button>
          <p className="text-center">
            New Here?
            <Link to="/userregister" className="text-blue-600  ">
              {" "}
              Create new Account
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/captainlogin"
          className="bg-[green] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
