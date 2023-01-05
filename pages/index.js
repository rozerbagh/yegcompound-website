import Head from "next/head";
import HomeComponent from "../components/home/home";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Nikis Pharmacy</title>
        <meta
          name="description"
          content="Niks Pharmacy"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1>Site is under maintainance</h1> */}
      <HomeComponent />
    </div>
  );
}
