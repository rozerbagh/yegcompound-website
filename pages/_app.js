import "../styles/scss/style.scss";
import Layout from "../layout/Layout";
import {websiteTitle} from "../helper/index"
function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} websiteTitle={websiteTitle}/>
    </Layout>
  );
}

export default MyApp;
