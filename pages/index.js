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
      <HomeComponent />
    </div>
  );
}
