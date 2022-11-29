import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/NavBar";

const WithNavBar = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer/>
    </>
  );
};

export default WithNavBar;
