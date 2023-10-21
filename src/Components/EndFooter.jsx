import React from "react";
import "../Pages/Home.css";

const EndFooter = () => {
  return (
    <>
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
    </>
  );
};

export default EndFooter;
