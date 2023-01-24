import React, { useEffect, useState } from "react";
import {
  getBusinessById,
  approveBusiness,
} from "../../services/businessService";
import router from "next/router";
import {
  Col,
  Container,
  Row,
  ToastHeader,
  Button,
  Card,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  List,
  ListItem,
} from "reactstrap";
import parse from "html-react-parser";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

const ProductId = () => {
  const [business, setBusiness] = useState();
  const { user } = useSelector((state) => state.user);
  const [deleteModal, setDeleteModal] = useState(false);
  const [approveModal, setApproveModal] = useState(false);
  const [selectedBusinessId, setSelectedBusinessId] = useState();
  const [open, setOpen] = useState("1");

  useEffect(() => {
    if (router?.query?.id) {
      getBusinessById(router.query.id).then((res) => {
        setBusiness(res.data);
      });
    }
  }, []);
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  if (business) {
    return (
      <Container
        style={{
          marginBottom: "100px",
        }}
        className="mt-5"
      >
        <Row>
          <Col lg={9}>
            <div className="">
              <ToastHeader className="text-bold text-dark">
                <h1>{business.title}</h1>
                <strong>
                  <h4 className="text-muted">
                    {" "}
                    {`Category: ${business.category.toUpperCase()}`}
                  </h4>
                </strong>
              </ToastHeader>
            </div>
            <Image
              src={business.image}
              alt=""
              title=""
              width="100%"
              height="75%"
              layout="responsive"
              objectFit="contain"
            />
            <div>
              <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                  <AccordionHeader targetId="1">
                    <h2>Description</h2>
                  </AccordionHeader>
                  <AccordionBody accordionId="1">
                    <p>{business.description}</p>
                    {parse(business.extraInfo)}
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="2">
                    <h2>About Us</h2>
                  </AccordionHeader>
                  <AccordionBody accordionId="2">
                    <Row>
                      <Col lg={4}>
                        <strong>Trade Name</strong>
                      </Col>
                      <Col lg={8}>{business?.aboutCompany?.tradeName}</Col>
                    </Row>
                    <Row>
                      <Col lg={4}>
                        <strong>Firm</strong>
                      </Col>
                      <Col lg={8}>{business?.aboutCompany?.firm}</Col>
                    </Row>
                    <Row>
                      <Col lg={4}>
                        <strong>Employee Count</strong>
                      </Col>
                      <Col lg={8}>{business?.aboutCompany?.empCount}</Col>
                    </Row>
                    <Row>
                      <Col lg={4}>
                        <strong>Incorporation Date</strong>
                      </Col>
                      <Col lg={8}>
                        {business?.aboutCompany?.incorporationDate}
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={4}>
                        <strong>Website</strong>
                      </Col>
                      <Col lg={8}>{business?.aboutCompany?.website}</Col>
                    </Row>
                    <Row>
                      <Col lg={4}>
                        <strong>Social Media link</strong>
                      </Col>
                      <Col lg={8}>
                        {business?.aboutCompany?.socialMediaLinks?.map(
                          (link) => {
                            return (
                              <List>
                                <li>{link}</li>
                              </List>
                            );
                          }
                        )}
                      </Col>
                    </Row>
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </div>
          </Col>
          <Col lg={3}>
            {user.role === "admin" && !business.approved && (
              <div>
                <Button
                  onClick={() => {
                    setApproveModal((val) => !val);
                    setSelectedBusinessId(business._id);
                  }}
                  color="primary"
                >
                  Approve
                </Button>{" "}
                <Button
                  onClick={() => {
                    setDeleteModal((val) => !val);
                    setSelectedBusinessId(business._id);
                  }}
                  color="danger"
                  outline
                >
                  Reject
                </Button>
              </div>
            )}
            <Card
              className=""
              style={{
                padding: "10px",
                paddingLeft: "25px",
                marginTop: "157px",
                boxShadow: "2px 2px 2px 2px lightgrey",
              }}
            >
              <h3 className="font-medium m-t-20">
                <a className="link">
                  {business.title ? business.title?.toUpperCase() : ""}
                </a>
              </h3>
              <hr />
              <Row>
                <Col lg={12}>
                  <div>
                    <h5 className="font-medium m-t-20">Target to raise</h5>
                    <strong>
                      {" "}
                      ₹ {business.targetToRaise
                        ? business.targetToRaise
                        : 0}{" "}
                    </strong>
                  </div>
                </Col>
                <Col lg={12}>
                  <div>
                    <h5 className="font-medium m-t-20">Minimum Investment</h5>
                    <strong>
                      {" "}
                      ₹ {business.minInvestment
                        ? business.minInvestment
                        : 0}{" "}
                    </strong>
                  </div>
                </Col>
                <Col lg={12}>
                  <div>
                    <h5 className="font-medium m-t-20">Target Achieved</h5>
                    <strong>
                      {" "}
                      {business.targetAchieved ? business.targetAchieved : 0} %
                    </strong>
                  </div>
                </Col>
                <Col lg={12}>
                  <div>
                    <h5 className="font-medium m-t-20">Subscribers</h5>
                    <strong>
                      {" "}
                      {business.totalSubscribers
                        ? business.totalSubscribers
                        : 0}{" "}
                    </strong>
                  </div>
                </Col>
              </Row>
            </Card>
            {user.role === "investor" && (
              <Button className="w-100" color="primary">
                Invest Now
              </Button>
            )}
            {user.role === "business" && (
              <>
                <Button disabled className="w-100" color="secondary">
                  Invest Now
                </Button>
                <p className="m-t-5 text-danger">
                  You need to login as an investor to invest
                </p>
              </>
            )}
          </Col>
        </Row>
        <Modal
          isOpen={deleteModal}
          toggle={() => setDeleteModal((val) => !val)}
        >
          <ModalHeader toggle={() => setDeleteModal((val) => !val)}>
            Delete Business
          </ModalHeader>
          <ModalBody>Are you sure? You want to reject this business?</ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                deleteBusiness(selectedBusinessId).then((res) => {
                  router.push("/your-businesses");
                  setDeleteModal((val) => !val);
                });
              }}
              color="danger"
            >
              Delete
            </Button>{" "}
            <Button
              outline
              color="secondary"
              onClick={() => {
                setDeleteModal((val) => !val);
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <Modal
          isOpen={approveModal}
          toggle={() => setApproveModal((val) => !val)}
        >
          <ModalHeader toggle={() => setApproveModal((val) => !val)}>
            Approve Business
          </ModalHeader>
          <ModalBody>
            Are you sure? You want to Approve this business?
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                approveBusiness(selectedBusinessId).then((res) => {
                  router.push("/your-businesses");
                  setApproveModal((val) => !val);
                });
              }}
              color="info"
            >
              Approve
            </Button>{" "}
            <Button
              outline
              color="secondary"
              onClick={() => {
                setApproveModal((val) => !val);
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
  return null;
};

export default ProductId;
