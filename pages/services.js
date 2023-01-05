import Head from "next/head";
import ServicesComponent from "../components/services/services"
export default function Services() {
    return (
        <>
            <Head>
                <title>Nikis Pharmacy | Services</title>
                <meta
                    name="description"
                    content="Nikis Pharmacy Dispensary contact form"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <h1>Site is under maintainance</h1> */}
            <ServicesComponent />
        </>
    );
}
