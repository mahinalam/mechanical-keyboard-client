import ResponsiveNavbar from "../../pages/home/sharred/navbar/Navbar";
import ResponsiveFooter from "../../pages/home/sharred/footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <ResponsiveNavbar />
      <Outlet />
      <ResponsiveFooter />
    </div>
  );
};

export default MainLayout;
