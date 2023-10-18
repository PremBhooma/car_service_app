import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Forms.css";

const Signup = () => {
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      if (!otp) {
        const response = await axios.post(
          "https://kv-varlu.vercel.app/api/v1/register",
          {
            mobileNumber: number,
          }
        );
        const data = response.data;
        setOtp(data.user.otp);
        alert("Successfully OTP - " + data.user.otp);
      } else {
        const response = await axios.post(
          "https://kv-varlu.vercel.app/api/v1/verify/otp",
          {
            mobileNumber: number,
            otp: otp,
          }
        );
        const data = response.data;
        alert("User successfully registered!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      console.log("Failed to SignUp");
    }
  };

  return (
    <>
      <div className="bg">
        <div className="formCSS">
          <h1 className="text-center text-white">SignUp Form</h1>
          <input
            type="text"
            placeholder="Enter Your Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          {otp ? (
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          ) : (
            ""
          )}
          <button onClick={handleSubmit}>
            {otp ? "Verify OTP" : "Send OTP"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
