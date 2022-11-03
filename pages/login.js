import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
import { useCookies } from "react-cookie";
import validator from "validator"
import { login } from "../services/apis";
export default function Login() {
    const [userData, setUserData] = useState({
        email: {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "Enter email",
            value: "",
            valid: true,
            validFunc: (val) => validator.isEmail(val),
            validText: "Not a valid Email eg: abc@example.com"
        },
        password: {
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "Enter Password",
            value: "",
            valid: true,
            validFunc: (val) => validator.isStrongPassword(val),
            validText: "contains at least 8 charracters , 1 capital, 1 small , 1 symbol and 1 no."
        },
    })
    const [cookies, setCookie, removeCookie] = useCookies(['auth']);
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(login)
        axios.post(login, {
            email: userData.email.value,
            password: userData.password.value,
        }).then(({ data }) => {
            console.log(data)
            setCookie("auth", data)
            localStorage.setItem("user_data", JSON.stringify(data))
        }).catch(err => {
            console.log(err.response)
        });

    }

    useEffect(() => {
        console.log(cookies.auth)
    }, [cookies.auth])

    const handleInputChange = (e, controlName) => {
        console.log(controlName)
        setUserData(prevState => ({
            ...prevState,
            [controlName]: {
                ...prevState[controlName],
                value: e.target.value,
                valid: prevState[controlName].validFunc(e.target.value)
            }

        }))
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
                                                    {Object.keys(userData).map((key, idx) => <Col lg="12">
                                                        <FormGroup className="m-t-15">
                                                            <Input
                                                                key={idx}
                                                                type={userData[key].type}
                                                                placeholder={userData[key].placeholder}
                                                                value={userData[key].value}
                                                                name={userData[key].name}
                                                                onChange={(e) => handleInputChange(e, key)}
                                                            />
                                                            {!userData[key].valid && <label>{userData[key].validText}</label>}
                                                        </FormGroup>
                                                    </Col>)}
                                                    <Col lg="12">
                                                        <Button
                                                            onClick={handleLogin}
                                                            type="submit"
                                                            className="btn btn-danger-gradiant m-t-20 btn-arrow"
                                                        >
                                                            Login
                                                        </Button>
                                                    </Col>
                                                    <Col lg="12" className="m-0 justify-content-between">
                                                        <p>Do not have an account </p>
                                                        <Link href="/signup">Singup here</Link>
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