import Link from "next/link";
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
  const [comments, setComments] = useState("");
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
      label: "Qunatity (gram - gm)",
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
      selected_ing_packsize: "",
      selected_ing_price: "",
      selected_name: "",
    },
  ]);
  const [setting, setSetting] = useState({
    markup: 80,
    rebate: 20,
    labour_hour_rate: 35,
    container_cost: 2,
    delivery_fee: 30,
    setting_name: "compound",
  });

  const fetchSettings = () => {
    const token = cookies?.auth?.token;
    axios
      .get(fetchSetting, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then(({ data }) => {
        console.log(data.data[0]);
        setSetting((ps) => ({
          ...ps,
          markup: data.data[0].markup,
          rebate: data.data[0].rebate,
          labour_hour_rate: data.data[0].labour_hour_rate,
          container_cost: data.data[0].container_cost,
          delivery_fee: data.data[0].delivery_fee,
        }));
        setFormValues((ps) => ({
          ...ps,
          rebate: {
            ...ps.rebate,
            value: data.data[0].rebate,
          },
        }));
      })
      .catch((error) => {});
  };
  useEffect(() => {
    fetchSettings();
  }, []);
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
      const { name, value } = event.target;
      console.log(value, "handleIngredientChange");
      let updateForm = [...ingredientForm];
      if (controlType === formConstant.orders.ingredient) {
        updateForm[index].value = value;
        updateForm[index].selected_ing_packsize = JSON.parse(value).pack_size;
        updateForm[index].selected_ing_price = JSON.parse(value).price;
        updateForm[index].selected_name = JSON.parse(value).name;
      } else if (controlType === formConstant.orders.percentage) {
        updateForm[index].percent = value;
      }
      setIngredientForm(updateForm);
    },
    [ingredientForm]
  );

  const handleAddIngredient = (e) => {
    const updateForm = [...ingredientForm];
    updateForm.push({
      value: "",
      ingredients: ingredients,
      percent: "",
      selected_ing_packsize: "",
      selected_ing_price: "",
      selected_name: "",
    });
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
      const ingredients = [];
      Object.keys(ingredientForm).map((ele) => {
        if (
          ingredientForm[ele].value != "" &&
          ingredientForm[ele].value != undefined &&
          ingredientForm[ele].value != null
        ) {
          ingredients.push({
            ...ingredientForm[ele],
            ...JSON.parse(ingredientForm[ele].value),
            percentage: ingredientForm[ele].percent,
          });
        }
      });
      const sumOfAllIngredients = addIngredientsCost(
        ingredients,
        formValues.quantity.value
      );
      console.log(
        "::: sumOfAllIngredients :::",
        sumOfAllIngredients,
        ingredients
      );
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
      const containerCost = setting.container_cost || 2;
      const deliveryFee = setting.delivery_fee || 30;
      const markup = setting.markup;
      const rebate = setting.rebate;
      const labourCost = setting.labour_hour_rate * 0.5; // hour * rate;
      const restAllValues = restAllCalculations(
        sumIngredients,
        markup,
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

  const ingredeintsvalidations = (ing_data = []) => {
    const retunArr = ing_data.filter(
      (ele) => ele.value === "" || ele.percent === "" || ele.percent === 0
    );
    if (retunArr.length > 0) {
      return {
        data: ing_data,
        filterData: retunArr,
        valid: false,
      };
    } else {
      return {
        data: [],
        filterData: [],
        valid: true,
      };
    }
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    const ingredients = [];
    const validIngredients = ingredeintsvalidations(ingredientForm);
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
      comments: comments,
    };
    debugger;
    console.log(orderDetails);
    axios
      .post(createOrders, orderDetails, {
        headers: { authorization: `bearer ${cookies?.auth?.token}` },
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
                  <option value={JSON.stringify(ingredient)} key={idx}>
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
                value={ingInput.percent || ""}
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
          <Label>Total Price (CAD)</Label>
          <Input
            value={customerInfoPay.totalPrice}
            disabled={true}
            valid={true}
          />
        </Col>
        {/* <Col xs={12} sm={12} md={6} lg={6}>
          <Label>CA. $ Need To Pay</Label>
          <Input
            value={customerInfoPay.needToPay}
            disabled={true}
            valid={true}
          />
        </Col> */}
      </Row>
      <br />
      <Row>
        <Col xs={12}>
          <Label>Comments</Label>
          <Input
            placeholder="Enter comments or any additional message for this orders"
            type="textarea"
            name="comments"
            id="comments"
            value={comments}
            onChange={(e) => {
              const { name, value } = e.target;
              setComments(value);
            }}
          />
        </Col>
      </Row>
      <br />
      <div className="w-100 d-flex flex-row">
        <div className="subtitle">
          If you encounter any pricing issues, require assistance with
          formulation, or need any other kind of help, please do not hesitate to
          contact us at 780-705-7150.
        </div>
        {/* <Link href={"/contact"}>Contact Us</Link> */}
      </div>
      <div className="w-100 d-flex flex-row-reverse">
        <Button
          type="submit"
          color="success"
          disabled={!ingredeintsvalidations(ingredientForm).valid}
        >
          Place Orders
        </Button>
      </div>
    </Form>
  );
}

export default PlaceOrder;
