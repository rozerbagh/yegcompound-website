import Head from "next/head";
import React from "react";
import Link from "next/link";
import {
    Row,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Button,
} from "reactstrap";
import { useCookies } from "react-cookie";
export default function Login() {
    const [cookies, setCookie, removeCookie] = useCookies(['auth']);
    const handleSignup = () => {
        localStorage.setItem("token", "weerisFKGehoweuhiEtvBdyDKBH")
    }
    return (
        <>
            <Head>
                <title>Lemarchandi | login</title>
                <meta
                    name="description"
                    content="Lemarchandi Dispensary login form"
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
                                            <h1 className="title">Sign Up</h1>
                                            <Form>
                                                <Row>
                                                    <Col lg="12">
                                                        <FormGroup className="m-t-15">
                                                            <Input type="text" placeholder="full name" />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="12">
                                                        <FormGroup className="m-t-15">
                                                            <Input type="email" placeholder="email" />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="12">
                                                        <FormGroup className="m-t-15">
                                                            <Input type="password" placeholder="password" />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="12">
                                                        <FormGroup className="m-t-15">
                                                            <Input type="number" placeholder="phone no." />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="12">
                                                        <Button
                                                            onClick={handleSignup}
                                                            type="submit"
                                                            className="btn btn-danger-gradiant m-t-20 btn-arrow"
                                                        >
                                                            Signup
                                                        </Button>
                                                    </Col>
                                                    <Col lg="12" className="m-0 justify-content-between">
                                                        <p>Already have account !</p>
                                                        <Link href="/login">Please Login</Link>
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