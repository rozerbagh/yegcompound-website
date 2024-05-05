/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/head";
import Link from "next/link";
import { Card, CardBody, Col, Container, Form, Row } from "reactstrap";
import { medication_cus_content } from "../helper/index";
import banner from "../assets/images/form-banners/banner1/banner-img.png";
export default function PainManagement(props) {
  return (
    <>
      <Head>
        <title>{props.websiteTitle} | Pain Management</title>
        <meta
          name="description"
          content={`${props.websiteTitle} Pain Management`}
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
                  Compounding offers personalized pain relief.
                </h1>
                <h6 className="subtitle text-justify">
                  <span className="text-info text-bold">
                    The Compounding Solution
                  </span>
                  <br />
                  Compounding is the preparation of customized medication. It
                  provides valuable benefits to many patients, including those
                  for whom dealing with chronic pain has become a way of life.
                  Because it’s personalized to the specific patient, compounded
                  medication can treat symptoms while avoiding certain side
                  effects. By working with a compounding pharmacist, your
                  physician can prescribe treatments tailored specifically for
                  your pain management needs.
                  <br />
                  <br />
                  <span className="text-info text-bold">
                    Alternative Dosage Forms
                  </span>
                  <br />
                  Some have difficulty taking pain medications in their
                  commercially available forms due to stomach irritation or
                  other side effects. Compounding can provide alternative
                  methods of delivery to make the process easier. Instead of a
                  capsule or tablet, a topical gel, cream or spray can be
                  compounded to be applied directly to the site of the pain and
                  absorbed through the skin. Also, dosage forms like nasal
                  sprays, custom-flavored troches that dissolve under the tongue
                  or suppositories are alternative possibilities.
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
                  Pharmacy compounding may help improve a patient’s quality of
                  life.
                </h1>
                <h6 className="subtitle text-justify">
                  <span className="text-info text-bold">
                    Combination Therapy
                  </span>
                  <br />
                  Some have difficulty taking pain medications in their
                  commercially available forms due to stomach irritation or
                  other side effects. Compounding can provide alternative
                  methods of delivery to make the process easier. Instead of a
                  capsule or tablet, a topical gel, cream or spray can be
                  compounded to be applied directly to the site of the pain and
                  absorbed through the skin. Also, dosage forms like nasal
                  sprays, custom-flavored troches that dissolve under the tongue
                  or suppositories are alternative possibilities.
                  <br />
                  <br />
                  <span className="text-info text-bold">
                    Strength Variations
                  </span>
                  <br />
                  Because patients vary in size, symptoms and pain tolerance,
                  commercially available medications sometimes may not provide
                  the appropriate dosage strength for an individual patient.
                  Through compounding, a physician and pharmacist can customize
                  the dosage to the exact amount the patient requires, and find
                  a dosage form that best suits the patient’s needs.
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
      </div>
    </>
  );
}
