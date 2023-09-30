import Head from "next/head";
//  libraries
import React, { useEffect, useState } from "react";
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Button,
} from "reactstrap";
import Banner from "../components/banner/Banner";
import NonCapsulePlaceOrder from "../components/order/NonCapsulePlaceOrder";
import OrderDetails from "../components/order/OrderDetails";
import CapsulesPlaceOrder from "../components/order/CapsulesPlaceOrder";
const capsule = "capsule";
const nocapsule = "nocapsule";
const Order = (props) => {
  const [tab, setTab] = useState(1);
  const [capsuleFormType, setCapsuleFormType] = useState("");
  useEffect(() => {
    const btnType = localStorage.getItem("buttontype");
    setCapsuleFormType(btnType);
  }, []);
  return (
    <>
      <Head>
        <title>{props.websiteTitle} | Orders</title>
        <meta name="description" content="Nikis Pharmacy Dispensary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner
        heading={"Place Your Orders"}
        subHeading={"Orders details"}
        btnFlag={0}
      />
      <br />
      {/* <h1>Site is under maintainance</h1> */}
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
            <div className="flex flex-row align-items-center justify-space-between">
              <Button
                color={capsuleFormType === nocapsule ? "primary" : "secondary"}
                onClick={(e) => {
                  localStorage.setItem("buttontype", nocapsule);
                  setCapsuleFormType(nocapsule);
                }}
              >
                Compounds - Non-Capsules
              </Button>
              &nbsp;
              <Button
                color={capsuleFormType === capsule ? "primary" : "secondary"}
                onClick={(e) => {
                  localStorage.setItem("buttontype", capsule);
                  setCapsuleFormType(capsule);
                }}
              >
                Capsules
              </Button>
            </div>
            {capsuleFormType === nocapsule ? (
              <NonCapsulePlaceOrder />
            ) : capsuleFormType === capsule ? (
              <CapsulesPlaceOrder />
            ) : null}
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
