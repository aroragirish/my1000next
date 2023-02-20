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
  const [selectedBusinessId, setSelectedBusinessId] = useState();

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
      router.push('/my-orders');
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
        <Table
          bordered
          style={{
            marginTop: "100px",
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
                    {
                      order.status !== 'Pending' ? (
                        null
                      ) : (

                        <Button onClick={() => cancelOrder(order._id)} color="danger" className="m-1" size="sm">
                          <strong> Cancel Order</strong>
                        </Button>
                      )
                    }
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
      {/* <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Delete Business</ModalHeader>
        <ModalBody>Are you sure? You want to delete this business?</ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {
              deleteBusiness(selectedBusinessId).then((res) => {
                getBusinessesByUser().then((res) => {
                  setBusinesses(res.data);
                  toggle();
                });
              });
            }}
            color="danger"
          >
            Delete
          </Button>{" "}
          <Button outline color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal> */}
    </div>
  );
};

export default YourOrders;
