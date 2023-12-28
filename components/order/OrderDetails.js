import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Row, Col, Progress, Card } from "reactstrap";
import { useCookies } from "react-cookie";
import { fetchOrders } from "../../services/apis";
import ResponsiveCard from "../card/ResponsiveCard";
function OrderDetails(props) {
  const [cookies] = useCookies(["auth"]);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const url = fetchOrders(cookies.auth.userId);
    axios
      .get(url, { headers: { Authorization: "bearer " + cookies.auth.token } })
      .then(({ data }) => {
        setOrders(data.data);
      })
      .catch((err) => {
        setOrders([]);
      });
  }, []);
  return (
    <>
      <Row>
        {orders.length > 0 &&
          orders.map((order, id) => (
            <Col xs={12} key={id} className="p-2">
              <ResponsiveCard
                title={order.compound_name}
                subtitle={order.quantity + " " + order.quantity_unit}
                description={order.ingredients.map(
                  (e, i) => `${e.name}-${e?.percent}, `
                )}
                btnText="Cancel"
                btnColor="danger"
                handleClick={(e) => {
                  alert("Please contact to support team to cancel the order");
                }}
              />
              <Progress multi>
                {order.status === "pending" ? (
                  <Progress bar animated value={25} color="danger">
                    <span>
                      Ordered - {moment(order.createdAt).format("DD/MM/YYYY")}
                    </span>
                  </Progress>
                ) : order.status === "processing" ? (
                  <Progress bar color="blue" value={25}>
                    <span>
                      Processing -{" "}
                      {moment(order.updatedAt).format("DD/MM/YYYY")}
                    </span>
                  </Progress>
                ) : order.status === "info" ? (
                  <Progress bar animated color="blue" value={25}>
                    <span>
                      {" "}
                      Dispatched -{" "}
                      {moment(order.updatedAt).format("DD/MM/YYYY")}
                    </span>
                  </Progress>
                ) : (
                  <Progress bar color="success" value={25}>
                    <span>
                      Delivered - {moment(order.updatedAt).format("DD/MM/YYYY")}
                    </span>
                  </Progress>
                )}
              </Progress>
            </Col>
          ))}
      </Row>
    </>
  );
}

export default OrderDetails;
