/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/head";
import Link from "next/link";
import { Card, CardBody, Col, Container, Form, Row } from "reactstrap";
import { medication_cus_content } from "../helper/index";
import banner from "../assets/images/form-banners/banner1/banner-img.png";
export default function HormoneReplacementTherapy(props) {
  return (
    <>
      <Head>
        <title>{props.websiteTitle} | Hormone Replacement Therapy</title>
        <meta
          name="description"
          content={`${props.websiteTitle} Hormone Replacement Therapy`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1>Site is under maintainance</h1> */}
      <div>
        <div className="spacer bg-white">
          <Container>
            <Row className="justify-content-center">
              <Col md="8" className="text-center">
                <h1 className="title font-bold">
                  No two women are alike, and compounding pharmacists understand
                  this.
                </h1>
                <h6 className="subtitle text-justify">
                  A pharmacist experienced in HRT can assist a health care
                  provider in interpreting the results of tests that measure a
                  patient's hormone levels. The health care provider,
                  compounding pharmacist and patient can then determine a course
                  of treatment that will give the patient the exact amount of
                  hormones her body needs.
                  <br />
                  <br />
                  Working closely with the patient and her health care provider,
                  a compounding pharmacist can help her start and maintain a
                  hormone- replacement regimen that brings her hormones back
                  into balance and closely mimics what her body has been doing
                  naturally for years. With a health care provider's
                  prescription, the pharmacist can prepare hormones in a variety
                  of strengths and dosage forms.
                </h6>
                <div>
                  <Row>
                    <Col xs="6">
                      <div className="subtitle text-justify d-flex align-items-center m-b-5">
                        &#x2022; Hot flashes.
                      </div>
                      <div className="subtitle text-justify d-flex align-items-center m-b-5">
                        &#x2022; Night sweats.
                      </div>
                      <div className="subtitle text-justify d-flex align-items-center m-b-5">
                        &#x2022; PMS.
                      </div>
                      <div className="subtitle text-justify d-flex align-items-center m-b-5">
                        &#x2022; Weight gain.
                      </div>
                      <div className="subtitle text-left d-flex align-items-baseline">
                        &#x2022; Post-partum depression.
                      </div>
                      <div className="subtitle text-left d-flex align-items-baseline">
                        &#x2022; Irregular menstrual cycle.
                      </div>
                    </Col>
                    <Col xs="6">
                      <div className="subtitle text-left d-flex align-items-baseline">
                        &#x2022; Infertility
                      </div>
                      <div className="subtitle text-left d-flex align-items-baseline">
                        &#x2022; Fibrocystic breasts.
                      </div>
                      <div className="subtitle text-left d-flex align-items-baseline">
                        &#x2022; Decreased libido.
                      </div>
                      <div className="subtitle text-left d-flex align-items-baseline">
                        &#x2022; Painful intercourse.
                      </div>
                      <div className="subtitle text-left d-flex align-items-baseline">
                        &#x2022; Vaginal dryness.
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col
                xs="7"
                className="m-t-20 p-20 text-center w-100 bg-primary text-white round-5 p-cursor"
              >
                <Link href="/contact">
                  <span className="text-white">
                    Call or visit to discuss how we can partner to enhance your
                    bussiness with customized compounding solutions.
                  </span>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="bg-light spacer feature20 up">
          <Container>
            <Row className="justify-content-center">
              <Col md="7" className="text-center">
                <h1 className="title font-bold">HORMONE IMBALANCE</h1>
                <h6 className="subtitle text-justify">
                  A hormonal imbalance can affect more than your mood – it can
                  be responsible for a number of related health concerns,
                  including:
                </h6>
                <div>
                  <div className="subtitle text-justify d-flex align-items-center m-b-5">
                    <span className="text-bullet"></span>
                    Alter the form of your medication to make it easier to use
                    or ingest.
                  </div>
                  <div className="subtitle text-justify d-flex align-items-center m-b-5">
                    <span className="text-bullet"></span>
                    Add flavor to your medication to make it more palatable.
                  </div>
                  <div className="subtitle text-justify d-flex align-items-center m-b-5">
                    <span className="text-bullet"></span>
                    Adjust the strength of your medication so that it meets your
                    specific needs.
                  </div>
                  <div className="subtitle text-justify d-flex align-items-center m-b-5">
                    <span className="text-bullet"></span>
                    Combine medications into one, easy-to-use form.
                  </div>
                  <div className="subtitle text-left d-flex align-items-baseline">
                    <span className="text-bullet"></span>
                    In some cases, formulate medications that are no longer
                    manufactured commercially.
                  </div>
                </div>
              </Col>
              <Col
                xs="7"
                className="m-t-20 p-20 text-center w-100 bg-primary text-white round-5 p-cursor"
              >
                <Link href="/contact">
                  <span className="text-white">
                    Call or visit to discuss how we can partner to enhance your
                    bussiness with customized compounding solutions.
                  </span>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="spacer bg-white">
          <Container>
            <Row className="justify-content-center">
              <Col md="7" className="text-center">
                <h1 className="title font-bold">The Compounding Advantage</h1>
                <h6 className="subtitle text-justify">
                  Pharmacy compounding is the preparation of customized
                  medications for patients. The advantage of compounded hormone
                  replacement therapy (HRT) is that it can be adapted
                  specifically to fit each individual's body and hormone levels.
                  Bio-identical hormones have the exact chemical structure as
                  the hormones in the human body. The body recognizes them and
                  allows them to mimic the function of the hormones the body
                  produces on its own.
                </h6>
              </Col>
              <Col
                xs="7"
                className="m-t-20 p-20 text-center w-100 bg-primary text-white round-5 p-cursor"
              >
                <Link href="/contact">
                  <span className="text-white">
                    Call or visit to discuss how we can partner to enhance your
                    bussiness with customized compounding solutions.
                  </span>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <div className="bg-light spacer feature20 up">
          <Container>
            <Row className="justify-content-center">
              <Col md="7" className="text-center">
                <span className="label label-info label-rounded">Feature 2</span>
                <h2 className="title">Your medication should work for you</h2>
                <h6 className="subtitle">
                  When it comes to medication, you can choose how it is given
                  and presented to you. Here’s what your pharmacist can do.
                </h6>
              </Col>
            </Row>
            <Row className="wrap-feature-20">
              {medication_cus_content.map((pres, idx) => (
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
                        <a
                          href="tel:403.235.0888"
                          className="text-white linking bg-info"
                        >
                          Lets Talk <i className="ti-arrow-right"></i>
                        </a>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div> */}
      </div>
    </>
  );
}
