import Head from "next/head";
import CompoundingComponent from "../components/services/compounding"
export default function Home() {
    return (
        <>
            <Head>
                <title>LD | Compounding</title>
                <meta
                    name="description"
                    content="Lemarchandi Dispensary contact form"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <h1>Site is under maintainance</h1> */}
            <CompoundingComponent />
        </>
    );
}
