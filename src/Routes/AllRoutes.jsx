import React from "react";
import Home from "../Pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Slot from "../Pages/Slot";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/slot" element={<Slot />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
