/* eslint-disable @next/next/link-passhref */
import React, { useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { useCookies } from "react-cookie";
import Image from "next/image";
import bannerimg from "../../assets/images/landingpage/banner-img.png";
import TestimonialComponent from "../custom/sections/testimonialcomponent";
import { services, products } from "../../helper/index";
const Home = (props) => {
    console.log(props)
    const [cookies] = useCookies(["auth"]);
    return (
        <>
            <div className="static-slider-head banner2">
                <Container>
                    <Row className="">
                        <Col lg="6" md="6" className="align-self-center">
                            <h1 className="title">{props.websiteTitle}</h1>
                            <h4 className="subtitle font-light">
                                Providing our patients and colleagues with quality compounded
                                <br /> medications and pharmaceutical services.
                            </h4>
                            <Link href="/">
                                <div className="btn btn-danger m-r-20 btn-md m-t-30">
                                    Explore
                                </div>
                            </Link>

                            {!cookies?.auth?.token && (
                                <Link href="/signup">
                                    <a className="btn btn-md m-t-30  btn-outline-light ">
                                        Sign up
                                    </a>
                                </Link>
                            )}
                        </Col>
                        <Col lg="6" md="6">
                            <Image src={bannerimg} alt="hero banner" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Pharmacy Services</h1>
                            <h6 className="subtitle">lorem ipsum</h6>
                        </Col>
                    </Row>
                    <Row className="m-t-40">
                        {services.map((ele, key) => (
                            <Col md="6" className="wrap-feature4-box" key={key}>
                                <Card>
                                    <CardBody>
                                        <div className="icon-round bg-light-info">{ele.icon}</div>
                                        <h5 className="font-medium">{ele.name}</h5>
                                        <p className="m-t-20">{ele.description}</p>
                                        <a href="#" className="linking text-themecolor">
                                            Explore More<i className="ti-arrow-right"></i>
                                        </a>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            <div className="spacer">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Pharmacy Services</h1>
                            <h6 className="subtitle">lorem ipsum</h6>
                        </Col>
                    </Row>
                    <Row className="m-t-40">
                        {products.map((ele, key) => (
                            <Col md="6" className="wrap-feature4-box" key={key}>
                                <Card className="card-shadow">
                                    <a href="#" className="img-ho">
                                        <Image
                                            className="card-img-top"
                                            src={ele.img}
                                            alt="wrappixel kit"
                                        />
                                    </a>
                                    <CardBody>
                                        <h5 className="font-medium m-b-0">
                                            {ele.name}
                                        </h5>
                                        <p className="m-b-0 font-14">{ele.description}</p>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    {/* <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">
                                {props.websiteTitle}, part of your community
                            </h1>
                            <h6 className="subtitle">
                                {props.websiteTitle} was established in 1990 in 6610 132 Ave NW,
                                Edmonton, AB T5C 2A5. We were one of the first compounding
                                pharmacies in the Edmonton area. Today, we pride ourselves on
                                providing our patients and colleagues with quality compounded
                                medications and pharmaceutical services. Our practice has
                                evolved into a client centric approach that focuses on premium
                                product combined with superior customer service.
                            </h6>
                        </Col>
                    </Row> */}
                </Container>
            </div>
            <TestimonialComponent />
        </>
    );
};

export default Home;
// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://.../data`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }