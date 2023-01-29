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
import {
  deleteBusiness,
  getBusinessesByUser,
} from "../services/businessService";

const YourBusinesses = () => {
  const [businesses, setBusinesses] = useState([]);
  const [selectedBusinessId, setSelectedBusinessId] = useState();

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  useEffect(() => {
    getBusinessesByUser().then((res) => {
      setBusinesses(res.data);
    }).catch(() => {
      router.push('/error');
  })
  }, []);
  return (
    <div
      style={{
        minHeight: "350px",
        margin: "15%",
        marginBottom: "100px",
      }}
      className="mt-5 pt-5"
    >
      {!businesses.length ? (
        <h1
          style={{
            marginTop: "150px",
          }}
          className="text-center"
        >
          You don't have any business added
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
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {businesses.map((business, index) => {
              return (
                <tr key={business.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{business.title}</td>
                  <td>{business.category.toUpperCase()}</td>
                  <td>{business.description}</td>
                  <td>{business.approved ? "Approved" : "Pending Approval"}</td>
                  <td className="inline-flex">
                    <Button
                      color="primary"
                      onClick={() => {
                        router.push(`/product/${business._id}`);
                      }}
                      size="sm"
                      className="m-1"
                    >
                      {/* <Link href={`/product/${business._id}`}>View</Link> */}
                      View
                    </Button>
                    {/* <Button className='text-info' color="link">
                                            Edit
                                        </Button> */}
                    <Button
                      onClick={() => {
                        toggle();
                        setSelectedBusinessId(business._id);
                      }}
                      color="danger"
                      className="m-1"
                      size="sm"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
      <Modal isOpen={modal} toggle={toggle}>
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
              }).catch(() => {
                router.push('/error');
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
      </Modal>
    </div>
  );
};

export default YourBusinesses;
