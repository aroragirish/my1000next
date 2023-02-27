import Link from "next/link";
import router from "next/router";
import React, { useEffect, useState } from "react";
import {
    Table,
    FormGroup,
    Input,
    Button,
    Card,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Label,
    Form,
} from "reactstrap";
import OrderDetailsModal from "../components/custom/OrderDetailsModal";
import { getAllOrders, rejectOrder, approveOrderApi } from "../services/orderService";

const YourOrders = () => {
    const [orders, setOrders] = useState([]);
    const [selectedOrderId, setSelectedOrderId] = useState();
    const [selectedOrder, setSelectedOrder] = useState();

    const [rejectModal, setRejectModal] = useState(false);
    const [approveModal, setApproveModal] = useState(false);

    const [openDetails, setOpenDetails] = useState(false);

    const [rejectText, setRejectText] = useState('');

    const toggleReject = () => setRejectModal(!rejectModal);
    const toggleApprove = () => setApproveModal(!approveModal);

    const approveOrder = () => {
        approveOrderApi(selectedOrderId).then((res) => {
            router.push('/dashboard');
        }).catch(() => {
            router.push('/error');
        });
    }
    useEffect(() => {
        getAllOrders().then((res) => {
            setOrders(res.data);
        }).catch(() => {
            router.push('/error');
        });
    }, []);
    const rejectOrderApi = (id) => {
        const body = {
            id,
            rejectText
        }
        rejectOrder(body).then((res) => {
            getAllOrders().then((res) => {
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
                    No orders found
                </h1>
            ) : (
                <><h1
                    style={{
                        marginTop: "50px",
                    }}
                    className="text-center"
                >
                    All Orders
                </h1>
                    <Table
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
                                    <tr className="hover-list" key={order.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>
                                            <a onClick={() => {
                                                setSelectedOrder(order);
                                                setOpenDetails(true);
                                            }} href="#">
                                            {order?.business?.title}
                                            </a>
                                        </td>
                                        <td>{order?.business?.category?.toUpperCase()}</td>
                                        <td>{order?.business?.amountInvested}</td>
                                        <td>{order?.business?.minInvestment}</td>
                                        <td>{order.status}</td>
                                        <td className="inline-flex">
                                            {order.status !== 'Pending' ? (
                                                null
                                            ) : (
                                                <>
                                                    <Button onClick={() => {
                                                        setSelectedOrderId(order._id);
                                                        toggleReject();
                                                    }} color="danger" className="m-1" size="sm">
                                                        <strong>Reject</strong>
                                                    </Button>
                                                    <Button onClick={() => {
                                                        setSelectedOrderId(order._id);
                                                        toggleApprove();
                                                    }} color="success" className="m-1" size="sm">
                                                        <strong>Approve</strong>
                                                    </Button>
                                                </>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </>
            )}
            <Modal isOpen={rejectModal} toggle={toggleReject}>
                <ModalHeader toggle={toggleReject}>Reject Order</ModalHeader>
                <ModalBody>
                    <p>
                    Please provide comment why this order is being rejected?
                    </p>
                    <Form onSubmit={() => {
                            rejectOrderApi(selectedOrderId);
                        }}>
                        <FormGroup>
                            <Label>
                                Comment*
                            </Label>
                            <Input
                                type="textarea"
                                value={rejectText}
                                onChange={(e) => setRejectText(e.target.value)}
                                required
                            />
                        </FormGroup>
                        <ModalFooter>
                            <Button
                                type="submit"
                                color="danger"
                            >
                                Reject
                            </Button>{" "}
                            <Button outline color="secondary" onClick={() => {
                                setSelectedOrderId();
                                toggleReject();
                            }}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </Form>
                </ModalBody>
            </Modal>
            <Modal isOpen={approveModal} toggle={toggleApprove}>
                <ModalHeader toggle={toggleApprove}>Approve Order</ModalHeader>
                <ModalBody>
                    Are you sure? You want to approve this order?
                </ModalBody>                
                <ModalFooter>
                    <Button
                        onClick={approveOrder}
                        color="success"
                    >
                        Approve
                    </Button>{" "}
                    <Button outline color="secondary" onClick={() => {
                        setSelectedOrderId();
                        toggleApprove();
                    }}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
            {openDetails && <OrderDetailsModal open={true} order={selectedOrder} close={setOpenDetails} />}
        </div>
    );
};

export default YourOrders;
