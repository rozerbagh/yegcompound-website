/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/head";
import { Card, CardBody, Col, Container, Form, Row } from "reactstrap";
import { assesment_monitor_content } from "../helper/index";
import banner from "../assets/images/form-banners/banner1/banner-img.png";
import Link from "next/link";
export default function Services(props) {
  return (
    <>
      <Head>
        <title>{props.websiteTitle} | Assesments & Monitoring - Services</title>
        <meta
          name="description"
          content={`${props.websiteTitle} Assesments & Monitoring - Services`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1>Site is under maintainance</h1> */}
      <div>
        <div className="spacer bg-white">
          <Container>
            <Row className="justify-content-center">
              <Col md="7" className="text-center">
                <h1 className="title font-bold">
                  Always keeping an eye on your progress
                </h1>
                <h6 className="subtitle">
                  As your partner in health, your pharmacist is not one to
                  simply sit back on good results. They will review your current
                  medication and treatment to further optimize your health
                  outcomes. This will give you the right tools to take your
                  health into your own hands.
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
                <h2 className="title">Your pharmacist can guide you</h2>
                <h6 className="subtitle">
                  Your pharmacist can prescribe and execute certain tests to
                  make sure your treatment is working for you. They will also
                  help you keep your condition in check with monitoring tools
                  and advice.
                </h6>
              </Col>
            </Row>
            <Row className="wrap-feature-20">
              {assesment_monitor_content.map((pres, idx) => (
                <Col xs="12" key={idx}>
                  <Card>
                    <Row>
                      <Col md="8">
                        <CardBody className="d-flex no-block">
                          <div className="m-r-20">
                            <Image
                              src={pres.img}
                              height="70"
                              width="100"
                              className="rounded"
                              alt="img"
                            />
                          </div>
                          <div className="w-100 d-flex flex-column align-items-center justify-content-center">
                            <h5 className="font-medium">{pres.title}</h5>
                            <p className="font-medium">{pres.content}</p>
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
