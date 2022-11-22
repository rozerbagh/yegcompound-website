import React, { useState, useCallback, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Row, Col, Button, Input, Form, Label } from "reactstrap";
import { formConstant, orderStatus } from "../../helper/index";
import {
    addIngredientsCost,
    restAllCalculations,
} from "../../helper/calculation";
import { createOrders, fetchSetting } from "../../services/apis";
import ingredients from "../../helper/ingredients.json";

function PlaceOrder() {
    const [cookies, setCookie] = useCookies(["auth", "orders"]);
    const [formValues, setFormValues] = useState({
        compoundname: {
            label: "Compound Name",
            value: "",
            valid: false,
            type: "text",
            name: "compoundname",
            validfunc: (val) => val.length >= 3,
            disabled: false,
        },
        rebate: {
            label: "Rebate %",
            value: "20",
            valid: true,
            type: "text",
            name: "rebate",
            validfunc: (val) => parseInt(val.length) >= 0,
            disabled: true,
        },
        quantity: {
            label: "Qunatity",
            value: "",
            valid: false,
            type: "number",
            name: "quantity",
            validfunc: (val) => val.length >= 0,
            disabled: false,
        },
    });
    const [ingredientForm, setIngredientForm] = useState([
        {
            value: "",
            ingredients: ingredients,
            percent: "",
        },
    ]);
    const [setting, setSetting] = useState({
        markup: 80,
        rebate: 20,
        labour_hour_rate: 35,
        container_cost: 2,
        delivery_fee: 30,
        setting_name: "compound",
    })
    const _000 = {

    }

    const fetchSettings = () => {
        const token = cookies?.auth?.token;
        axios
            .get(fetchSetting, {
                headers: { Authorization: `bearer ${token}` },
            })
            .then(({ data }) => {
                debugger;
                console.log(data.data[0]);
                setSetting(ps => ({
                    ...ps,
                    markup: data.data[0].markup,
                    rebate: data.data[0].rebate,
                    labour_hour_rate: data.data[0].labour_hour_rate,
                    container_cost: data.data[0].container_cost,
                    delivery_fee: data.data[0].delivery_fee,
                }))
                setFormValues((ps) => ({
                    ...ps,
                    rebate: {
                        ...ps.rebate,
                        value: data.data[0].rebate,
                    }
                }))
            })
            .catch((error) => { });
    };
    useEffect(() => {
        fetchSettings();
    }, [])
    const handleInputChange = useCallback(
        (e, controlName) => {
            console.log(controlName);
            setFormValues((prevState) => ({
                ...prevState,
                [controlName]: {
                    ...prevState[controlName],
                    value: e.target.value,
                    valid: prevState[controlName].validfunc(e.target.value),
                },
            }));
        },
        [formValues.compoundname, formValues.quantity, formValues.rebate]
    );

    const handleIngredientChange = useCallback(
        (event, index, controlType) => {
            let updateForm = [...ingredientForm];
            if (controlType === formConstant.orders.ingredient) {
                updateForm[index].value = event.target.value;
            } else if (controlType === formConstant.orders.percentage) {
                updateForm[index].percent = event.target.value;
            }
            setIngredientForm(updateForm);

            const ingredients = [];
            ingredients.push(JSON.parse(event.target.value));
            window.ingredients = ingredients;
        },
        [ingredientForm]
    );

    const handleAddIngredient = (e) => {
        const updateForm = [...ingredientForm];
        updateForm.push({ value: "", ingredients: ingredients, percent: "" });
        setIngredientForm(updateForm);
    };

    const handleRemoveIngredient = (e, idx) => {
        const updateForm = [...ingredientForm];
        updateForm.splice(idx, 1);
        setIngredientForm(updateForm);
    };

    const [customerInfoPay, setCustomerInfoPay] = useState({
        markup: 0,
        subTotal: 0,
        franchiseFee: 0,
        costToBuyer: 0,
        rebaate: 0,
        totalPrice: 0,
        needToPay: 0,
    });
    const handleSumOfAllIngredients = () => {
        if (
            formValues.quantity.value != "" &&
            parseInt(formValues.quantity.value) > 0 &&
            ingredientForm[0].value != ""
        ) {
            debugger;
            const ingredients = [];
            Object.keys(ingredientForm).map((ele) => {
                if (
                    ingredientForm[ele].value != "" &&
                    ingredientForm[ele].value != undefined &&
                    ingredientForm[ele].value != null
                ) {
                    debugger;
                    ingredients.push({
                        ...JSON.parse(ingredientForm[ele].value),
                        percentage: ingredientForm[ele].percent,
                    });
                }
            });
            const sumOfAllIngredients = addIngredientsCost(
                ingredients,
                formValues.quantity.value
            );
            debugger;
            console.log("::: sumOfAllIngredients :::", sumOfAllIngredients);
            // setCostOfAllIngredients(sumOfAllIngredients);
            window.sumOfAllIngredients = sumOfAllIngredients;
            return sumOfAllIngredients;
        } else {
            return 0;
        }
    };
    const handleCalculatePrice = (e) => {
        const sumIngredients = handleSumOfAllIngredients();
        if (sumIngredients > 0) {
            const containerCost = setting.container_cost;
            const deliveryFee = setting.delivery_fee;
            const profit = setting.markup;
            const rebate = setting.rebate;
            const labourCost = setting.labour_hour_rate * 10; // hour * rate;
            const restAllValues = restAllCalculations(
                sumIngredients,
                profit,
                labourCost,
                containerCost,
                deliveryFee,
                rebate
            );

            console.log(":::: restAllValues ::::", restAllValues);
            setCustomerInfoPay(restAllValues);
        } else {
            alert("ingredeints are not added");
        }
    };

    const handleOrderSubmit = (e) => {
        e.preventDefault();
        const ingredients = [];
        Object.keys(ingredientForm).map((ele) =>
            ingredients.push({
                ...JSON.parse(ingredientForm[ele].value),
                percent: parseInt(ingredientForm[ele].percent),
            })
        );
        const orderDetails = {
            user: cookies?.auth?.userId,
            compound_name: formValues.compoundname.value,
            quantity: formValues.quantity.value,
            quantity_unit: "gm",
            ingredients: ingredients,
            total_price: customerInfoPay.totalPrice,
            need_to_pay: customerInfoPay.needToPay,
            markup: customerInfoPay.markup,
            franchiseFee: customerInfoPay.franchiseFee,
            costToBuyer: customerInfoPay.costToBuyer,
            rebaate: customerInfoPay.rebaate,
            status: orderStatus.order,
        };
        axios
            .post(createOrders, orderDetails, {
                headers: { authorization: cookies?.auth?.token },
            })
            .then(({ data }) => {
                alert(data.message);
                console.log(data);
                setCookie("orders", data.data);
            })
            .catch((err) => {
                alert("order has not been placed");
            });
    };
    return (
        <Form onSubmit={handleOrderSubmit}>
            <Row>
                {Object.keys(formValues).map((input, key) => (
                    <Col xs={12} sm={12} md={6} lg={6} key={key}>
                        <Label>{formValues[input].label}</Label>
                        <Input
                            type={formValues[input].type}
                            name={formValues[input].name}
                            valid={formValues[input].valid}
                            value={formValues[input].value || ""}
                            onChange={(e) => handleInputChange(e, input)}
                            disabled={formValues[input].disabled}
                        />
                        <br />
                    </Col>
                ))}
            </Row>
            <hr />
            <Row>
                <Col xs={5} className="d-flex align-items-center my-2">
                    <h2>Ingredients</h2>&nbsp;&nbsp;
                    <Button onClick={handleAddIngredient} color="primary">
                        Add Ingredients
                    </Button>
                </Col>
                <Col xs={5} className="d-flex align-items-center my-2">
                    <h2>Percentage</h2>
                </Col>
                <br />
            </Row>
            <Row className="my-2 d-flex align-items-center">
                {ingredientForm.map((ingInput, idx) => (
                    <>
                        <Col
                            xs={12}
                            sm={12}
                            md={5}
                            lg={5}
                            key={idx + ingInput.value}
                            className="my-1"
                        >
                            <Input
                                type="select"
                                name="select"
                                id={"ingredients-select-" + idx}
                                value={ingInput.value}
                                onChange={(e) =>
                                    handleIngredientChange(e, idx, formConstant.orders.ingredient)
                                }
                            >
                                {ingInput.ingredients.map((ingredient, idx) => (
                                    <option value={JSON.stringify(ingredient)}>
                                        {ingredient.name}
                                    </option>
                                ))}
                            </Input>
                        </Col>
                        <Col
                            xs={12}
                            sm={12}
                            md={5}
                            lg={5}
                            key={idx + ingInput.value + "-percent"}
                            className="my-1"
                        >
                            <Input
                                value={ingInput.percent}
                                onChange={(e) =>
                                    handleIngredientChange(e, idx, formConstant.orders.percentage)
                                }
                            />
                        </Col>
                        <Col xs={12} md={2} className="my-1">
                            <Button
                                color="danger"
                                onClick={(e) => handleRemoveIngredient(e, idx)}
                            >
                                Remove
                            </Button>
                        </Col>
                    </>
                ))}
            </Row>
            <hr />
            <div className="w-100 d-flex flex-row-reverse">
                <Button type="button" color="info" onClick={handleCalculatePrice}>
                    Calculate The prices
                </Button>
            </div>
            <hr />
            <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <Label>Total Price</Label>
                    <Input
                        value={customerInfoPay.totalPrice}
                        disabled={true}
                        valid={true}
                    />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <Label>Need To Pay</Label>
                    <Input
                        value={customerInfoPay.needToPay}
                        disabled={true}
                        valid={true}
                    />
                </Col>
            </Row>
            <br />
            <div className="w-100 d-flex flex-row-reverse">
                <Button type="submit" color="success">
                    Place Orders
                </Button>
            </div>
        </Form>
    );
}

export default PlaceOrder;
