const ConfirmRide = ({
  confirmRideRef,
  confirmRideArrowRef,
  setConfirmRide,
  setVehiclePanel,
  setLookingForDriver,
}) => {
  return (
    <div
      ref={confirmRideRef}
      className="w-full translate-y-full z-10 bottom-0 bg-white fixed p-3 "
    >
      <h5
        ref={confirmRideArrowRef}
        onClick={() => {
          setConfirmRide(false), setVehiclePanel(true);
        }}
        className=" opacity-1 text-center  text-2xl top-3 right-5"
      >
        <i className=" text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="text-xl text-center  font-bold mb-2">Confirm your ride</h2>

      <div className="flex  flex-col justify-between items-center ">
        <img
          className="h-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350473/assets/97/e2a99c-c349-484f-b6b0-3cea1a8331b5/original/UberBlack.png"
          alt=""
        />
        <div className="w-full">
          <div className="flex gap-5 items-center p-3 border-b-2 ">
            <i className=" text-lg  ri-map-pin-2-line"></i>

            <div>
              <h3 className=" text-lg font-medium  ">123R/12</h3>
              <p className="text-sm -mt-1 text-gray-600 ">
                Sector-4 Gurugram,Haryana{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-center p-3 border-b-2 ">
            <i className="ri-map-pin-range-fill text-lg"></i>

            <div>
              <h3 className=" text-lg font-medium  ">123R/12</h3>
              <p className="text-sm -mt-1 text-gray-600 ">
                Sector-4 Gurugram,Haryana{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-center p-3 ">
            <i className="ri-cash-line"></i>

            <div>
              <h3 className=" text-lg font-medium  ">₹82</h3>
              <p className="text-sm -mt-1 text-gray">Cash</p>
            </div>
          </div>
        </div>

        {/* <div>price</div> */}
        <button
          onClick={() => {console.log("first");setLookingForDriver(true)}}
          className="w-full mt-4  bg-green-600  text-lg font-semibold px-2 py-2 rounded-lg "
        >
          Confirm Ride
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
