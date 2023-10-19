import React, { useEffect, useState } from "react";
import "../Pages/Slot.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Payment = () => {
  const [data, setData] = useState([]);
  const [change, setChange] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://paymentcarservice.onrender.com/getDetails"
      );
      const data = response.data;
      console.log(data.paymentDetails);
      setData(data.paymentDetails);
    } catch (err) {
      console.log(err);
      console.log("Failed To Get Data");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleOpenRazorpay = (data) => {
    const options = {
      key: "rzp_test_f15B29SZI7GD6h",
      amount: Number(data.amount),
      currency: data.currency,
      name: "CAR SERVICE",
      description: "XYZ",
      order_id: data.id,
      handler: function (response) {
        console.log(response);
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature)

        axios
          .post("https://paymentcarservice.onrender.com/verify", {
            response: response,
          })
          .then((res) => {
            console.log(res);
            setChange(true);
          })
          .catch((err) => {
            console.log(err);
          });
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handlePayment = (amount) => {
    const _data = { amount: amount };
    axios
      .post("https://paymentcarservice.onrender.com/orders", _data)
      .then((res) => {
        console.log(res.data);
        handleOpenRazorpay(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
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

      <div className="welMes">
        <p>Welcome to Payment for your Car Service.</p>
        <p>
          Slot Book offers a convenient and user-friendly platform for booking
          your car service. Our commitment to providing a seamless experience
          extends to the payment process, which is made even more hassle-free
          through our partnership with Razorpay. With a secure and efficient
          payment gateway like Razorpay, you can rest assured that your
          transactions are handled with the utmost professionalism and security.
        </p>
      </div>

      {change ? (
        <div className="succes">
          <img
            src="https://www.beauty-addict.com/wp-content/uploads/2021/02/Payment-success.png"
            alt=""
          />
          <button>
            <Link to={"/"}>Back to Home</Link>
          </button>
        </div>
      ) : (
        <div className="paySlot">
          <div>
            <img
              src="https://gokleencar.com/wp-content/uploads/2021/10/gokleen-blog-5-1.png"
              alt=""
            />
          </div>
          {data?.map((elem) => (
            <div key={elem._id}>
              <p>Customer Name : {elem.name}</p>
              <p>Service Type : {elem.serviceType}</p>
              <p>Price : {elem.price} Rs</p>
              <button onClick={() => handlePayment(elem.price)}>Pay Now</button>
            </div>
          ))}
        </div>
      )}

      <div className="payFoot">
        <div>
          <p>©2023 Car Service, Inc.</p>
        </div>
      </div>
    </>
  );
};

export default Payment;
