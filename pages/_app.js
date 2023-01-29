import { useState, useEffect } from "react";
import "../styles/scss/style.scss";
import Layout from "../layout/Layout";
import { websiteTitle } from "../helper/index";
function MyApp({ Component, pageProps }) {
  const [mweb, setmweb] = useState(false);
  const getMobileOS = () => {
    const ua = navigator.userAgent;
    if (/android/i.test(ua)) {
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
    <Layout mweb={mweb}>
      <Component {...pageProps} websiteTitle={websiteTitle} mweb={mweb} />
    </Layout>
  );
}

export default MyApp;
