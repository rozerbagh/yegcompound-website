/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/link-passhref */
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { useCookies } from "react-cookie";
import bannerimg from "../../assets/images/landingpage/banner-img.png";
import pcca from "../../assets/images/logos/pcca.svg";
import TestimonialComponent from "../custom/sections/testimonialcomponent";
import { services, products, compounding } from "../../helper/index";
const Home = (props) => {
  console.log(props);
  const [cookies] = useCookies(["auth"]);
  return (
    <>
      <div className="static-slider-head banner2 p-t-30">
        <Container>
          <Row className="">
            <Col lg="6" md="6" className="m-b-20 align-self-center">
              <h1 className="title">{props.websiteTitle}</h1>
              <h4 className="subtitle font-light">
                Providing our patients and colleagues with quality compounded
                medications and pharmaceutical services.
              </h4>
              <div
                className="btn btn-danger m-r-20 btn-md m-t-30"
                onClick={() => {
                  window.scrollTo({
                    top: 700,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Explore
              </div>

              {!cookies?.auth?.token && (
                <Link href="/signup">
                  <a className="btn btn-md m-t-30  btn-outline-light ">
                    Sign up
                  </a>
                </Link>
              )}
              {/* <Image src={pcca} alt="pcca" /> */}
            </Col>
            <Col lg="6" md="6">
              <Image
                src={bannerimg}
                alt="hero banner"
                className="banner-img bg-white"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="spacer bg-white">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Compounding Services</h1>
              <h6 className="subtitle">
                QUESTIONS ABOUT COMPOUNDING? WE HAVE ANSWERS.
              </h6>
            </Col>
          </Row>
          <Row className="m-t-40">
            {compounding.map((ele, key) => (
              <Col md="6" className="wrap-feature4-box" key={key}>
                <Card>
                  <CardBody>
                    <div className="icon-round bg-primary d-flex align-items-center justify-content-center">
                      <Image src={ele.icon} alt={ele.name} />
                    </div>
                    <h5 className="font-medium">{ele.name}</h5>
                    <p className="m-t-20">{ele.description}</p>
                    {/* <a href="#" className="linking text-themecolor">
                      Explore More<i className="ti-arrow-right"></i>
                    </a> */}
                  </CardBody>
                </Card>
              </Col>
            ))}
            <Col
              xs="12"
              className="p-1 text-center w-100 bg-primary text-white round-5"
            >
              <a href="/contact-us" className="text-white">
                Call or visit to discuss how we can partner to enhance your
                bussiness with customized compounding solutions.
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Pharmacy Services</h1>
              {/* <h6 className="subtitle">lorem ipsum</h6> */}
            </Col>
          </Row>
          <Row className="m-t-40">
            {services.map((ele, key) => (
              <Col md="6" className="wrap-feature4-box" key={key}>
                <Card>
                  <CardBody>
                    <div className="icon-round bg-primary d-flex align-items-center justify-content-center">
                      <Image src={ele.icon} alt={ele.name} />
                    </div>
                    <h5 className="font-medium">{ele.name}</h5>
                    <p className="m-t-20">{ele.description}</p>
                    <a href={ele.path} className="linking text-themecolor">
                      Explore More<i className="ti-arrow-right"></i>
                    </a>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      {/* <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Products Services</h1>
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
                    <h5 className="font-medium m-b-0">{ele.name}</h5>
                    <p className="m-b-0 font-14">{ele.description}</p>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div> */}
      {/* <TestimonialComponent /> */}
    </>
  );
};

export default Home;
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
