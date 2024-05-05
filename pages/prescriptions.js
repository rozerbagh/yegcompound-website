/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Form,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import { prescription_content } from "../helper/index";
import Link from "next/link";
// import banner from "../assets/images/form-banners/banner1/banner-img.png";
export default function Services(props) {
  return (
    <>
      <Head>
        <title>{props.websiteTitle} | Prescriptions - Services</title>
        <meta
          name="description"
          content="The Medicine Shoppe Pharmacy #377 Dispensary contact form"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1>Site is under maintainance</h1> */}
      <div>
        <div className="spacer bg-white">
          <Container>
            <Row className="justify-content-center">
              <Col md="7" className="text-center">
                <h1 className="title font-bold">Beyond Medication</h1>
                <h6 className="subtitle">
                  Your pharmacist does more than just prepare your
                  prescriptions. They are with you every step of the way:
                  whether you have a minor health issue or a chronic condition.
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
                <h2 className="title">Your pharmacist, your medication ally</h2>
                <h6 className="subtitle">
                  Prescription services are at the core of what your pharmacist
                  does. See how these services can benefit you.
                </h6>
              </Col>
            </Row>

            <Row className="wrap-feature-20">
              {prescription_content.map((pres, idx) => (
                <Col xs="12" key={idx}>
                  <Card>
                    <Row>
                      <Col md="8">
                        <CardBody className="d-flex no-block">
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
            <Row className="justify-content-center">
              <Col md="7" className="text-center">
                {/* <span className="label label-info label-rounded">Feature 2</span> */}
                <h2 className="title">For short-term treatments</h2>
                <h6 className="subtitle">
                  Do you need to take medication for a new or temporary
                  condition? Here's what your pharmacist can do for you if you
                  are struggling with a minor health problem.
                </h6>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
