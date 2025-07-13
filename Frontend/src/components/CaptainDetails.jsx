import React from "react";

const CaptainDetails = () => {
  return (
    <div>
      {" "}
      <div className="flex mb-4 justify-between items-center">
        <div className="flex justify-start items-center gap-3">
          <img
            className="w-10 h-10 rounded-full object-cover "
            src="https://mrwallpaper.com/images/hd/beautiful-woman-with-random-people-in-background-roumbpovzh5jzxj5.jpg"
            alt=""
          />
          <h4 className="text-lg font-medium">Name</h4>
        </div>
        <div>
          <h4 className="text-lg font-semibold ">₹432.42</h4>
          <p className="text-sm font-medium  text-gray-600"> Earned</p>
        </div>
      </div>
      <div className=" bg-gray-200 rounded-xl p-2 flex justify-center gap-5 items-start">
        <div className="text-center">
          <i className=" text-3xl font-thin ri-timer-2-line"></i>
          <h5 className="text-lg font-medium">23.2</h5>
          <p className="text-sm text-gray-600  ">Hours Online</p>
        </div>
        <div className="text-center">
          <i className=" text-3xl font-thin ri-speed-up-line"></i>
          <h5 className="text-lg font-medium">23.2</h5>
          <p className="text-sm text-gray-600  ">Hours Online</p>
        </div>
        <div className="text-center">
          <i className=" text-3xl font-thin ri-booklet-line"></i>
          <h5 className="text-lg font-medium">23.2</h5>
          <p className="text-sm text-gray-600  ">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
