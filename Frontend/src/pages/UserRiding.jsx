import React from "react";
import { Link } from "react-router-dom";

const UserRiding = () => {
  return (
    <div className="h-screen">
      <Link
        className="fixed bg-white h-10 w-10 flex justify-center   items-center rounded-full top-2 right-2 "
        to="/home"
      >
        <i className="text-lg font-medium ri-home-2-line"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://t3.ftcdn.net/jpg/07/28/30/26/360_F_728302620_Xddnf5Cl0K1ACZurd6yByUzHiHMMIoe6.jpg"
          alt=""
        />
      </div>
      <div className="h-1/2 p-3 ">
        <div className="flex w-full my-2 flex-col justify-between items-center ">
          <div
            className="flex justify-between w-full items-center
        "
          >
            <img
              className="w-28 h-28 rounded-full object-cover border-2 border-gray-300 "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReSpBOjCfhP9jupr41nw5q6OPpvdBO8-llEQ&s"
              alt=""
            />
            <div>
              <h2 className="font-semibold -mt-1 flex justify-end">Sahil</h2>
              <h1 className="font-bold -mt-1 flex justify-end text-lg">
                HR 02 K3221
              </h1>
              <p className="text-gray-700 -mt-1 flex justify-end">
                White Audi Q3
              </p>
              <p className="flex -mt-1 justify-end">
                <i className="ri-star-s-fill"></i> 4.8
              </p>
            </div>
          </div>
          <div
            className="w-full flex justify-start 
         "
          >
            <input
              className="bg-gray-200 mt-2 ml-2 w-[50%] h-[50%] focus::border-none  rounded-xl px-3 py-2 "
              type="text"
              placeholder="Send a message..."
            />
            <i className=" -ml-7 mt-4 ri-send-plane-2-fill"></i>
          </div>
          <div className="w-full">
            <div className="flex gap-5 items-center p-3 border-b-2 ">
              <i className="ri-map-pin-range-fill text-lg"></i>

              <div>
                <h3 className=" text-lg font-medium  ">123R/12</h3>
                <p className="text-sm -mt-1 text-gray-600 ">
                  Sector-4 Gurugram,Haryana{" "}
                </p>
              </div>
            </div>
          </div>
          <button className="w-full mt-4  bg-green-600  text-lg font-semibold px-2 py-2 rounded-lg ">
            Make a Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserRiding;
