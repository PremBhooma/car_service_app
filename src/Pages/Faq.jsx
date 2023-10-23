import React from "react";
import ComponentsNav from "../Components/ComponentsNav";
import Footer from "../Components/Footer";
import EndFooter from "../Components/EndFooter";

import "./Faq.css";
import ComponentFaq from "../Components/ComponentFaq";

const Faq = () => {
  return (
    <>
      <ComponentsNav />

      {/* FAQ Content Component */}
      <ComponentFaq />

      <div className="footer">
        <Footer />
      </div>

      <div className="endFooter">
        <EndFooter />
      </div>
    </>
  );
};

export default Faq;
