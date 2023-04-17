import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default RootLayout;
