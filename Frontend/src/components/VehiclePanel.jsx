const VehiclePanel = ({
  vehiclePanelRef,
  vehicleArrowRef,
  setVehiclePanel,
  setConfirmRide,
}) => {
  return (
    <div
      ref={vehiclePanelRef}
      className="w-full translate-y-full z-10 bottom-0 bg-white fixed p-3 "
    >
      <h2 className="text-lg font-semibold mb-2">Choose a vehicle</h2>
      <h5
        ref={vehicleArrowRef}
        onClick={() => setVehiclePanel(false)}
        className=" opacity-0 absolute text-2xl top-3 right-5"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <div
        onClick={() => {
          setConfirmRide(true);
          setVehiclePanel(false);
        }}
        className="flex items-center border-2 active:border-black rounded-xl p-3  mb-2  justify-between w-full  "
      >
        <img
          className="w-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350473/assets/97/e2a99c-c349-484f-b6b0-3cea1a8331b5/original/UberBlack.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium ">
            UberGo{" "}
            <span className=" font-medium ml-1">
              <i className="ri-user-fill"></i>4
            </span>
          </h4>
          <div className="font-medium text-sm">2min away • 13:23</div>
          <p className="text-gray-500 text-sm font-normal">
            Affordable, comfort rides
          </p>
        </div>
        <div className="font-semibold">₹412.23</div>
      </div>
      <div
        onClick={() => {
          setConfirmRide(true);
          setVehiclePanel(false);
        }}
        className="flex items-center border-2 active:border-black rounded-xl p-3   mb-2  justify-between w-full  "
      >
        <img
          className="w-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium ">
            Moto{" "}
            <span className=" font-medium ml-1">
              <i className="ri-user-fill"></i>1
            </span>
          </h4>
          <div className="font-medium text-sm">6min away • 13:27</div>
          <p className="text-gray-500 text-sm font-normal">
            Affordable, motorcycle rides
          </p>
        </div>
        <div className="font-semibold">₹82.23</div>
      </div>
      <div
        onClick={() => {
          setConfirmRide(true);
          setVehiclePanel(false);
        }}
        className="flex items-center border-2 active:border-black rounded-xl p-3   mb-2  justify-between w-full  "
      >
        <img
          className="w-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_221,w_221/v1698434407/assets/a6/148e15-7af1-48fb-a4c8-d6babd6e9659/original/UberComfort-Premium.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium ">
            Premier{" "}
            <span className=" font-medium ml-1">
              <i className="ri-user-fill"></i>4
            </span>
          </h4>
          <div className="font-medium text-sm">4min away • 13:25</div>
          <p className="text-gray-500 text-sm font-normal">
            Comfort sedans, top-quality drivers
          </p>
        </div>
        <div className="font-semibold">₹652.23</div>
      </div>
      <div
        onClick={() => {
          setConfirmRide(true);
          setVehiclePanel(false);
        }}
        className="flex items-center border-2 active:border-black rounded-xl p-3   mb-2  justify-between w-full  "
      >
        <img
          className="w-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium ">
            Uberauto{" "}
            <span className=" font-medium ml-1">
              <i className="ri-user-fill"></i>3
            </span>
          </h4>
          <div className="font-medium text-sm">3min away • 13:24</div>
        </div>
        <div className="font-semibold">₹252.23</div>
      </div>
    </div>
  );
};

export default VehiclePanel;
