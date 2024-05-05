import { useState, useEffect } from "react";
import Script from "next/script";
import "../styles/scss/style.scss";
import Layout from "../layout/Layout";
import { websiteTitle } from "../helper/index";
function MyApp({ Component, pageProps }) {
  const [mweb, setmweb] = useState(false);
  const getMobileOS = () => {
    const ua = navigator.userAgent;
    if (/android/i.test(ua)) {
      setmweb(true);
      return "android";
    } else if (
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    ) {
      setmweb(true);
      return "ios";
    }
    return "other";
  };
  useEffect(() => {
    getMobileOS();
  }, []);
  return (
    <>
      <Script src="https://accounts.google.com/gsi/client" async defer />
      <Script src="js/jquery-3.3.1.min.js" />
      <Script src="js/popper.min.js" />
      <Script src="js/bootstrap.min.js" />
      <Script src="js/jquery.sticky.js" />
      <Script src="js/main.js" />
      {/* <Script src={require("../public/js/")} /> */}
      <Layout mweb={mweb}>
        <Component {...pageProps} websiteTitle={websiteTitle} mweb={mweb} />
      </Layout>
    </>
  );
}

export default MyApp;
