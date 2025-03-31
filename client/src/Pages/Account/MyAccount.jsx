import React from "react";
// import useMediaQuery from "@mui/material/useMediaQuery";
import freeShinngingIcon from "/Account/shipping.svg";
import earlyAccessIcon from "/Account/early-access.svg";
import vipSupportIcon from "/Account/vip-support.svg";
import myOrdersIcon from "/Account/MyAccount/my-orders.svg";
import mypaymentsIcon from "/Account/MyAccount/my-payments.svg";
import myWalletIcon from "/Account/MyAccount/my-wallet.svg";
import myAddressesIcon from "/Account/MyAccount/my-addresses.svg";
import myProfileIcon from "/Account/MyAccount/my-profile.svg";
import helpAndSupportIcon from "/Account/MyAccount/help-support.svg";
import ourStoryIcon from "/Account/MyAccount/our-story.svg";
import fanbookIcon from "/Account/MyAccount/fanbook.svg";
import { NavLink } from "react-router-dom";
export default function MyAccount() {
  const user = {
    name: "Sourav",
    email: "tesgsdfgdfsgdsggt@gmail.com",
    mobile: 9874563210,
  };
  const items = [
    {
      icon: myOrdersIcon,
      title: "My Orders",
      text: "View, Modify And Track Orders",
      href: "/myaccount/orders",
    },
    {
      icon: mypaymentsIcon,
      title: "My Payments",
      text: "View And Modify Payments Methods",
      href:'/myaccount/payments'
    },
    {
      icon: myWalletIcon,
      title: "My Wallet",
      text: "Bewakoof Wallet History And Redeemed Gift Cards",
      href:'/myaccount/wallet'
    },
    {
      icon: myAddressesIcon,
      title: "My Addresses",
      text: "Add Edit or Remove Addresses",
      href:'/myaccount/addresses'
    },
    {
      icon: myProfileIcon,
      title: "My Profile",
      text: "Edit Personal Info And Change Password",
      href:'/myaccount/profile'
    },
    {
      icon: helpAndSupportIcon,
      title: "Help & Support",
      text: "Reach Out To Us",
      href:'/contact-us'
    },
    {
      icon: ourStoryIcon,
      title: "Our Story",
      text: "Reach Out To Us",
      href:'/ourstory'
    },
    {
      icon: fanbookIcon,
      title: "Fanbook",
      text: "Fanbook",
      href:'/fanbook'
    },
  ];
  return (
    <main className="w-full p-8">
      <div className="flex gap-8">
        <div className="my-account-card-1 w-2/4 flex flex-col gap-10 p-4 border border-yellow-400 rounded-lg">
          <div className="flex gap-4">
            <div className="bg-primary flex items-center justify-center h-[100px] w-[100px] rounded-full">
              <p className="text-4xl font-medium">{user.name[0]}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold">{user.name}</p>
              <p>{user.email}</p>
              <p>{user.mobile}</p>
            </div>
          </div>
          <button className="bg-primary w-full text-nowrap p-3 font-medium">
            EDIT PROFILE
          </button>
        </div>

        <div className="myaccount-card-2 w-2/4 flex flex-col items-center justify-between  p-4 border border-yellow-400 rounded-lg">
          <div className="flex flex-col items-center gap-3">
            <p className="font-semibold text-xl">
              Bewakoof Tri<span className="text-[#CFA346]">Be</span>
            </p>
            <p>Upgrade to the premium experience now</p>
            <div className="w-full flex justify-evenly">
              <div className="flex flex-col items-center gap-1 text-sm text-slate-500">
                <img src={freeShinngingIcon} alt="" />
                <p>Free Shipping</p>
              </div>
              <div className="flex flex-col items-center gap-1 text-sm text-slate-500">
                <img src={earlyAccessIcon} alt="" />
                <p>Early Access</p>
              </div>
              <div className="flex flex-col items-center gap-1 text-sm text-slate-500">
                <img src={vipSupportIcon} alt="" />
                <p>VIP Support</p>
              </div>
            </div>
          </div>
          <button className=" bg-primary w-full text-nowrap p-3 font-medium">
            GET TRIBE MEMBERSHIP
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 mt-8 gap-4">
        {items.map((item, index) => (
          <NavLink to={item.href} key={index}>
            <div
            
            className="h-full flex flex-col items-center gap-1 text-center p-8 border border-slate-300 rounded-md"
          >
            <img src={item.icon} alt="" className="h-8" />
            <p className="font-medium">{item.title}</p>
            <p className="text-sm text-slate-400">{item.text}</p>
          </div>
          </NavLink>
        ))}
      </div>
    </main>
  );
}
