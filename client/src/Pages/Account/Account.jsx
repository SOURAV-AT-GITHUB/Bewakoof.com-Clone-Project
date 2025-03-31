import { NavLink, Outlet, useLocation } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import overviewIcon from "/Account/overview.svg";
import myordersIcon from "/Account/myorders.svg";
import mypaymentsIcon from "/Account/mypayments.svg";
import mywalletIcon from "/Account/mywallet.svg";
import myaddressesIcon from "/Account/myaddresses.svg";
import myprofileIcon from "/Account/myprofile.svg";
import logoutIcon from '/Account/logout.svg'
export default function Account() {
  const isWidth1024 = useMediaQuery("(min-width:1024px");
  const location = useLocation();
  //   console.log(location.pathname )
  const leftItems = [
    {
      text: "Overview",
      icon: overviewIcon,
      href: "/myaccount/",
    },
    {
      text: "My Orders",
      icon: myordersIcon,
      href: "/myaccount/orders",
    },
    {
      text: "My Payments",
      icon: mypaymentsIcon,
      href: "/myaccount/payments",
    },
    {
      text: "My Wallet",
      icon: mywalletIcon,
      href: "/myaccount/wallet",
    },
    {
      text: "My Addresses",
      icon: myaddressesIcon,
      href: "/myaccount/addresses",
    },
    {
      text: "My Profile",
      icon: myprofileIcon,
      href: "/myaccount/profile",
    },
  ];
  return (
    <main className="flex gap-10 px-10 py-5">
      <div className="flex flex-col gap-6 text-lg w-2/8 h-fit p-2 border border-slate-400 rounded-md">
        {leftItems.map((item, index) => (
          <NavLink className="w-full" to={item.href} key={index}>
            <div
              className={`flex gap-2 p-2 border-b ${
                item.href == location.pathname
                  ? "border-blue-500 text-blue-500"
                  : "border-slate-500 text-black"
              }`}
            >
              <img src={item.icon} alt="" />
              <p>{item.text}</p>
            </div>
          </NavLink>
        ))}
        <div
              className={`flex gap-2 p-2 text-red-400`}
            >
              <img src={logoutIcon} alt="" />
              <p>Logout</p>
            </div>
      </div>
      <div className="w-6/8">
        <Outlet />
      </div>
    </main>
  );
}
