import React from "react";
import ComponentsNav from "../Components/ComponentsNav";
import Footer from "../Components/Footer";
import EndFooter from "../Components/EndFooter";

import "./Checkout.css";

const Checkout = () => {
  return (
    <>
      <ComponentsNav />
      <main className="checkout_section">
        <div className="checkout_title">
          <p>Check Out</p>
        </div>
        <div className="checkout_box">
          <div className="checkout-right">
            <p>Select Date & Time</p>
            <div className="D_T">
              <div>
                <p>Mon</p>
                <p>05</p>
              </div>
              <div>
                <p>Tue</p>
                <p>05</p>
              </div>
              <div>
                <p>Wed</p>
                <p>05</p>
              </div>
              <div>
                <p>Thu</p>
                <p>05</p>
              </div>
            </div>
            <p>Pick Time Slot</p>
            <div className="T_S">
              <div>
                <p>02: 00 PM</p>
              </div>
              <div>
                <p>03: 00 PM</p>
              </div>
              <div>
                <p>04: 00 PM</p>
              </div>
              <div>
                <p>05: 00 PM</p>
              </div>
              <div>
                <p>06: 00 PM</p>
              </div>
              <div>
                <p>07: 00 PM</p>
              </div>
            </div>
          </div>
          <div className="checkout-left">
            <p>Cart</p>

            <p>You Can Save INR 399</p>

            <div className="Std_Service">
              <p>Standard Service</p>
              <div>
                <p className="crle">-</p>
                <p>1</p>
                <p className="crle">+</p>
              </div>
            </div>

            <button>APPLY COUPOUN</button>

            <div className="B_D">
              <p>Bill Details</p>
              <div>
                <div>
                  <p>Item Total</p>
                  <p>You Pay</p>
                </div>
                <div>
                  <p>INR 1999</p>
                  <p>INR 1999</p>
                </div>
              </div>
            </div>
            <button>Check Out</button>
          </div>
        </div>
      </main>
      <div className="footer">
        <Footer />
      </div>

      <div className="endFooter">
        <EndFooter />
      </div>
    </>
  );
};

export default Checkout;
