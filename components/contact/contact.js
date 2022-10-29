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

const ContactComponent = () => {
    return (
        <div>
            <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Contact Form</h1>
                            <h6 className="subtitle">
                                Here you can check Demos we created based on WrapKit. Its quite
                                easy to Create your own dream website &amp; dashboard in
                                No-time.
                            </h6>
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
                                    <div className="detail-box p-40 bg-info">
                                        <h2 className="text-white">Lemarchand Dispensary</h2>
                                        <p className="text-white m-t-30 op-8">
                                            (780) 482-3322
                                            <br />
                                            lemarchanddisp@gmail.com
                                        </p>
                                        <p className="text-white op-8">
                                            Suite 105, 11523 100 Avenue<br />
                                            Lemarchand Mansion<br />
                                            Edmonton, AB T5K 0J8
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </Row>
            </div>
        </div>
    );
};

export default ContactComponent;
