import Head from "next/head";
import ContactComponent from "../components/contact/contact"
export default function Contact(props) {
    return (
        <>
            <Head>
                <title>{props.websiteTitle} | Contact</title>
                <meta
                    name="description"
                    content={`${props.websiteTitle} description`}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <h1>Site is under maintainance</h1> */}
            <ContactComponent websiteTitle={props.websiteTitle} />
        </>
    );
}
