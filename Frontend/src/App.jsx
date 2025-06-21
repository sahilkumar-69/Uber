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
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route
          path="/home"
          element={
            <RouteWrapper>
              <Home />{" "}
            </RouteWrapper>
          }
        />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/user/logout" element={<UserLogOut />} />
        <Route path="/userregister" element={<UserRegister />} />
        <Route path="/captainlogin" element={<CaptainLogin />} />
        <Route path="/captain-home" element={<CaptainHome />} />
        <Route path="/captainregister" element={<CaptainRegister />} />
        <Route path="/captain/logout" element={<CaptainLogOut />} />
        <Route path="/ride" element={<ConfirmRide />} />
      </Routes>
    </div>
  );
};

export default App;
