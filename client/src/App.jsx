import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Account from "./Pages/Account/Account";
import MyAccount from "./Pages/Account/MyAccount";
import MyOrders from "./Pages/Account/MyOrders";
import MyPayments from "./Pages/Account/MyPayments";
import MyWallet from "./Pages/Account/MyWallet";
import MyAddresses from "./Pages/Account/MyAddresses";
import MyProfile from "./Pages/Account/MyProfile";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_SNACKNAR } from "./Store/actionTypes";
import { Alert, Snackbar } from "@mui/material";
import SingleProductPage from "./Pages/SingleProduct/SingleProductPage";
import NotFound from "./Pages/NoFound";
import InvalidRedirect from "./Pages/InvalidRedirect";
function App() {
  const dispatch = useDispatch();
  const snackbar = useSelector((store) => store.snackbar);
  function closeSnackbar() {
    dispatch({ type: CLOSE_SNACKNAR });
  }
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/myaccount" element={<Account />}>
          <Route path="" element={<MyAccount />} />
          <Route path="orders" element={<MyOrders />} />
          <Route path="payments" element={<MyPayments />} />
          <Route path="wallet" element={<MyWallet />} />
          <Route path="addresses" element={<MyAddresses />} />
          <Route path="profile" element={<MyProfile />} />
        </Route>
        <Route path="/product/:title" element={<SingleProductPage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<InvalidRedirect />} />
      </Routes>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={closeSnackbar}
        anchorOrigin={{vertical:"bottom",horizontal:"center"}}
      >
        <Alert
          onClose={closeSnackbar}
          severity={snackbar.severity}
          variant="filled"
          // sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default App;
