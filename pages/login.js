import Head from "next/head";
import React from "react";
import {
    Row,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Button,
} from "reactstrap";

export default function Login() {
    const handleLogin = () => {
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
                                            <h1 className="title">Login</h1>
                                            <Form>
                                                <Row>
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
                                                        <Button
                                                            onClick={handleLogin}
                                                            type="submit"
                                                            className="btn btn-danger-gradiant m-t-20 btn-arrow"
                                                        >
                                                            Login
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