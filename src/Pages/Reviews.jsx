import React from "react";
import Comments from "../Components/Comments";
import ComponentsNav from "../Components/ComponentsNav";
import Footer from "../Components/Footer";
import EndFooter from "../Components/EndFooter";

import "./Home.css";

const Reviews = () => {
  return (
    <>
      <ComponentsNav />
      <div className="comment_section">
        <p style={{ fontFamily: "Poppins", fontSize: "32px" }}>Reviews</p>
        <div>
          <Comments />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>

      <div className="endFooter">
        <EndFooter />
      </div>
    </>
  );
};

export default Reviews;
