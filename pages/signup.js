import Head from "next/head";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import validator from "validator";
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
import { signup } from "../services/apis";

export default function Login() {
    const [cookies, setCookie, removeCookie] = useCookies(["auth"]);
    const [userData, setUserData] = useState({
        fullname: {
            name: "fullname",
            label: "Name",
            type: "text",
            placeholder: "Enter fullname",
            value: "",
            valid: true,
            validFunc: (val) => val.length >= 3,
            validText: "enter atlease 3 characters",
        },
        email: {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "Enter email",
            value: "",
            valid: true,
            validFunc: (val) => validator.isEmail(val),
            validText: "Not a valid Email eg: abc@example.com",
        },
        password: {
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "Enter Password",
            value: "",
            valid: true,
            validFunc: (val) => validator.isStrongPassword(val),
            validText:
                "contains at least 8 charracters , 1 capital, 1 small , 1 symbol and 1 no.",
        },
        phoneno: {
            name: "phoneno",
            label: "Phone No.",
            type: "number",
            placeholder: "Enter phone no.",
            value: "",
            valid: true,
            validFunc: (val) => validator.isNumeric(val),
            validText: "Not a valid Email eg: abc@example.com",
        },
    });
    const [errorMsg, setErrorMsg] = useState(null);
    const [showPwd, setShowPwd] = useState(false);
    const handleInputChange = (e, controlName) => {
        console.log(controlName);
        setUserData((prevState) => ({
            ...prevState,
            [controlName]: {
                ...prevState[controlName],
                value: e.target.value,
                valid: prevState[controlName].validFunc(e.target.value),
            },
        }));
    };
    const handleSignup = (e) => {
        e.preventDefault();
        axios
            .post(signup, {
                username: userData.fullname.value,
                fullname: userData.fullname.value,
                email: userData.email.value,
                password: userData.password.value,
                phoneno: userData.phoneno.value,
                role: 0,
                status: 1,
                image: "https://storebucket.fra1.digitaloceanspaces.com/user.png",
            })
            .then(({ data }) => {
                console.log(data);
                setCookie("auth", data);
                localStorage.setItem("user_data", JSON.stringify(data));
                setErrorMsg(null);
                window.location.href = '/orders';
            })
            .catch((err) => {
                if (err.response) {
                    setErrorMsg(err.response.data.message);
                } else {
                    setErrorMsg("something went wrong");
                }
            });
    };
    const handleShowPassword = (e) => {
        setShowPwd(e.target.checked);
        if (e.target.checked) {
            setUserData(ps => ({
                ...ps,
                password: {
                    ...ps.password,
                    type: "text"
                }
            }))
        } else {
            setUserData(ps => ({
                ...ps,
                password: {
                    ...ps.password,
                    type: "password"
                }
            }))
        }
    };
    return (
        <>
            <Head>
                <title>Nikis Pharmacy | login</title>
                <meta name="description" content="Nikis Pharmacy Dispensary login form" />
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
                                            {errorMsg && <h6 className="text-dange">{errorMsg}</h6>}
                                            <Form onSubmit={handleSignup}>
                                                <Row>
                                                    {Object.keys(userData).map((key, idx) => (
                                                        <Col lg="12" key={idx}>
                                                            <FormGroup className="m-t-15">
                                                                <Input
                                                                    key={idx}
                                                                    type={userData[key].type}
                                                                    placeholder={userData[key].placeholder}
                                                                    value={userData[key].value}
                                                                    name={userData[key].name}
                                                                    onChange={(e) => handleInputChange(e, key)}
                                                                />
                                                                {!userData[key].valid && (
                                                                    <label>{userData[key].validText}</label>
                                                                )}
                                                            </FormGroup>
                                                        </Col>
                                                    ))}
                                                    <Col xs={12} className="w-100 d-flex justify-content-start">
                                                        <Input
                                                            addon
                                                            type="checkbox"
                                                            checked={showPwd}
                                                            onChange={handleShowPassword}
                                                        /> Show Password
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
