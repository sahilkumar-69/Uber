import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainRegister from "./pages/CaptainRegister";
import RouteWrapper from "./pages/RouteWrapper";
import UserLogOut from "./pages/UserLogOut";
import CaptainHome from "./pages/CaptainHome";
import CaptainLogOut from "./pages/CaptainLogOut";
import ConfirmRide from "./components/ConfirmRide";
import UserRiding from "./pages/UserRiding";
import CaptainRiding from "./pages/CaptainRiding";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />

        {/* user-routes */}

        <Route
          path="/home"
          element={
            <RouteWrapper>
              <Home />{" "}
            </RouteWrapper>
          }
        />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/riding" element={<UserRiding />} />
        <Route path="/user/logout" element={<UserLogOut />} />

        

        <Route path="/captain/login" element={<CaptainLogin />} />
        <Route path="/captain/riding" element={<CaptainRiding />} />
        <Route path="/captain/home" element={<CaptainHome />} />
        <Route path="/captain/register" element={<CaptainRegister />} />
        <Route path="/captain/logout" element={<CaptainLogOut />} />
        <Route path="/ride" element={<ConfirmRide />} />
      </Routes>
    </div>
  );
};

export default App;
