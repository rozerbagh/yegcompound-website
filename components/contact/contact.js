import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import validator from "validator";
import Image from "next/image";
import {
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Button,
  Alert,
} from "reactstrap";
import { toast } from "react-toastify";
import Map from "./Map";
import profilepic from "../../assets/images/landingpage/profile-pic.jpg";
const ContactComponent = (props) => {
  const [formInputs, setFormInputs] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });
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
      timing: "CLOSED",
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
  const [successMessage, setSuccessMessage] = useState(null);
  useEffect(() => {
    emailjs.init("S09-WBx17FUpA9z5D");
    console.log(emailjs);
  }, []);
  const handleFormSubmit = (e) => {
    e.preventDefault();

    try {
      emailjs
        .send("service_pcdrk86", "template_lcwvb0c", {
          from_name: formInputs.name,
          to_name: "Valay Rajgor",
          subject: formInputs.subject,
          message: formInputs.message,
          reply_to: formInputs.email,
          person_email: formInputs.email,
        })
        .then(
          function (response) {
            console.log("SUCCESS!", response, response.status, response.text);
            setSuccessMessage("Thanks for contacting, Our team will reach us");
            setTimeout(() => {
              setSuccessMessage(null);
            }, 5000);
            setFormInputs((ps) => ({
              ...ps,
              name: "",
              email: "",
              subject: "",
              message: "",
            }));
            toast.success("Thanks for contacting us, Our team will reach us");
          },
          function (err) {
            console.log("FAILED...", err);
          }
        );
    } catch (err) {}
  };
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
                <Col lg="6">
                  <div className="contact-box p-r-40">
                    <h4 className="title">Quick Contact</h4>
                    <Form onSubmit={handleFormSubmit}>
                      <Row>
                        <Col lg="12">
                          <FormGroup className="m-t-15">
                            <Input
                              type="text"
                              placeholder="Name"
                              value={formInputs.name}
                              onChange={(e) =>
                                setFormInputs((ps) => ({
                                  ...ps,
                                  name: e?.target?.value,
                                }))
                              }
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup className="m-t-15">
                            <Input
                              type="email"
                              placeholder="Email"
                              value={formInputs.email}
                              onChange={(e) =>
                                setFormInputs((ps) => ({
                                  ...ps,
                                  email: e?.target?.value,
                                }))
                              }
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup className="m-t-15">
                            <Input
                              type="text"
                              placeholder="Subject"
                              value={formInputs.subject}
                              onChange={(e) =>
                                setFormInputs((ps) => ({
                                  ...ps,
                                  subject: e?.target?.value,
                                }))
                              }
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup className="m-t-15">
                            <Input
                              type="textarea"
                              name="text"
                              placeholder="Message"
                              value={formInputs.message}
                              onChange={(e) =>
                                setFormInputs((ps) => ({
                                  ...ps,
                                  message: e?.target?.value,
                                }))
                              }
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12" className="d-flex align-items-center">
                          <Button
                            type="submit"
                            className="btn btn-danger-gradiant m-t-20 btn-arrow"
                          >
                            <span>
                              {" "}
                              Submit <i className="ti-arrow-right"></i>
                            </span>
                          </Button>
                          &nbsp;
                          {successMessage ? (
                            <div className="m-t-20">
                              <Alert>{successMessage}</Alert>
                            </div>
                          ) : null}
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>
                <Col lg="6">
                  <div className="detail-box p-40 bg-primary">
                    <h3 className="text-white">{props.websiteTitle}</h3>
                    <p className="text-white m-t-30 op-8">
                      Office :{" "}
                      <a
                        className="text-white"
                        id="link-pharmacy-detail-page-phone"
                        href="tel:78070 57150"
                      >
                        78070 57150
                      </a>
                      <br />
                      Fax: 78070 57150
                      <br />
                      <a
                        href="mailto:yegc@gmail.com"
                        className="text-white link"
                      >
                        yegc@gmail.com
                      </a>
                    </p>
                    <p className="text-white op-8">
                      THE MEDICINE SHOPPE PHARMACY #377
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
        <Row className="align-items-baseline">
          <Col xs="12" md="10">
            <h1 className="text-primary">{props.websiteTitle}</h1>
            <h2 className="text-primary title d-flex align-items-center">
              Pharmacist Owner : &nbsp;
              <a href="mailto:valayrajgor.@gmail.com">Valay Rajgor</a>
              &nbsp;
              <Image
                src={profilepic}
                alt="valay rajgor"
                width={"100px"}
                height="100px"
              />
            </h2>
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
          <Col xs="12" md="7">
            <h4 className="text-primary">Location</h4>
            <Map />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactComponent;
