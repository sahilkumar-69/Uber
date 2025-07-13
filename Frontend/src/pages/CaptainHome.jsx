import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUpPanel from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
  const ridePopUpPanelRef = useRef(null);
  const ConfirmRidePopUpPanelRef = useRef(null);

  useGSAP(() => {
    if (ridePopUpPanel) {
      gsap.to(ridePopUpPanelRef.current, {
        translateY: "0",
      });
    } else {
      gsap.to(ridePopUpPanelRef.current, {
        translateY: "100%",
      });
    }
  }, [ridePopUpPanel]);

  useGSAP(() => {
    if (confirmRidePopUpPanel) {
      gsap.to(ConfirmRidePopUpPanelRef.current, {
        translateY: "0",
      });
    } else {
      gsap.to(ConfirmRidePopUpPanelRef.current, {
        translateY: "100%",
      });
    }
  }, [confirmRidePopUpPanel]);

  return (
    <div className="h-screen">
      <div className="w-screen top-0 fixed flex justify-between p-2 ">
        <img
          className="w-16"
          src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png"
          alt=""
        />
        <Link
          className="  bg-white h-10 w-10 flex justify-center   items-center rounded-full  "
          to="/home"
        >
          <i className="text-lg font-medium ri-logout-box-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6  rounded-md ">
        <CaptainDetails setRidePopUpPanel={setRidePopUpPanel} />
      </div>
      <div
        ref={ridePopUpPanelRef}
        className="fixed w-full z-10 bottom-0  translate-y-full bg-white px-3 pb-6 pt-10"
      >
        <RidePopUp
          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
          setRidePopUpPanel={setRidePopUpPanel}
        />
      </div>
      <div
        ref={ConfirmRidePopUpPanelRef}
        className="fixed w-full h-screen z-10 bottom-0  translate-y-full bg-white px-3 pb-6 pt-10"
      >
        <ConfirmRidePopUpPanel
          setRidePopUpPanel={setRidePopUpPanel}

          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
