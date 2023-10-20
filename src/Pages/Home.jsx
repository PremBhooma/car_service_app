import React from "react";
import "./Home.css";
import Navbar from "../Components/Navbar";
import Head from "../Components/Head";
import Services from "../Components/Services";
import Customs from "../Components/Customs";
import Workshop from "../Components/Workshop";
import ServiceWork from "../Components/ServiceWork";
import Comments from "../Components/Comments";
import Footer from "../Components/Footer";

var bgColors = { Default: "#fff" };

const Home = () => {
  return (
    <>
      <div className="home_section">
        <div>
          <Navbar />
        </div>

        <div className="container">
          <div className="row">
            <Head />
          </div>
        </div>
      </div>
      <div className="options_section">
        <p>
          <a href="#">Our Services</a>
        </p>
        <p>
          <a href="#">Curated Custom Service</a>
        </p>
        <p>
          <a href="#">How Car Service Works?</a>
        </p>
        <p>
          <a href="#">Rating & Reviews</a>
        </p>
        <p>
          <a href="#">Price List</a>
        </p>
      </div>

      <div className="services_section">
        <div>
          <p>Car Services Available In Hyderabad</p>
          <p>
            Get hassle-free and professional car service, car repair, wheel care
            services, cashless insurance claim and much more in Hyderabad.
          </p>
        </div>
        <div>
          <Services />
        </div>
      </div>

      <div className="blocks_sections">
        <div>
          <img src="https://i.postimg.cc/cCbNZTdG/poster1.png" alt="poster1" />
        </div>
        <div>
          <img src="https://i.postimg.cc/cLfP5dtS/Poster2.png" alt="poster2" />
        </div>
        <div>
          <img src="https://i.postimg.cc/R0Ry4GTp/poster3.png" alt="poster3" />
        </div>
      </div>

      <div className="curated_section">
        <div>
          <p>Curated Custom Services</p>
        </div>
        <div className="bg1">
          <Customs />
        </div>
      </div>

      <div className="workshop_section">
        <p>Choose the workshop Near You</p>
        <div>
          <Workshop />
        </div>
      </div>

      <div className="service_work">
        <p>How Car Service Works ?</p>
        <div>
          <ServiceWork />
        </div>
      </div>

      <div className="comment_section">
        <p>What Car Owners in Hyderabad Say</p>
        <div>
          <Comments />
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>

      <div className="endFooter">
        <div className="endfoot">
          <div>
            <p>F-212, DLF NEW TOWN HEIGHTS,</p>
            <p>SECTOR 91, Garhi Harsaru, Gurugram, Haryana, 122505</p>
          </div>
          <div>
            <p>
              <span>
                <i class="fa-solid fa-envelope"></i>
              </span>{" "}
              Email
            </p>
            <p>
              <span>
                <i class="fa-solid fa-phone"></i>
              </span>{" "}
              Phone Number
            </p>
            <p>
              <span>
                <i class="fa-solid fa-calendar-days"></i>
              </span>{" "}
              Working Days
            </p>
            <p>
              <span>
                <i class="fa-solid fa-clock"></i>
              </span>{" "}
              Working Hours
            </p>
          </div>
          <div>
            <p>Info@Carservice.in</p>
            <p>9388893888</p>
            <p>Monday - Sunday</p>
            <p>7:00AM - 9:00PM(IST)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
