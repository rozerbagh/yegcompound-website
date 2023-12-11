import Head from "next/head";
import HomeComponent from "../components/home/home";
export default function Home(props) {
  return (
    <div>
      <Head>
        <title>{props.websiteTitle}</title>
        <meta name="description" content="The Medicine Shoppe Pharmacy #377" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1>Site is under maintainance</h1> */}
      <HomeComponent websiteTitle={props.websiteTitle} />
    </div>
  );
}
