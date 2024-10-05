import { Navigate, Outlet } from "react-router-dom";
import classes from "./Layout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "../redux/Redux";
import { useEffect } from "react";
import Header from "../home/header/Header";
import Navbar from "../home/Navbar/Navbar";

function Layout() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userSlice.actions.onLogin(currentUser));
  }, []);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return (
    <div className={classes.layout}>
      <Header />
      <div style={{ borderBottom: "2px solid #00000031" }}></div>
      <div className={classes.outlet}>
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;