import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanelPage from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDrivers from "../components/LookingForDrivers";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [openLocationPanel, setOpenLocationPanel] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRide, setConfirmRide] = useState(false);
  const [LookingForDriver, setLookingForDriver] = useState(false);
  const panelRef = useRef();
  const vehiclePanelRef = useRef();
  const lookingForDriversRef = useRef();
  const confirmRideRef = useRef();
  const confirmRideArrowRef = useRef();
  const vehicleArrowRef = useRef();
  const arrowRef = useRef();

  useGSAP(() => {
    if (openLocationPanel) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: 20,
      });
      gsap.to(arrowRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0",
        padding: 0,
      });
      gsap.to(arrowRef.current, {
        opacity: 0,
      });
    }
  }, [openLocationPanel]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        translateY: "0",
      });
      gsap.to(vehicleArrowRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        translateY: "100%",
      });
      gsap.to(vehicleArrowRef.current, {
        opacity: 0,
      });
    }
  }, [vehiclePanel]);

  useGSAP(() => {
    if (confirmRide) {
      gsap.to(confirmRideRef.current, {
        translateY: "0",
      });
      gsap.to(vehiclePanelRef.current, {
        translateY: "100%",
      });
    } else {
      gsap.to(confirmRideRef.current, {
        translateY: "100%",
      });
      // gsap.to(vehiclePanelRef.current, {
      //   translateY: "100%",
      // });
    }
  }, [confirmRide]);

  useGSAP(() => {
    if (LookingForDriver) {
      gsap.to(lookingForDriversRef.current, {
        translateY: "0",
      });
      gsap.to(confirmRideRef.current, {
        translateY: "100%",
      });
    } else {
      gsap.to(lookingForDriversRef.current, {
        translateY: "100%",
      });
      // gsap.to(vehiclePanelRef.current, {
      //   translateY: "100%",
      // });
    }
  }, [LookingForDriver]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen overflow-hidden relative">
      <img
        className="w-16 absolute top-5 left-5"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
        alt=""
      />

      <div
        onClick={() => {
          console.log("close the panel");
          setVehiclePanel(false);
        }}
        className="w-screen h-screen "
      >
        <img
          className="w-full h-full object-cover"
          src="https://t3.ftcdn.net/jpg/07/28/30/26/360_F_728302620_Xddnf5Cl0K1ACZurd6yByUzHiHMMIoe6.jpg"
          alt=""
        />
      </div>

      <div className=" flex flex-col justify-end absolute  h-screen top-0  w-full">
        <div className="h-[30%] bg-white relative p-5 ">
          <h5
            ref={arrowRef}
            onClick={() => setOpenLocationPanel(false)}
            className=" opacity-0 absolute text-2xl top-6 right-5"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-3xl font-semibold">Find a Trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="line h-16 absolute top-[45%] left-10 bg-gray-700 w-1 rounded-full  "></div>
            <input
              value={pickUp}
              onClick={() => {
                setOpenLocationPanel(true);
              }}
              onChange={(e) => setPickUp(e.target.value)}
              className="bg-[#eee] px-8 text-base py-2 rounded-lg w-full mt-5"
              type="text"
              name=""
              placeholder="Enter your Pickup location"
              id=""
            />
            <input
              value={destination}
              onClick={() => {
                setOpenLocationPanel(true);
              }}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] text-base px-8 py-2 rounded-lg w-full mt-5 "
              type="text"
              placeholder="Enter your destination"
              name=""
              id=""
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white h-0">
          <LocationSearchPanel
            setVehiclePanel={setVehiclePanel}
            setOpenLocationPanel={setOpenLocationPanel}
            setDestination={setDestination}
          />
        </div>
      </div>
      <div>
        <VehiclePanelPage
          setConfirmRide={setConfirmRide}
          vehicleArrowRef={vehicleArrowRef}
          vehiclePanelRef={vehiclePanelRef}
          setVehiclePanel={setVehiclePanel}
        />
      </div>
      <div>
        <ConfirmRide
          confirmRideArrowRef={confirmRideArrowRef}
          setConfirmRide={setConfirmRide}
          confirmRideRef={confirmRideRef}
          setVehiclePanel={setVehiclePanel}
          setLookingForDriver={setLookingForDriver}
        />
      </div>
      <div>
        <LookingForDrivers
          // confirmRideArrowRef={confirmRideArrowRef}
          // setConfirmRide={setConfirmRide}
          confirmRideRef={confirmRideRef}
          lookingForDriversRef={lookingForDriversRef}
          setVehiclePanel={setVehiclePanel}
        />
      </div>
      <div>
        <WaitingForDriver
          // confirmRideArrowRef={confirmRideArrowRef}
          // setConfirmRide={setConfirmRide}
          confirmRideRef={confirmRideRef}
          lookingForDriversRef={lookingForDriversRef}
          setVehiclePanel={setVehiclePanel}
        />
      </div>
    </div>
  );
};

export default Home;
