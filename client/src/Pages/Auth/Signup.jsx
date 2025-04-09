import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  OPEN_SNACKNAR,
  LOGIN,
  START_LOADING,
  STOP_LOADING,
} from "../../Store/actionTypes";
import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export default function Signup() {
  const { email, token } = useSelector((store) => store.auth);
  const isLoading = useSelector((store) => store.isLoading);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [formData, setFormData] = useState({
    // email,
    name: "",
    mobile: "",
    gender: "male",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  async function handleSingup(event) {
    event.preventDefault();
    dispatch({ type: START_LOADING });
    try {
      const response = await axios.post(`${BACKEND_URL}/user/register`, {
        email,
        ...formData,
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
    }finally{
      dispatch({ type: STOP_LOADING });
    }
  }
  useEffect(() => {
    if (token) return navigate("/");
    if (!email) return navigate("/login");
  }, [email, token, navigate]);
  return (
    <main className="flex gap-4 mt-6">
      <img
        src="https://images.bewakoof.com/web/ik-signup-desktop-v2.jpg"
        alt="login banner"
        loading="lazy"
        className="w-2/5 h-screen object-cover object-top"
      />
      <div className="flex flex-col gap-10 w-2/5 m-auto">
        <div className="flex flex-col  gap-2">
          <h4 className="text-xl font-medium">Just few more details</h4>
          <p>We need few more details to personalize your experience.</p>
        </div>
        <form onSubmit={handleSingup} className="flex flex-col gap-6">
          <div>
            <p className="text-sm text-slate-400">Full Name</p>
            <div className="flex items-center border border-slate-300 rounded-md">
              <input
                type="text"
                placeholder="Ex - Jhon Sharma"
                className="w-full p-3 outline-none"
                maxLength={"75"}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>
          </div>
          <div>
            <p className="text-sm text-slate-400">Email ID</p>
            <div className="border border-slate-300 flex flex-col items-center rounded-md">
              <input
                type="email"
                value={email}
                placeholder="ex: yourmailid@gmail.com"
                className="w-full p-3 outline-none"
                required
                disabled
              />
            </div>
          </div>
          <div>
            <p className="text-sm text-slate-400">Mobile Number</p>
            <div className="flex items-center border border-slate-300 rounded-md">
              <div className="flex items-center gap-2">
                <img
                  src="https://images.bewakoof.com/web/india-flag-round-1639566913.png"
                  alt="indian flag"
                  className="w-[20px]"
                />
                <p>+91</p>
              </div>
              <input
                type="number"
                value={formData.mobile}
                placeholder="Enter Mobile Number"
                className="w-full p-3 outline-none"
                required
                onChange={(e) => {
                  if (e.target.validationMessage.length > 10) return;
                  setFormData((prev) => ({ ...prev, mobile: e.target.value }));
                }}
              />
            </div>
          </div>
          <div>
            <p className="text-sm text-slate-400">Gender</p>
            <div className="flex gap-4 text-center">
              <div
                onClick={() =>
                  setFormData((prev) => ({ ...prev, gender: "male" }))
                }
                className={`cursor-pointer min-w-[150px]  p-2 border border-px border-slate-300 ${
                  formData.gender === "male" && "bg-yellow-100"
                }`}
              >
                Male
              </div>
              <div
                onClick={() =>
                  setFormData((prev) => ({ ...prev, gender: "female" }))
                }
                className={`cursor-pointer min-w-[150px]  p-2 border border-px border-slate-300 ${
                  formData.gender === "female" && "bg-yellow-100"
                }`}
              >
                Female
              </div>
              <div
                onClick={() =>
                  setFormData((prev) => ({ ...prev, gender: "other" }))
                }
                className={`cursor-pointer min-w-[150px]  p-2 border border-px border-slate-300 ${
                  formData.gender === "other" && "bg-yellow-100"
                }`}
              >
                Other
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <p className="text-sm text-slate-400">OTP</p>
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
            <button className="text-blue-500 font-medium cursor-pointer">
              Resend OTP
            </button>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="bg-yellow-300 text-white w-full p-3 rounded-md disabled:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </form>
      </div>
    </main>
  );
}
