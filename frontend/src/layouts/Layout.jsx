import React from "react";
import { Outlet } from "react-router-dom";
import Usbatlogout from "../components/Usbatlogout/Usbatlogout";
import Header from "../components/HeaderComponent/Header";
import Footer from "../components/Footer/Footer";
import "./Layout.css";

function Layout() {
  return (
    <div>
      <div className="mainheader">
        <Header />
      </div>
      <div className="mainoutlet">
        <Outlet />
      </div>
      <div className="mainfooter">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
