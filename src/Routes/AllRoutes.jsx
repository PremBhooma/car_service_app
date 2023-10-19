import React from "react";
import Home from "../Pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Slot from "../Pages/Slot";
import Payment from "../Components/Payment";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/slot" element={<Slot />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
