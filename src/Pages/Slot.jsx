import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Slot.css";

const Slot = () => {
  const [name, setName] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [price, setPrice] = useState();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const payload = {
      name,
      serviceType,
      price,
    };

    try {
      const response = await axios.post(
        "https://paymentcarservice.onrender.com/postDetails",
        payload
      );
      const data = response.data;
      console.log(data.msg);
      alert(data.msg);
      navigate("/payment");
    } catch (err) {
      console.log(err);
      console.log("Failed To Send The Details");
    }
  };

  return (
    <>
      <div className="headSection">
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/a6b0/6f12/3cac62d0f253957fb113cf84d865ae99?Expires=1698624000&Signature=CzxAcn5G-4sOuHWNl0r~ckYG58qr9I0GnmpQq07qEc9du5VuF3erfHbgshVc1crvUypgWmORMwN-9wq5WA-GH34gqbvVcPpWHsbSTvEdiSZJpLPksmKhMOgLx7ZTipSVAHQpmry8~5QKnP~NwZLLJ0MKLXDvOPEZj6Zj7sHOLXQZHnhFBVEQtWAd3y-iiH3nI0UOqYu9Ai6sd~2ag8Jwwnk1n0nyAUIxqw6fmLorfl3pDRh4VTaiGbP77mTpkRceJShw6RjtrZc8uP5-tG4FxIGizWgVzzNfbKvqNSJQDVHkQbO8p4pMkktkUwQ3c79yz6g7bGlZSlJw4Z52b7nCiA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>
        <p>CAR SERVICE</p>
      </div>

      <div className="slot">
        <div>
          <img
            src="https://gokleencar.com/wp-content/uploads/2021/10/gokleen-blog-5-1.png"
            alt=""
          />
        </div>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Service Type"
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Money"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default Slot;
