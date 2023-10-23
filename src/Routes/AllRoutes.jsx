import React from "react";
import Home from "../Pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Slot from "../Pages/Slot";
// import Payment from "../Components/Payment";
import Blog from "../Pages/Blog";
import Faq from "../Pages/Faq";
import Contact from "../Pages/Contact";
import Terms from "../Pages/Terms";
import Privacy from "../Pages/Privacy";
import Offers from "../Pages/Offers";
import Reviews from "../Pages/Reviews";
import Category from "../Pages/Category";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/slot" element={<Slot />} />
        {/* <Route path="/payment" element={<Payment />} /> */}
        {/* <Route path="/spares" element={<Payment />} /> */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
