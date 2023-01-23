/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import { footerMenus } from "../../helper/index";
import { TiLocation, TiPhone, TiMail } from "react-icons/ti";
const Footer = () => {
  return (
    <div className="footer4 b-t spacer bg-primary">
      <Container>
        <Row>
          {footerMenus.map((item, idx) => (
            <Col lg="3" md="6" className="m-b-30" key={idx}>
              <h5 className="text-white m-b-20 text-uppercase">
                {item.mainmenu}
              </h5>
              {item.lists.map((list, id) => (
                <div key={idx + "-" + id}>
                  <a href={list.path}>{list.name}</a>
                </div>
              ))}
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <hr className="m-b-30" />
        <Row>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="text-white m-b-20">
              {/* <TiLocation /> */}
              &nbsp; Address
            </h5>
            <p>
              THE MEDICINE SHOPPE PHARMACY #377
              <br />
              6610 132 Ave NW
              <br />
              Edmonton AB
            </p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="text-white m-b-20">
              {/* <TiPhone /> */}
              &nbsp; Phone
            </h5>
            <p>
              Office :{" "}
              <a id="link-pharmacy-detail-page-phone" href="tel:403.235.0888">
                ‭78070 57150‬
              </a>
              <br />
              Fax: ‭78070 57140‬
            </p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="text-white m-b-20">
              {/* <TiMail /> */}
              &nbsp; Email
            </h5>
            <p>
              Office :
              <a href="mailto:valayrajgor@gmail.com" className="link">
                &nbsp;valayrajgor@gmail.com
              </a>
              <br />
              Site :
              <a href="https://yegcompounding.com/" className="link">
                &nbsp;yegcompounding.com
              </a>
            </p>
          </Col>
          <Col lg="3" md="6">
            <h5 className="text-white m-b-20">Social</h5>
            <div className="footer-sq-icons">
              <Link href="https://www.facebook.com/medicineshoppecanada/">
                <a className="link">
                  <i className="fa fa-facebook"></i>
                </a>
              </Link>
              {/* <Link href="#">
                <a className="link">
                  <i className="fa fa-twitter"></i>
                </a>
              </Link>
              <Link href="#">
                <a className="link">
                  <i className="fa fa-google-plus"></i>
                </a>
              </Link>
              <Link href="#">
                <a className="link">
                  <i className="fa fa-youtube-play"></i>
                </a>
              </Link>
              <Link href="#">
                <a className="link">
                  <i className="fa fa-instagram"></i>
                </a>
              </Link> */}
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
                  <Link href="https://yegcompounding.com/">
                    <a className="link">yegcompounding.com</a>
                  </Link>
                </div>
                <div className="links ml-auto m-t-10 m-b-10">
                  <Link href="#">
                    <a className="p-10 p-l-0">Terms of Use</a>
                  </Link>
                  <Link href="#">
                    <a className="p-10">Legal Disclaimer</a>
                  </Link>
                  <Link href="#">
                    <a className="p-10">Privacy Policy</a>
                  </Link>
                  <a
                    href="https://storebucket.fra1.digitaloceanspaces.com/License77073.jpg"
                    target="_blank"
                    className="p-10"
                  >
                    View License
                  </a>
                </div>
              </div>
              <div className="links font-14 d-flex flex-row-reverse">
                <a
                  href="https://storebucket.fra1.digitaloceanspaces.com/PatientConcernPoster.pdf"
                  target="_blank"
                >
                  Click here to view the Alberta College of Pharmacy Patient
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
