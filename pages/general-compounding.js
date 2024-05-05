/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/head";
import Link from "next/link";
import { Card, CardBody, Col, Container, Form, Row } from "reactstrap";
import { medication_cus_content } from "../helper/index";
import banner from "../assets/images/form-banners/banner1/banner-img.png";
export default function GeneralCompounding(props) {
  return (
    <>
      <Head>
        <title>{props.websiteTitle} | General Compounding</title>
        <meta
          name="description"
          content={`${props.websiteTitle} General Compounding`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1>Site is under maintainance</h1> */}
      <div>
        <div className="spacer bg-white">
          <Container>
            <Row className="justify-content-center">
              <Col md="7" className="text-center">
                <h1 className="title font-bold">WHAT IS COMPOUNDING?</h1>
                <h6 className="subtitle text-justify">
                  Pharmacy compounding is the art and science of preparing
                  customized medications for patients. Its practice dates back
                  to the origins of pharmacy. It declined in the 1950s and '60s
                  as the pharmacist's role quickly changed from a preparer of
                  medications to a dispenser of mass-manufactured products.
                  However, this “one-size-fits-all” approach to medication meant
                  that some patients needs were unmet.
                  <br />
                  <br />
                  Within the last few decades, compounding has experienced a
                  renaissance, as modern technology, innovative techniques and
                  new research have allowed more pharmacists to customize
                  medications to meet a patient’s unique needs. easier.
                </h6>
              </Col>
              <Col
                xs="7"
                className="m-t-20 p-20 text-center w-100 bg-primary text-white round-5 p-cursor"
              >
                <Link legacyBehavior href="/contact">
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
                <h1 className="title font-bold">
                  HOW DOES COMPOUNDING BENEFIT ME?
                </h1>
                <h6 className="subtitle text-justify">
                  Working with your health care provider, a compounding
                  pharmacist can:
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
                <Link legacyBehavior href="/contact">
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
              <Col md="8" className="text-center">
                <h1 className="title font-bold">
                  WHAT KINDS OF PRESCRIPTIONS CAN BE COMPOUNDED?
                </h1>
                <h6 className="subtitle text-justify">
                  Compounding pharmacists can prepare medication for a variety
                  of needs and applications, including:
                </h6>
                <div>
                  <Row>
                    <Col xs="6">
                      <div className="subtitle text-justify d-flex align-items-center m-b-5">
                        &#x2022; Bioidentical hormone replacement therapy.
                      </div>
                      <div className="subtitle text-justify d-flex align-items-center m-b-5">
                        &#x2022; Hospice.
                      </div>
                      <div className="subtitle text-justify d-flex align-items-center m-b-5">
                        &#x2022; Pediatrics.
                      </div>
                      <div className="subtitle text-justify d-flex align-items-center m-b-5">
                        &#x2022; Pain management.
                      </div>
                      <div className="subtitle text-left d-flex align-items-baseline">
                        &#x2022; Ophthalmics.
                      </div>
                      <div className="subtitle text-left d-flex align-items-baseline">
                        &#x2022; Otic (for the ear).
                      </div>
                      <div className="subtitle text-left d-flex align-items-baseline">
                        &#x2022; Dermatology.
                      </div>
                    </Col>
                    <Col xs="6">
                      <div className="subtitle text-left d-flex align-items-baseline">
                        &#x2022; Medication flavoring.
                      </div>
                      <div className="subtitle text-left d-flex align-items-baseline">
                        &#x2022; Dentistry.
                      </div>
                      <div className="subtitle text-left d-flex align-items-baseline">
                        &#x2022; Neuropathy.
                      </div>
                      <div className="subtitle text-left d-flex align-items-baseline">
                        &#x2022; Veterinary.
                      </div>
                      <div className="subtitle text-left d-flex align-items-baseline">
                        &#x2022; Sports medicine.
                      </div>
                      <div className="subtitle text-left d-flex align-items-baseline">
                        &#x2022; Infertility.
                      </div>
                      <div className="subtitle text-left d-flex align-items-baseline">
                        &#x2022; Wound and scar therapy.
                      </div>
                      <div className="subtitle text-left d-flex align-items-baseline">
                        &#x2022; Podiatry.
                      </div>
                      <div className="subtitle text-left d-flex align-items-baseline">
                        &#x2022; Gastroenterology.
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col
                xs="7"
                className="m-t-20 p-20 text-center w-100 bg-primary text-white round-5 p-cursor"
              >
                <Link legacyBehavior href="/contact">
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
