import React from "react";

const Head = () => {
  return (
    <>
      <div className="col-md-8 right_section text-white">
        <h1>Experience The Best Car Services In Hyderabad</h1>
        <p>We provide Our Services in over 100+ Major Cities also.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
          egestas ligula. Nulla facilisi. Phasellus faucibus ligula id mauris
          varius, eget faucibus lorem fringilla. Vivamus ut felis porta, luctus
          libero eget, feugiat velit. Sed aliquet leo et ex sodales
        </p>
        <div className="right_bottom">
          <div>
            <p>
              <i class="fa-solid fa-star"></i>
            </p>
            <div>
              <p>4.7</p>
              <p>Based on 100000+ Reviews</p>
            </div>
          </div>
          <div>
            <p>
              <i class="fa-solid fa-users"></i>
            </p>
            <div>
              <p>2,50,000</p>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 left_section">
        <div>
          <h1>Book your Car Service Now !</h1>
          <p>Get instant quotes for your car service</p>
          <div>
            <p>Rating</p>
            <p>
              <i class="fa-solid fa-star"></i>
            </p>
            <p>4.7 / 5</p>
          </div>
          <div>
            <select>
              <option value="">Select your Car</option>
            </select>
            <input type="text" placeholder="Enter your Mobile Number" />
          </div>
          <button>Check Prices For Free</button>
        </div>
      </div>
    </>
  );
};

export default Head;
