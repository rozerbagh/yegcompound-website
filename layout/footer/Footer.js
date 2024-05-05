/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import { footerMenus } from "../../helper/index";
import { TiLocation, TiPhone, TiMail } from "react-icons/ti";
const Footer = ({ ...props }) => {
  return (
    <div className="footer4 b-t spacer bg-primary">
      <Container>
        <Row>
          <Col lg="5" md="5" className="m-b-30">
            <h5 className="text-white m-b-20">
              {/* <TiLocation /> */}
              Address
            </h5>
            <p>
              THE MEDICINE SHOPPE PHARMACY #377
              <br />
              6610 132 Ave NW
              <br />
              Edmonton, (Alberta), T5C 0A2
            </p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="text-white m-b-20">
              {/* <TiPhone /> */}
              Phone
            </h5>
            <p>
              Office :{" "}
              <a id="link-pharmacy-detail-page-phone" href="tel:7807057150">
                ‭780 705 7150‬
              </a>
              <br />
              Fax: ‭780 705 7140‬
            </p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="text-white m-b-20">
              {/* <TiMail /> */}
              Email
            </h5>
            <p>
              Office :
              <Link legacyBehavior href="mailto:valayrajgor@gmail.com">
                <a className="link">&nbsp;valayrajgor@gmail.com</a>
              </Link>
              <br />
              Site :
              <Link legacyBehavior href="https://yegcompounding.com/">
                <a className="link">&nbsp;yegcompounding.com</a>
              </Link>
            </p>
          </Col>
          <Col lg="1" md="6">
            <h5 className="text-white m-b-20">Social</h5>
            <div className="footer-sq-icons">
              <Link
                legacyBehavior
                href="https://www.facebook.com/medicineshoppecanada/"
              >
                <a className="link">
                  <i className="fa fa-facebook"></i>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
        <div className="f4-bottom-bar">
          <Row>
            <Col md="12">
              <div className="d-flex font-14">
                <div className="m-t-10 m-b-10 copyright">
                  Copyrights &nbsp; {new Date().getFullYear()} &nbsp; All Rights
                  Reserved by{" "}
                  <Link legacyBehavior href="https://yegcompounding.com/">
                    <a className="link">yegcompounding.com</a>
                  </Link>
                </div>
                <div className="links ml-auto m-t-10 m-b-10">
                  <Link legacyBehavior href="#">
                    <a className="p-10 p-l-0">Terms of Use</a>
                  </Link>
                  <Link legacyBehavior href="#">
                    <a className="p-10">Legal Disclaimer</a>
                  </Link>
                  <Link legacyBehavior href="#">
                    <a className="p-10">Privacy Policy</a>
                  </Link>
                  <Link
                    legacyBehavior
                    href="https://storebucket.fra1.digitaloceanspaces.com/License77073.jpg"
                  >
                    <a target="_blank" className="p-10">
                      View License
                    </a>
                  </Link>
                </div>
              </div>
              <div className="links font-14 d-flex flex-row-reverse">
                <Link
                  legacyBehavior
                  href="https://storebucket.fra1.digitaloceanspaces.com/PatientConcernPoster.pdf"
                  target="_blank"
                >
                  <a>
                    Click here to view the Alberta College of Pharmacy Patient
                  </a>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
