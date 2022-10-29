import Head from "next/head";
import ServicesComponent from "../components/services/services"
export default function Home() {
    return (
        <>
            <Head>
                <title>LD | Services</title>
                <meta
                    name="description"
                    content="Lemarchandi Dispensary contact form"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ServicesComponent />
        </>
    );
}
