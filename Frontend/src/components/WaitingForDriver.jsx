import React from "react";

const WaitingForDriver = () => {
  return (
    <div
      //   ref={lookingForDriversRef}
      className="w-full z-10 bottom-0 bg-white fixed p-3 "
    >
      <h5
        onClick={() => {}}
        className=" opacity-1  text-center text-2xl top-3 right-5"
      >
        <i className="text-gray-400  ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="text-xl text-center  font-bold mb-2">
        Waiting for Drivers
      </h2>

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
          className="w-full flex justify-start  h-20 
         "
        >
          <input
            className="bg-gray-200 mt-2 ml-2 w-[50%] h-[80%] focus::border-none  rounded-xl px-3 py-2 "
            type="text"
            placeholder="Send a message..."
          />
          {/* <i className=" -ml-10 ri-send-plane-2-fill"></i> */}
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
      </div>
    </div>
  );
};

export default WaitingForDriver;
