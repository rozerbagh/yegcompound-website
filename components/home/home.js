import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import bannerimg from "../../assets/images/landingpage/banner-img.png";
import TestimonialComponent from "../custom/sections/testimonialcomponent";

const Home = () => {
    return (
        <>
            <div className="static-slider-head banner2">
                <Container>
                    <Row className="">
                        <Col lg="6" md="6" className="align-self-center">
                            <h1 className="title">
                                Lemarchand Dispensary
                            </h1>
                            <h4 className="subtitle font-light">
                                Providing our patients and colleagues with quality compounded
                                <br /> medications and pharmaceutical services.
                            </h4>
                            <Link href="/">
                                <div className="btn btn-danger m-r-20 btn-md m-t-30">
                                    Explore
                                </div>
                            </Link>

                            <Link href="/signup">
                                <a className="btn btn-md m-t-30  btn-outline-light ">
                                    Sign up
                                </a>
                            </Link>
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
                            <h6 className="subtitle">
                                Compounding,
                                Medication Assessments,
                                Injections,
                                Free Prescription Delivery,
                                Compliance or Blister Packaging,
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="spacer">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Lemarchand Dispensary, part of your community</h1>
                            <h6 className="subtitle">
                                Lemarchand Dispensary was established in 1990 in Edmonton, Alberta. We were one of the first compounding pharmacies in the Edmonton area. Today, we pride ourselves on providing our patients and colleagues with quality compounded medications and pharmaceutical services. Our practice has evolved into a client centric approach that focuses on premium product combined with superior customer service.
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <TestimonialComponent />
        </>
    );
};

export default Home;
