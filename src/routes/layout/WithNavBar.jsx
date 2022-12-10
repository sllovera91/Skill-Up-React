import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../../components/';

export const WithNavBar = () => {
  return (
    <>
    <div className="p-3">
      <Navbar />
    </div>

      <div className="page">
        <Outlet />
      </div>
      <Footer/>
    </>
  );
};
