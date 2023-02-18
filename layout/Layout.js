import { ToastContainer } from "react-toastify";
import Header from "./header/Navbar";
import C2aComponent from "../components/contact/c2a";
// import NotifyHeader from "./header/NotifyHeader";
import Footer from "./footer/Footer";
import { CookiesProvider } from "react-cookie";
const Layout = ({ children, mweb }) => {
  return (
    <>
      <CookiesProvider>
        <div id="main-wrapper">
          {/* <NotifyHeader /> */}
          <Header mweb={mweb} />
          <div className="page-wrapper">
            <div className="container-fluid">{children}</div>
          </div>
          <C2aComponent />
          <Footer />
        </div>
      </CookiesProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Layout;
