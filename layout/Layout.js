import Header from "./header/Navbar";
import NotifyHeader from "./header/NotifyHeader";
import Footer from "./footer/Footer";
import { CookiesProvider } from "react-cookie"
const Layout = ({ children }) => {
    return (
        <CookiesProvider>
            <div id="main-wrapper">
                {/* <NotifyHeader /> */}
                {/* <Header /> */}
                <div className="page-wrapper">
                    <div className="container-fluid">{children}</div>
                </div>
                {/* <Footer /> */}
            </div>
        </CookiesProvider>
    );
};

export default Layout;
