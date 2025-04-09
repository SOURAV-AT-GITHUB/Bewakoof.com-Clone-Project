import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_EMAIL } from "../../Store/actionTypes";
import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import { useNavigate } from "react-router-dom";
import {
  OPEN_SNACKNAR,
  LOGIN,
  START_LOADING,
  STOP_LOADING,
} from "../../Store/actionTypes";
export default function Login() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const { email, token } = useSelector((store) => store.auth);
  const isLoading = useSelector((store) => store.isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    document.getElementById("otp-input-0")?.focus();
  }, [isOtpSent]);
  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^\d{0,1}$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };
  const handleReset = () => {
    setIsOtpSent(false);
    setOtp(["", "", "", ""]);
  };
  async function handleSendOtp(event) {
    event.preventDefault();
    dispatch({ type: START_LOADING });
    try {
      const response = await axios.post(`${BACKEND_URL}/user/send-otp`, {
        email,
      });
      if (!response.data.isRegistered) {
        navigate("/signup");
      } else {
        dispatch({
          type: OPEN_SNACKNAR,
          payload: {
            open: true,
            message: `OTP sent to ${email}`,
            severity: "success",
          },
        });
        setIsOtpSent(true);
      }
    } catch (error) {
      dispatch({
        type: OPEN_SNACKNAR,
        payload: {
          open: true,
          message: error.response?.data.message || error.message,
          severity: "error",
        },
      });
    } finally {
      dispatch({ type: STOP_LOADING });
    }
  }
  async function handleLogin(event) {
    event.preventDefault();
    dispatch({ type: START_LOADING });
    try {
      const response = await axios.post(`${BACKEND_URL}/user/login`, {
        email,
        otp: Number(otp.join("")),
      });
      dispatch({ type: LOGIN, payload: response.data.data });
      dispatch({
        type: OPEN_SNACKNAR,
        payload: {
          open: true,
          message: response.data.message || "Login Success",
          severity: "success",
        },
      });
    } catch (error) {
      dispatch({
        type: OPEN_SNACKNAR,
        payload: {
          open: true,
          message: error.response?.data.message || error.message,
          severity: "error",
        },
      });
    } finally {
      dispatch({ type: STOP_LOADING });
    }
  }
  useEffect(() => {
    if (token) navigate("/");
  }, [token, navigate]);
  return (
    <main className="flex gap-4 mt-6">
      <img
        src="https://images.bewakoof.com/web/rm-login-desk-v2.jpg"
        alt="login banner"
        loading="lazy"
        className="w-2/5 h-screen object-cover object-top"
      />
      <div className="flex flex-col gap-6 w-2/5 m-auto">
        {!isOtpSent ? (
          <div className="flex flex-col  gap-2">
            <h4 className="text-xl font-medium">Login / Signup</h4>
            <p>Join us now to be a part of Bewakoof family.</p>
          </div>
        ) : (
          <div className="flex flex-col  gap-2">
            <h4 className="text-xl font-medium">OTP Verification</h4>
            <p>We have sent erification code to</p>
            <div className="flex items-center gap-1 font-medium">
              <p>{email}</p>
              <button
                onClick={handleReset}
                className="text-blue-500 font-medium cursor-pointer"
              >
                Edit
              </button>
            </div>
          </div>
        )}
        <form
          onSubmit={isOtpSent ? handleLogin : handleSendOtp}
          className="flex flex-col  gap-4 text-lg"
        >
          {!isOtpSent ? (
            <div className="border border-slate-500 flex flex-col items-center rounded-md">
              <input
                type="email"
                value={email}
                onChange={(e) =>
                  dispatch({ type: ADD_EMAIL, payload: e.target.value })
                }
                placeholder="Enter Email ID"
                className="w-full p-3 outline-none"
                required
              />
            </div>
          ) : (
            <div className="flex gap-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  maxLength="1"
                  className="w-[40px] h-[60px] text-xl text-center border border-px border-slate-400"
                />
              ))}
            </div>
          )}
          <button
            type="submit"
            className="bg-yellow-300 text-white w-full p-3 rounded-md disabled:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={
              (!isOtpSent && !email) ||
              (isOtpSent && otp.some((val) => val === "")) ||
              isLoading
            }
          >
            Continue
          </button>
        </form>
        <div className="w-full relative ">
          <p className="bg-white p-2  w-fit m-auto">OR</p>
          <div className="absolute w-full h-px bg-black top-2/4 -translate-y-2/4 z-[-1]"></div>
        </div>
        <div className="flex gap-6 w-full">
          <button
            onClick={() => alert("Feature not available")}
            className="cursor-pointer flex items-center justify-center gap-2 w-2/4 p-2 border border-px border-slate-400"
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/013/948/549/non_2x/google-logo-on-transparent-white-background-free-vector.jpg"
              alt=""
              className="w-[20px]"
            />
            <p>Google</p>
          </button>
          <button
            onClick={() => alert("Feature not available")}
            className="cursor-pointer flex items-center justify-center gap-2 w-2/4 p-2 border border-px border-slate-400"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl0DmGuWkpN3Keq5IImsEwOC6AjpZRTljRhA&s"
              alt=""
              className="w-[20px]"
            />
            <p>Facebook</p>
          </button>
        </div>
        <div className="flex items-center justify-center gap-2">
          <input type="checkbox" className="h-[20px] w-[20px]" />
          <p>Fetch my address for blazing fast checkout</p>
        </div>
        <p className="text-center">
          By creating an account or logging in, you agree with Bewakoof's{" "}
          <span className="text-blue-500 font-medium">T&C</span>
          and <span className="text-blue-500 font-medium">
            Privacy Policy
          </span>{" "}
          and Shiprocket's{" "}
          <span className="text-blue-500 font-medium">T&C</span> and{" "}
          <span className="text-blue-500 font-medium">Privacy Policy</span>
        </p>
      </div>
    </main>
  );
}
