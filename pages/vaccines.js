/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/head";
import { Card, CardBody, Col, Container, Form, Row } from "reactstrap";
import { vaccines_content } from "../helper/index";
import banner from "../assets/images/form-banners/banner1/banner-img.png";
import Link from "next/link";
export default function Services(props) {
  return (
    <>
      <Head>
        <title>{props.websiteTitle} | Vaccines - Services</title>
        <meta
          name="description"
          content={`${props.websiteTitle} Vaccines - Services`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1>Site is under maintainance</h1> */}
      <div>
        <div className="spacer bg-white">
          <Container>
            <Row className="justify-content-center">
              <Col md="7" className="text-center">
                <h1 className="title font-bold">Why are vaccines important?</h1>
                <h6 className="subtitle">
                  Vaccines are important and offer long-term or sometimes
                  lifelong protection against common diseases. Getting
                  vaccinated protects not only yourself, but those around you by
                  limiting the spread.
                </h6>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="bg-light spacer feature20 up">
          <Container>
            <Row className="justify-content-center">
              <Col md="7" className="text-center">
                {/* <span className="label label-info label-rounded">Feature 2</span> */}
                <h2 className="title">VACCINATION</h2>
                <h6 className="subtitle">
                  Book an appointment with your pharmacist to get protection
                  against the flu, common diseases or diseases that can affect
                  travelers.
                </h6>
              </Col>
            </Row>
            {/* <section>
                            <div id="banner1" className="banner spacer">
                                <Container>
                                    <Row>
                                        <Col lg="5" md="7" className="align-self-center">
                                            <h2 className="title font-bold">
                                                Give your Business Real boost Now!
                                            </h2>
                                            <p className="m-t-40 m-b-30">
                                                To accomplish great things, we must not only act, but also
                                                dream; not only plan, but also believe.
                                            </p>
                                            <Form className="m-t-40">
                                                <input
                                                    type="text"
                                                    name="email"
                                                    placeholder="Enter Email Address"
                                                    className="font-16"
                                                />
                                                <input
                                                    type="submit"
                                                    value="Get Started"
                                                    className="bg-info font-semibold font-16 btn-rounded text-uppercase text-white text-center"
                                                />
                                            </Form>
                                        </Col>
                                        <Col lg="6" md="5" className="align-self-center ml-auto">
                                            <Image
                                                src={banner}
                                                alt="We are Digital Agency"
                                                className="img-fluid"
                                            />
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </section> */}
            <Row className="wrap-feature-20">
              {vaccines_content.map((vaccine, idx) => (
                <Col xs="12" key={idx}>
                  <Card>
                    <Row>
                      <Col md="8">
                        <CardBody className="d-flex no-block">
                          <div className="m-r-20">
                            <Image
                              src={vaccine.img}
                              height="70"
                              width="100"
                              className="rounded"
                              alt="img"
                            />
                          </div>
                          <div className="w-100 d-flex flex-column align-items-center justify-content-center">
                            <h5 className="font-medium">{vaccine.title}</h5>
                            <p className="font-medium">{vaccine.content}</p>
                          </div>
                        </CardBody>
                      </Col>
                      <Col md="4" className="text-center">
                        <Link
                          legacyBehavior
                          href="tel:7807057150"
                          className="text-white linking bg-info"
                        >
                          <a>
                            Lets Talk <i className="ti-arrow-right"></i>
                          </a>
                        </Link>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
