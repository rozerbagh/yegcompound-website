import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
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
import { resetPassword } from "../services/apis";
import { toast } from "react-toastify";
export default function ForgotPassword(props) {
  const router = useRouter();
  const [showPwd, setshowPwd] = useState(false);
  const pwdformik = useFormik({
    initialValues: { newpwd: "", cnfpwd: "" },
    onSubmit: (values) => {
      console.log(values);
      const { token } = router.query;
      console.log(token);
      if (
        validator.isStrongPassword(values.newpwd) &&
        values.newpwd === values.cnfpwd
      ) {
        handleResetPassword(token, values.newpwd);
      } else {
        toast.error("Invalid Passord");
      }
    },
  });
  const handleResetPassword = (token, password) => {
    const url = resetPassword;
    axios
      .post(
        url,
        { password: password },
        { headers: { authorization: "Bearer " + token } }
      )
      .then((res) => {
        window.location.href = "/login";
      })
      .catch((err) => {});
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
                      <h1 className="title">Reset Password</h1>
                      <h6 className="text-secondary">
                        Enter your email to recieve the OTP to reset your
                        Password.
                      </h6>
                      <Form onSubmit={pwdformik.handleSubmit}>
                        <Row>
                          <Col lg="12">
                            <FormGroup className="m-t-15">
                              <Input
                                type={showPwd ? "text" : "password"}
                                placeholder="Enter new password"
                                name="newpwd"
                                value={pwdformik.values.newpwd}
                                onChange={pwdformik.handleChange}
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="12">
                            <FormGroup className="m-t-15">
                              <Input
                                type={showPwd ? "text" : "password"}
                                placeholder="Enter confirm password"
                                name="cnfpwd"
                                value={pwdformik.values.cnfpwd}
                                onChange={pwdformik.handleChange}
                              />
                            </FormGroup>
                          </Col>
                          <Col
                            xs={12}
                            className="w-100 flex justify-content-start"
                          >
                            <div>
                              <Input
                                addon
                                type="checkbox"
                                checked={showPwd}
                                onChange={(e) => setshowPwd(e.target.checked)}
                              />{" "}
                              &nbsp;Show Password
                            </div>
                          </Col>

                          <Col lg="12">
                            <Button
                              onClick={pwdformik.handleSubmit}
                              type="submit"
                              className="btn btn-success-gradiant m-t-20 btn-arrow"
                            >
                              Reset Password
                            </Button>
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
