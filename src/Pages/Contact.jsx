import React from "react";
import ComponentsNav from "../Components/ComponentsNav";
import Footer from "../Components/Footer";
import EndFooter from "../Components/EndFooter";

import "./Contact.css";

const Contact = () => {
  return (
    <>
      <ComponentsNav />

      <main className="contact_section">
        <section>
          <div className="title">
            <p>Contact us</p>
          </div>

          <div className="contact_info">
            <div>
              <p>Need any Assistance? Leave Us a Message</p>
              <textarea
                cols="30"
                rows="10"
                placeholder="Write your Message Here..............."
              ></textarea>
            </div>
            <div>
              <p>More Information</p>
              <div>
                <p>
                  <span>
                    <i class="fa-solid fa-envelope"></i>
                  </span>
                  &nbsp;&nbsp;&nbsp; info@carservice.in
                </p>
                <p>
                  <span>
                    <i class="fa-solid fa-phone-volume"></i>
                  </span>
                  &nbsp;&nbsp;&nbsp; 9388893888
                </p>
                <p>
                  <span>
                    <i class="fa-solid fa-calendar-days"></i>
                  </span>
                  &nbsp;&nbsp;&nbsp; Monday - Saturday
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="title">
              <p>Our Office Address</p>
            </div>
            <div className="ofc_location">
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/c7ec/c1eb/d992cc270a3bdd31fe374740d4609ccf?Expires=1698624000&Signature=PN2rxD31oAGfos6n80~JwMYWLd9eaEbEM3uRG-7-BhHQY16xjRJQ4opcHZpHXDEExN3Wdjfxl~QuxmdUvg88jF15m7X7YmIBmjCb8TfYDXpJYcvVaT9V2Xh5fg2Fz6y9YhG-7sqnffh7tFvZcWW4myOyt7xJ0D7-pWZes964VfL12EpdtAY-8hNBwpXAyvcTf4L7CamoD8rk1n6j2mdeBSv41x-VEyRN310qtrt6gLkvWmybYsj1hFvmDho8rH6c47w2LaJM8-JsFWmUh5C27kVPdkxQnt6WyeQLeQFrg~IfuL2l~PsAF62lOb60gZjgnhEZTfY6l93Q7RF4J851dQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </div>
              <div>
                <p>
                  <span>
                    <i class="fa-solid fa-location-dot"></i>
                  </span>
                  &nbsp;&nbsp;&nbsp;DLF STREET, NEW AVENUE HYDERABAD, INDIA
                </p>
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/e331/acf5/170bf290135d7a78cadfb00f4603eeff?Expires=1698624000&Signature=DnwlFeOfjpKs9n8Rd9AKbxy23ANN~57Wxoc8zg0OqUPf3Te1wy~RjR77kKnBuz-g5YCE~vdnIvasWeOlgS8jDlLfCPRrpD4pWt11a1ZXV3ZLP~CfBdPiVOibc8SXE~h9PUSgFXJmqrtQc8ZAWyAYdSRwznpi88RWiiSZmms3lO3nOurdr0DKcDC23mF5ayq87mb7dOKjBYsSVSQIA4gFBrEpGYxebdhbKHccRBDbnc902XLHhPkkA3-JkE3SoRC7PgQcD--9tHCTVm~SfcfaSUgLYZLTjpW8IzcXkMtAciiYBa6ONHDu1aPHss0O1MyughCeYTuk7B-MlHLYTe2Fyw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                  <p>LOCATE US ON GOOGLE MAPS</p>
                </div>
              </div>
            </div>
          </div>
        </section>
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

export default Contact;
