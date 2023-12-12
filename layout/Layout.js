import { ToastContainer } from "react-toastify";
import Header from "./header/Navbar";
import C2aComponent from "../components/contact/c2a";
// import NotifyHeader from "./header/NotifyHeader";
import Footer from "./footer/Footer";
import { CookiesProvider } from "react-cookie";
import { useEffect, useState } from "react";
import { mobile_os } from "../helper";
const Layout = ({ children, mweb }) => {
  const [mobileOS, setMobileOS] = useState(null);
  const getMobileOS = () => {
    const ua = navigator.userAgent;
    if (/android/i.test(ua)) {
      setMobileOS(mobile_os.android);
      return "Android";
    } else if (
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    ) {
      setMobileOS(mobile_os.ios);
      return "iOS";
    }
    setMobileOS(mobile_os.other);
    return "Other";
  };
  useEffect(() => {
    getMobileOS();
  }, []);
  return (
    <>
      <CookiesProvider>
        <div id="main-wrapper">
          {/* <NotifyHeader /> */}
          <Header mweb={mweb} mobileOS={mobileOS} />
          <div className="page-wrapper">
            <div className="container-fluid">{children}</div>
          </div>
          <C2aComponent />
          <Footer />
        </div>
      </CookiesProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Layout;
