import { Link } from "react-router-dom";

const ConfirmRidePopUpPanel = ({
  setRidePopUpPanel,
  setConfirmRidePopUpPanel,
}) => {
  return (
    <div>
      <h5
        onClick={() => {
          setRidePopUpPanel(true);
          setConfirmRidePopUpPanel(false);
        }}
        className=" p-1 text-center absolute w-[93%]  text-2xl top-0"
      >
        <i className=" text-gray-400 text-3xl ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="text-xl text-center  font-bold mb-2">
        Cofirm this ride to start
      </h2>
      <div className="flex  mt-4 items-center justify-between">
        <div className="flex items-center  gap-3">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://www.vice.com/wp-content/uploads/sites/2/2017/09/1505214697354-nina.jpeg"
            alt="profile photo"
          />
          <h2>Heavy Driver</h2>
        </div>
        <h5>2.2 KM</h5>
      </div>

      <div className="flex  flex-col justify-between items-center ">
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

        <Link
          to="/captain/riding"
          className="w-full mt-1 text-center bg-green-600  text-lg font-semibold px-2 py-2 rounded-lg "
        >
          Pick Up
        </Link>
        <button
          onClick={() => {
            setRidePopUpPanel(false), setConfirmRidePopUpPanel(false);
          }}
          className="w-full mt-1  bg-red-600 text-white text-lg font-semibold px-2 py-2 rounded-lg "
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmRidePopUpPanel;
