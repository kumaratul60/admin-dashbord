import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import "../styles/global.scss";

const queryClient = new QueryClient()
const Layout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
        <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
