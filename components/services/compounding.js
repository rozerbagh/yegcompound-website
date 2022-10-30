/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import img1 from "../../assets/images/features/feature13/img1.jpg";
import img2 from "../../assets/images/features/feature13/img2.jpg";
import img3 from "../../assets/images/features/feature13/img3.jpg";
import img4 from "../../assets/images/features/feature13/img4.jpg";
import img5 from "../../assets/images/features/feature30/feature-img.jpg";

import { compounding } from "../../helper"

const CompoundingComponent = () => {
    return (
        <div>
            <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Compounding</h1>
                            <h2>What is Compounding?</h2>
                            <h6 className="subtitle">
                                Compounding uses a number of scientific techniques to prepare customized medications for patients. Special training and experience is required by the pharmacist and pharmacy staff to be able to formulate and create these specialized mixtures. Some examples of types of compounds are gels, creams, ointments, lotions, capsules, lozenges, suppositories, liquid oils and suspensions. We are pleased to offer the above and more at Lemarchand Dispensary.
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="spacer feature4">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <span className="label label-danger label-rounded">
                                Feature 1
                            </span>
                            <h2 className="title">Awesome with Extra Ordinary Flexibility</h2>
                            <h6 className="subtitle">
                                You can relay on our amazing features list and also our customer
                                services will be great experience for you without doubt and in
                                no-time
                            </h6>
                        </Col>
                    </Row>
                    <Row className="m-t-40">
                        {compounding.map((ele, key) => <Col xs="12" className="wrap-feature4-box" key={key}>
                            <Card>
                                <CardBody>
                                    <div className="icon-round bg-light-info">
                                        <i className={ele.icon}></i>
                                    </div>
                                    <h5 className="font-medium">{ele.name}</h5>
                                    <p className="m-t-20">
                                        {ele.description}
                                    </p>
                                    <a href="#" className="linking text-themecolor">
                                        Explore More<i className="ti-arrow-right"></i>
                                    </a>
                                </CardBody>
                            </Card>
                        </Col>)}
                    </Row>
                </Container>
            </div>
            <div className="bg-light spacer feature20 up">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <span className="label label-info label-rounded">Feature 2</span>
                            <h2 className="title">Awesome with Extra Ordinary Flexibility</h2>
                            <h6 className="subtitle">
                                You can relay on our amazing features list and also our customer
                                services will be great experience for you without doubt and in
                                no-time
                            </h6>
                        </Col>
                    </Row>
                    <Row className="wrap-feature-20">
                        <Col lg="6">
                            <Card>
                                <Row>
                                    <Col md="8">
                                        <CardBody className="d-flex no-block">
                                            <div className="m-r-20">
                                                <Image
                                                    src={img1}
                                                    height="70"
                                                    width="100"
                                                    className="rounded"
                                                    alt="img"
                                                />
                                            </div>
                                            <div>
                                                <h5 className="font-medium">
                                                    Make your website in no-time with us.
                                                </h5>
                                            </div>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" className="text-center">
                                        <a href="#" className="text-white linking bg-info">
                                            Lets Talk <i className="ti-arrow-right"></i>
                                        </a>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
                                <Row>
                                    <Col md="8">
                                        <CardBody className="d-flex no-block">
                                            <div className="m-r-20">
                                                <Image
                                                    src={img2}
                                                    height="70"
                                                    width="100"
                                                    className="rounded"
                                                    alt="img"
                                                />
                                            </div>
                                            <div>
                                                <h5 className="font-medium">
                                                    Make your website in no-time with us.
                                                </h5>
                                            </div>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" className="text-center">
                                        <a href="#" className="text-white linking bg-info">
                                            Lets Talk <i className="ti-arrow-right"></i>
                                        </a>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
                                <Row>
                                    <Col md="8">
                                        <CardBody className="d-flex no-block">
                                            <div className="m-r-20">
                                                <Image
                                                    src={img3}
                                                    height="70"
                                                    width="100"
                                                    className="rounded"
                                                    alt="img"
                                                />
                                            </div>
                                            <div>
                                                <h5 className="font-medium">
                                                    Make your website in no-time with us.
                                                </h5>
                                            </div>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" className="text-center">
                                        <a href="#" className="text-white linking bg-info">
                                            Lets Talk <i className="ti-arrow-right"></i>
                                        </a>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
                                <Row>
                                    <Col md="8">
                                        <CardBody className="d-flex no-block">
                                            <div className="m-r-20">
                                                <Image
                                                    src={img4}
                                                    height="70"
                                                    width="100"
                                                    className="rounded"
                                                    alt="img"
                                                />
                                            </div>
                                            <div>
                                                <h5 className="font-medium">
                                                    Make your website in no-time with us.
                                                </h5>
                                            </div>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" className="text-center">
                                        <a href="#" className="text-white linking bg-info">
                                            Lets Talk <i className="ti-arrow-right"></i>
                                        </a>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="spacer ">
                <Container className="feature30">
                    <Row>
                        <Col lg="10">
                            <Image
                                src={img5}
                                className="rounded img-responsive"
                                alt="wrappixel"
                            />
                        </Col>
                        <Col lg="5" md="7" className="text-center wrap-feature30-box">
                            <Card className="card-shadow">
                                <CardBody>
                                    <div className="p-20">
                                        <span className="label label-info label-rounded">
                                            Feature 3
                                        </span>
                                        <h3 className="title">
                                            The New way of Making Your Website in mins
                                        </h3>
                                        <p>
                                            You can relay on our amazing features list and also our
                                            customer services will be great experience. You will love
                                            it for sure.
                                        </p>
                                        <a
                                            className="btn btn-danger btn-md btn-arrow m-t-20"
                                            href="#"
                                        >
                                            <span>
                                                Explore More <i className="ti-arrow-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default CompoundingComponent;