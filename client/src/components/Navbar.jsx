import logo from "/logo.svg";
import searchIcon from "/Navbar/search.svg";
import wishlistIcon from "/Navbar/wishlist.svg";
import cartIcon from "/Navbar/cart.svg";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import avatar from "/Navbar/avatar.svg";
import { OPEN_SNACKNAR, LOGOUT } from "../Store/actionTypes";
export default function Navbar() {
  const { token, name } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  function logout() {
    dispatch({ type: LOGOUT });
    dispatch({
      type: OPEN_SNACKNAR,
      payload: { open: true, severity: "success", message: "Logout success" },
    });
  }
  return (
    <nav className="h-[12vh] w-screen bg-red-500">
      <div className="z-10 fixed h-[12vh] left-0 top-0 w-full bg-white border border-slate-300">
        <section className="flex justify-between bg-gray-300 text-xs p-1 px-5">
          <div className="flex gap-4">
            <p>Offers</p>
            <p>Fanbook</p>
            <p>Download App</p>
            <p>Find a store near me</p>
          </div>
          <div className="flex gap-4">
            <p>Contact Us</p>
            <p>Track Order</p>
          </div>
        </section>
        <section className=" flex justify-between p-2 w-10/12 m-auto">
          <div className="flex items-center justify-between gap-6">
            <NavLink to="/">
              <img src={logo} alt="logo" className="max-w-[150px]" />
            </NavLink>
            <p>MEN</p>
            <p>WOMEN</p>
            <p>MOBILE COVERS</p>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1 p-2 rounded-lg bg-gray-200">
              <img src={searchIcon} alt="searchIcon" className="min-w-[20px]" />
              <input
                type="text"
                placeholder="Search any products"
                className="outline-none placeholder:text-gray-500 "
              />
            </div>
            <span className="h-4/6 w-[2px] bg-gray-300"></span>
            {token ? (
              <div className="relative group cursor-pointer">
                <img src={avatar} alt="" />

                <ul className="absolute -right-20 top-6 bg-white hidden group-hover:flex min-w-[200px] flex-col gap-5 p-4">
                  <li>Hi , {name}</li>
                  <li>My Account</li>
                  <li>My Wishlist</li>
                  <li>My Orders</li>
                  <li>My Wallet</li>
                  <li onClick={logout}>Logout</li>
                </ul>
              </div>
            ) : (
              <NavLink to={"/login"}>
                <p className="font-medium">LOGIN</p>
              </NavLink>
            )}

            <NavLink to="/wishlist">
              <img src={wishlistIcon} alt="wishlist" />
            </NavLink>
            <NavLink to="/cart">
              <img src={cartIcon} alt="cart" />
            </NavLink>
          </div>
        </section>
      </div>
    </nav>
  );
}
