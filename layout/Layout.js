import Header from "./header/Navbar";
import C2aComponent from "../components/contact/c2a";
// import NotifyHeader from "./header/NotifyHeader";
import Footer from "./footer/Footer";
import { CookiesProvider } from "react-cookie";
const Layout = ({ children }) => {
  return (
    <CookiesProvider>
      <div id="main-wrapper">
        {/* <NotifyHeader /> */}
        <Header />
        <div className="page-wrapper">
          <div className="container-fluid">{children}</div>
        </div>
        <C2aComponent />
        <Footer />
      </div>
    </CookiesProvider>
  );
};

export default Layout;
