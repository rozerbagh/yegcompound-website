/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/image";
import img1 from "../../assets/images/features/feature48/app-store.png";
import img2 from "../../assets/images/features/feature48/play-store.png";

const C2aComponent = () => {
    return (
        <div>
            <div className="mini-spacer bg-info text-white c2a7">
                <Container>
                    <div className="d-flex">
                        <div className="display-7 align-self-center">
                            Are you happy with what we offer?
                        </div>
                        <div className="ml-auto m-t-10 m-b-10">
                            <button className="btn btn-outline-light btn-md">
                                Ask for more details
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="spacer feature42 bg-danger-gradiant">
                <Container>
                    <Row className="justify-content-center wrap-feature49-box">
                        <Col lg="7" md="10" className="text-center">
                            <h2 className="title text-white">
                                Grab our IOS or Android App from Stores
                            </h2>
                            <h6 className="subtitle text-white op-7 m-b-20">
                                You can relay on our amazing features list and also our customer
                                services will be great experience for you without doubt and in
                                no-time.
                            </h6>
                            <a href="https://itunes.apple.com/ca/app/medicine-shoppe-canada/id1096669439" className="m-b-20">
                                <Image src={img1} alt="img" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.medicineshoppe.android&hl=en" className="m-b-20">
                                <Image src={img2} alt="img" />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default C2aComponent;
