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
            <ServicesComponent />
        </>
    );
}
