import React, { useState } from "react";
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
} from "reactstrap";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import Map from "./MapFrame";
import profilepic from "../../assets/images/landingpage/profile-pic.jpg";
import axios from "axios";
import { contactApi } from "../../services/apis";
const ContactComponent = (props) => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      fullname: "",
      subject: "",
      message: "",
    },
    onSubmit: (values) => {
      if (validator.isEmail(values.email)) {
        handleFormSubmit(values);
      }
    },
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

  const handleFormSubmit = (values) => {
    setLoading(true);
    const url = contactApi;
    axios
      .post(url, { ...values })
      .then(({ data }) => {
        console.log(data);
        alert(data.message);
        toast.success(data.message);
        setLoading(false);
      })
      .catch((err) => {
        alert("Unable to contact, something went wrong");
        toast.error("Unable to contact, something went wrong");
        setLoading(false);
      });
  };
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Contact Us</h1>
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
                    <Form onSubmit={formik.handleSubmit}>
                      <Row>
                        <Col lg="12">
                          <FormGroup className="m-t-15">
                            <Input
                              name="fullname"
                              type="text"
                              placeholder="Name"
                              onChange={formik.handleChange}
                              value={formik.values.fullname}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup className="m-t-15">
                            <Input
                              name="email"
                              type="email"
                              placeholder="Email"
                              onChange={formik.handleChange}
                              value={formik.values.email}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup className="m-t-15">
                            <Input
                              name="subject"
                              type="text"
                              placeholder="Subject"
                              onChange={formik.handleChange}
                              value={formik.values.subject}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup className="m-t-15">
                            <Input
                              name="message"
                              type="textarea"
                              placeholder="Message"
                              onChange={formik.handleChange}
                              value={formik.values.message}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12" className="d-flex align-items-center">
                          <Button
                            disabled={loading}
                            onClick={formik.handleSubmit}
                            onSubmit={formik.handleSubmit}
                            type="submit"
                            className="btn btn-success-gradiant m-t-20 btn-arrow"
                          >
                            <span>
                              {" "}
                              {loading ? "Sending..." : "Submit"}{" "}
                              <i className="ti-arrow-right"></i>
                            </span>
                          </Button>
                          &nbsp;
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
                        780 705 7150
                      </a>
                      <br />
                      Fax: 780 705 7150
                      <br />
                      <a
                        href="mailto:valayrajgor@gmail.com"
                        className="text-white link"
                      >
                        valayrajgor@gmail.com
                      </a>
                    </p>
                    <p className="text-white op-8">
                      THE MEDICINE SHOPPE PHARMACY #377
                      <br />
                      6610 132 Ave NW
                      <br />
                      Edmonton, (Alberta), T5C 0A2
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
          <Col xs="12" md="11">
            <h1 className="text-primary">{props.websiteTitle}</h1>
            <h3 className="text-primary title d-flex align-items-center">
              Pharmacist Manager & Owner : &nbsp;
              <a href="mailto:valayrajgor.@gmail.com">
                Valay Rajgor (MBA, B.Pharm, APA)
              </a>
              &nbsp;
              <Image
                src={profilepic}
                alt="valay rajgor"
                width={"100px"}
                height="100px"
              />
            </h3>
          </Col>
          <Col xs="12" md="1">
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
