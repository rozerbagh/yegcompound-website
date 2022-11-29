import Head from "next/head";
//  libraries
import React, { useState } from "react";
import { Container, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import Banner from "../components/banner/Banner";
import PlaceOrder from "../components/order/PlaceOrder";
import OrderDetails from "../components/order/OrderDetails";
const Order = (props) => {
    const [tab, setTab] = useState(1);

    return (
        <>
            <Head>
                <title>Nikis Pharmacy | Orders</title>
                <meta name="description" content="Nikis Pharmacy Dispensary" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner
                heading={"Place Your Orders"}
                subHeading={"Orders details"}
                btnFlag={0}
            />
            <br />
            <Container>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={{ active: tab === 1 }}
                            onClick={() => setTab(1)}
                        >
                            Place Order
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={{ active: tab === 2 }}
                            onClick={() => setTab(2)}
                        >
                            All Orders
                        </NavLink>
                    </NavItem>
                </Nav>
            </Container>
            <br />
            <Container>
                <TabContent activeTab={tab}>
                    <TabPane tabId={1}>
                        <PlaceOrder />
                    </TabPane>
                    <TabPane tabId={2}>
                        <OrderDetails />
                    </TabPane>
                </TabContent>
            </Container>
            <br />
        </>
    );
};
export default React.memo(Order);

// // This gets called on every request
// export async function getServerSideProps() {
//     // Fetch data from external API
//     const res = await fetch("https://dummyjson.com/products");
//     const data = await res.json();

//     // Pass data to the page via props
//     return { props: { ...data } };
// }
