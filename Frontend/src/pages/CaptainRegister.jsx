import React, { useState } from "react";
import { Link } from "react-router-dom";
import { uber_driver } from "../imgUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CaptainContext } from "../context/captainContext";

const CaptainRegister = () => {
  const navigate = useNavigate();
  const [captainData, setCaptainData] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
    password: "",
    vehicle: {
      plate: "",
      color: "",
      capacity: "",
      vehicleType: "",
    },
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(captainData);
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captain/register`,
      captainData
    );

    if (response.status === 201) {
      console.log("response", response);
      const data = response.data;
      console.log("data", data);
      localStorage.setItem("captainToken", data.token);
      navigate("/captain-home");
    }

    setCaptainData({
      fullname: {
        firstname: "",
        lastname: "",
      },
      email: "",
      password: "",
      vehicle: {
        plate: "",
        color: "",
        capacity: "",
        vehicleType: "",
      },
    });
  };

  return (
    <div className=" flex flex-col h-screen justify-between p-7">
      <div>
        <img
          className=" mix-blend-multiply w-14 mb-4"
          src={uber_driver}
          alt=""
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">
            What's out captain's name?
          </h3>
          <div className="flex gap-3 mb-4 justify-center w-full">
            <input
              type="text"
              name="firstname"
              value={captainData.fullname.firstname}
              // onChange={(e) => handleOnChange(e)}
              onChange={(e) =>
                setCaptainData({
                  ...captainData,
                  fullname: {
                    ...captainData.fullname,
                    firstname: e.target.value,
                  },
                })
              }
              required
              placeholder="First Name"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-base placeholder:text-sm"
            />
            <input
              type="text"
              name="lastname"
              value={captainData.fullname.lastname}
              // onChange={(e) => handleOnChange(e)}
              onChange={(e) =>
                setCaptainData({
                  ...captainData,
                  fullname: {
                    ...captainData.fullname,
                    lastname: e.target.value,
                  },
                })
              }
              // required
              placeholder="Last Name"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"
            />
          </div>
          <h3 className="text-lg font-medium mb-2">
            What's our captain's email?
          </h3>
          <input
            type="email"
            name="email"
            value={captainData.email}
            // onChange={(e) => handleOnChange(e)}
            onChange={(e) =>
              setCaptainData({ ...captainData, email: e.target.value })
            }
            required
            placeholder="email@example.com"
            className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            name="password"
            value={captainData.password}
            // onChange={(e) => handleOnChange(e)}
            onChange={(e) =>
              setCaptainData({ ...captainData, password: e.target.value })
            }
            type="password"
            required
            placeholder="password"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
          />
          <h3 className="text-lg font-medium mb-2">Enter Vehicle Details</h3>
          <div className="flex gap-3 mb-4 justify-center w-full">
            <input
              type="text"
              name="plate"
              value={captainData.vehicle.plate}
              // onChange={(e) => handleOnChange(e)}
              onChange={(e) =>
                setCaptainData({
                  ...captainData,
                  vehicle: {
                    ...captainData.vehicle,
                    plate: e.target.value,
                  },
                })
              }
              required
              placeholder="Vehicle No."
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-base placeholder:text-sm"
            />
            <input
              type="text"
              name="color"
              value={captainData.vehicle.color}
              // onChange={(e) => handleOnChange(e)}
              onChange={(e) =>
                setCaptainData({
                  ...captainData,
                  vehicle: {
                    ...captainData.vehicle,
                    color: e.target.value,
                  },
                })
              }
              // required
              placeholder="Vehicle Color"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"
            />
          </div>
          <div className="flex gap-3 mb-4 justify-center w-full">
            <input
              type="number"
              name="capacity"
              value={captainData.vehicle.capacity}
              // onChange={(e) => handleOnChange(e)}
              onChange={(e) =>
                setCaptainData({
                  ...captainData,
                  vehicle: {
                    ...captainData.vehicle,
                    capacity: e.target.value,
                  },
                })
              }
              required
              placeholder="Vehicle Capicity"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-base placeholder:text-sm"
            />
            <select
              value={captainData.vehicle.vehicleType}
              name="vehicleType"
              required
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"
              onChange={(e) =>
                setCaptainData({
                  ...captainData,
                  vehicle: {
                    ...captainData.vehicle,
                    vehicleType: e.target.value,
                  },
                })
              }
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="bike">Bike</option>
            </select>
          </div>
          <button className="bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base">
            Create an Account
          </button>
          <p className="text-center">
            Already have an account?
            <Link to="/captainlogin" className="text-blue-600  ">
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

export default CaptainRegister;
