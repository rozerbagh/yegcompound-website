import Head from "next/head";
import Link from "next/link";
import React, { useRef, useState } from "react";
import axios from "axios";
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
import validator from "validator";
import { sendOTP, verifyOTP, resetPassword } from "../services/apis";
import { toast } from "react-toastify";
export default function ForgotPassword(props) {
  const [loading, setLoading] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const emailformik = useFormik({
    initialValues: { email: "" },
    onSubmit: (values) => {
      console.log(values);
      if (validator.isEmail(values.email)) {
        handleSendOtp(values.email);
      } else {
        toast.error("Invalid Email");
      }
    },
  });
  const otpFormik = useFormik({
    initialValues: { otp: "" },
    onSubmit: (values) => {
      if (validator.isNumeric(values.otp)) {
        handleVerifyOtp(emailformik.values.email, values.otp);
      } else {
        toast.error("Invalid OTP");
      }
    },
  });
  const handleSendOtp = (email) => {
    setLoading(true);
    const url = sendOTP;
    axios
      .post(url, { email: email })
      .then(({ data }) => {
        console.log(data);
        setShowOtpInput(true);
        setLoading(false);
      })
      .catch((err) => {
        setShowOtpInput(false);
        setLoading(false);
      });
  };
  const handleVerifyOtp = (email, otp) => {
    setLoading(true);
    const url = verifyOTP;
    axios
      .post(url, { email: email, otp: otp })
      .then(({ data }) => {
        console.log(data);
        setLoading(false);
        window.location.href = "/reset-password?token=" + data.token;
      })
      .catch((err) => {
        toast.error("Unable to verify otp");
        setLoading(false);
      });
  };

  return (
    <>
      <Head>
        <title>{props.websiteTitle} | login</title>
        <meta
          name="description"
          content="The Medicine Shoppe Pharmacy #377 login form"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <div className="login">
          <Row>
            <Container>
              <div className="spacer">
                <Row className="m-0 justify-content-center">
                  <Col lg="6" className="text-center">
                    <div className="contact-box p-r-40">
                      <h1 className="title">Forgot Password</h1>
                      <h6 className="text-secondary">
                        Enter your email to recieve the OTP to reset your
                        Password.
                      </h6>
                      <Form onSubmit={emailformik.handleSubmit}>
                        <Row>
                          <Col lg="12">
                            <FormGroup className="m-t-15">
                              <Input
                                disabled={showOtpInput}
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={emailformik.values.email}
                                onChange={emailformik.handleChange}
                              />
                            </FormGroup>
                          </Col>
                          {showOtpInput ? (
                            <Col lg="12">
                              <FormGroup className="m-t-15">
                                <Input
                                  type="text"
                                  placeholder="Enter OTP"
                                  name="otp"
                                  value={otpFormik.values.otp}
                                  onChange={otpFormik.handleChange}
                                />
                              </FormGroup>
                            </Col>
                          ) : null}

                          <Col lg="12">
                            {showOtpInput ? (
                              <Button
                                disabled={loading}
                                onClick={otpFormik.handleSubmit}
                                type="submit"
                                className="btn btn-success-gradiant m-t-20 btn-arrow"
                              >
                                {loading ? "VERFIYING..." : "VERIFY OTP"}
                              </Button>
                            ) : (
                              <Button
                                disabled={loading}
                                onClick={emailformik.handleSubmit}
                                type="submit"
                                className="btn btn-success-gradiant m-t-20 btn-arrow"
                              >
                                {loading ? "SENDING..." : "SEND OTP"}
                              </Button>
                            )}
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </Row>
        </div>
      </>
    </>
  );
}
