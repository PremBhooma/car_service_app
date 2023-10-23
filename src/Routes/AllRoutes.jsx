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
import SingleBlog from "../Pages/SingleBlog";
import Checkout from "../Pages/Checkout";
import AddToCart from "../Pages/AddToCart";

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
        <Route path="/singleblog" element={<SingleBlog />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/addtocart" element={<AddToCart />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
