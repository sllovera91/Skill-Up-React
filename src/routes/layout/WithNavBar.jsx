import { Outlet } from "react-router-dom";
import {Footer, Navbar} from "../../components/"

export const WithNavBar = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

