import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Forms.css";
import { AuthContext } from "../Routes/AuthContext";

const Login = () => {
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const { token, setToken } = useContext(AuthContext);

  const handleSubmit = async () => {
    try {
      if (!otp) {
        const response = await axios.post(
          "https://kv-varlu.vercel.app/api/v1/login",
          {
            mobileNumber: number,
          }
        );
        const data = response.data;
        setOtp(data.otp);
        alert("Successfully OTP - " + data.otp);
      } else {
        const response = await axios.post(
          "https://kv-varlu.vercel.app/api/v1/verify/login",
          {
            mobileNumber: number,
            otp: otp,
          }
        );
        const data = response.data;
        localStorage.setItem("token", data.token);
        setToken(data.token);
        alert("User Login successfully!");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <div className="bg">
        <div className="formCSS">
          <h1 className="text-center text-white">Login Form</h1>
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

export default Login;
