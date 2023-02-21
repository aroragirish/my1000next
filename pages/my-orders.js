import Link from "next/link";
import router from "next/router";
import React, { useEffect, useState } from "react";
import {
  Table,
  Container,
  Row,
  ToastHeader,
  Button,
  Card,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { getMyorders, cancelOrderById } from "../services/orderService";

const YourOrders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState();

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  useEffect(() => {
    getMyorders().then((res) => {
      setOrders(res.data);
    }).catch(() => {
      router.push('/error');
    })
  }, []);
  const cancelOrder = (id) => {
    cancelOrderById(id).then((res) => {
      getMyorders().then((res) => {
        setOrders(res.data);
        router.push('/my-orders');
      }).catch(() => {
        router.push('/error');
      })
    }).catch(() => {
      router.push('/error');
    })
  }
  return (
    <div
      style={{
        minHeight: "350px",
        margin: "15%",
        marginBottom: "100px",
        overflowX: 'scroll'
      }}
      className="mt-5 pt-5"
    >
      {!orders.length ? (
        <h1
          style={{
            marginTop: "150px",
          }}
          className="text-center"
        >
          You don't have any Orders
        </h1>
      ) : (
        <><h1
          style={{
            marginTop: "50px",
          }}
          className="text-center"
        >
          Your Orders
        </h1><p className="text-center mt-5">
            <strong>
              *Orders placed with offline payment mode may take couple of days to complete
            </strong>
          </p><Table
          bordered
          style={{
            marginTop: "50px",
          }}
        >
            <thead className="text-center">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Category</th>
                <th>Amount Invested</th>
                <th>Min Investment</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {orders.map((order, index) => {
                return (
                  <tr key={order.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{order?.business?.title}</td>
                    <td>{order?.business?.category?.toUpperCase()}</td>
                    <td>{order?.business?.amountInvested}</td>
                    <td>{order?.business?.minInvestment}</td>
                    <td>{order.status}</td>
                    <td className="inline-flex">
                      {/* <Button className="text-info" color="link">
                  Edit
                </Button> */}
                      {order.status !== 'Pending' ? (
                        null
                      ) : (

                        <Button onClick={() => {
                          setSelectedOrderId(order._id);
                          toggle();
                        }} color="danger" className="m-1" size="sm">
                          <strong> Cancel Order</strong>
                        </Button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
      )}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Cancel Order</ModalHeader>
        <ModalBody>Are you sure? You want to cancel this order?</ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {
              cancelOrder(selectedOrderId);
            }}
            color="danger"
          >
            Cancel
          </Button>{" "}
          <Button outline color="secondary" onClick={() => {
            setSelectedOrderId();
            toggle();
          }}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default YourOrders;
