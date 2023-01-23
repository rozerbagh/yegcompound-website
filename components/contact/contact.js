import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";

const ContactComponent = (props) => {
  const [storeTimings, setStoreTimings] = useState([
    {
      day: "Mon",
      timing: "09:00 AM - 05:00 PM",
      active: false,
      dayNum: 1,
    },
    {
      day: "Tue",
      timing: "09:00 AM - 05:00 PM",
      active: false,
      dayNum: 2,
    },
    {
      day: "Wed",
      timing: "09:00 AM - 05:00 PM",
      active: false,
      dayNum: 3,
    },
    {
      day: "Thur",
      timing: "09:00 AM - 05:00 PM",
      active: false,
      dayNum: 4,
    },
    {
      day: "Fri",
      timing: "09:00 AM - 05:00 PM",
      active: false,
      dayNum: 5,
    },
    {
      day: "Sat",
      timing: "09:00 AM - 05:00 PM",
      active: false,
      dayNum: 6,
    },
    {
      day: "Sun",
      timing: "CLOSED",
      active: false,
      dayNum: 0,
    },
  ]);

  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Contact Us</h1>
              {/* <h6 className="subtitle">
                Here you can check Demos we created based on WrapKit. Its quite
                easy to Create your own dream website &amp; dashboard in
                No-time.
              </h6> */}
            </Col>
          </Row>
        </Container>
      </div>
      <div className="contact1">
        <Row>
          <Container>
            <div className="spacer">
              <Row className="m-0">
                <Col lg="8">
                  <div className="contact-box p-r-40">
                    <h4 className="title">Quick Contact</h4>
                    <Form>
                      <Row>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input type="text" placeholder="name" />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input type="email" placeholder="email" />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup className="m-t-15">
                            <Input type="text" placeholder="subject" />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup className="m-t-15">
                            <Input
                              type="textarea"
                              name="text"
                              placeholder="message"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <Button
                            type="submit"
                            className="btn btn-danger-gradiant m-t-20 btn-arrow"
                          >
                            <span>
                              {" "}
                              Submit <i className="ti-arrow-right"></i>
                            </span>
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>
                <Col lg="4">
                  <div className="detail-box p-40 bg-primary">
                    <h2 className="text-white">{props.websiteTitle}</h2>
                    <p className="text-white m-t-30 op-8">
                      Office :{" "}
                      <a
                        className="text-white"
                        id="link-pharmacy-detail-page-phone"
                        href="tel:403.235.0888"
                      >
                        403.235.0888
                      </a>
                      <br />
                      Fax: 403.235.0878
                      <br />
                      <a
                        href="mailto:yegc@gmail.com"
                        className="text-white link"
                      >
                        yegc@gmail.com
                      </a>
                    </p>
                    <p className="text-white op-8">
                      THE MEDICINE SHOPPE PHARMACY #212
                      <br />
                      2905 17th Ave S E
                      <br />
                      Calgary, (Alberta), T2A 0P7
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </Row>
      </div>
      <Container>
        <Row className="align-items-center">
          <Col xs="12" md="10">
            <h2 className="text-primary">{props.websiteTitle}</h2>
            <h6 className="text-primary">
              Pharmacist Owner :{" "}
              <a href="mailto:valayrajgor.@gmail.com">Valay Rajgor</a>
            </h6>
          </Col>
          <Col xs="12" md="2">
            <h6 className="text-primary">Store #377</h6>
          </Col>
        </Row>
        <Row className="mt-30">
          <Col xs="12" md="5">
            <h4 className="text-primary">Store Timings</h4>
            {storeTimings.map((store, idx) => (
              <div
                key={idx}
                className="d-flex align-items-center justify-content-between"
              >
                <h6 className="text-primary text-uppercase text-700">
                  {store.day}{" "}
                </h6>
                <h6
                  className={
                    new Date().getDay() === store.dayNum
                      ? " text-danger"
                      : "text-primary"
                  }
                >
                  : {store.timing}
                </h6>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactComponent;
