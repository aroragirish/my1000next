import React, { useEffect, useState } from "react";
import { getBusinessById } from "../../services/businessService";
import { addOrder } from "../../services/orderService";
import router from "next/router";
import {
  Col,
  Container,
  Row,
  ToastHeader,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import parse from "html-react-parser";
import Image from "next/image";
import googleDocs from "../../assets/images/logos/google-docs.png";
import { useSelector, useDispatch } from "react-redux";

function truncate(str, n) {
  return str.length > n ? str.slice(0, n - 1) + "..." : str;
}

const ProductId = () => {
  const [business, setBusiness] = useState();
  const { user } = useSelector((state) => state.user);
  const [deleteModal, setDeleteModal] = useState(false);
  const [approveModal, setApproveModal] = useState(false);
  const [selectedBusinessId, setSelectedBusinessId] = useState();
  const [open, setOpen] = useState("1");
  const [investment, setInvestment] = useState(0);
  const [trsId, setTrsId] = useState();
  const [description, setDesc] = useState("");
  const [file, setFile] = useState();

  useEffect(() => {
    if (router?.query?.id) {
      getBusinessById(router.query.id).then((res) => {
        console.log(res.data);
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
  const checkout = () => {
    console.log(investment);
    const body = {
      business: {
        businessId: business?._id,
        amountInvested: investment,
        minInvestment: business?.minInvestment,
      },
      status: "Pending",
      trsId,
      description,
      image: file,
    };
    const data = jsonToFormData(body);
    addOrder(data).then(async (res) => {
      router.push("/under-review");
    });
  };
  const buildFormData = (formData, data, parentKey) => {
    if (
      data &&
      typeof data === "object" &&
      !(data instanceof Date) &&
      !(data instanceof File)
    ) {
      Object.keys(data).forEach((key) => {
        buildFormData(
          formData,
          data[key],
          parentKey ? `${parentKey}[${key}]` : key
        );
      });
    } else {
      const value = data == null ? "" : data;

      formData.append(parentKey, value);
    }
  };

  const jsonToFormData = (data) => {
    const formData = new FormData();

    buildFormData(formData, data);

    return formData;
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
          <Col lg={7}>
            <div className="">
              {" "}
              <Card
                style={{
                  width: "40rem",
                }}
              >
                <img alt="Sample" src={business.image} />
                <CardBody>
                  <CardTitle tag="h5">{business.title}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {business.category.toUpperCase()}
                  </CardSubtitle>
                  <CardText>
                    <h5 className="font-medium m-t-20">Minimum Investment</h5>
                    <strong>
                      {" "}
                      ₹ {business.minInvestment
                        ? business.minInvestment
                        : 0}{" "}
                    </strong>
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col lg={3}>
            <div className="">
              {" "}
              <Card
                style={{
                  width: "40rem",
                }}
              >
                <CardBody>
                  <CardTitle>Invest Details</CardTitle>

                  <CardText>
                    <CardText>
                      <h5 className="font-medium m-t-20">Minimum Investment</h5>
                      <strong>
                        {" "}
                        ₹ {business.minInvestment
                          ? business.minInvestment
                          : 0}{" "}
                      </strong>
                      <Form>
                        <FormGroup className="m-t-15">
                          <Label htmlFor="title">Investment</Label>
                          <Input
                            value={investment}
                            onChange={(e) => {
                              setInvestment(e.target.value);
                            }}
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Enter title"
                          />
                        </FormGroup>
                      </Form>
                      <FormGroup>
                        <legend>Payment</legend>
                        <FormGroup check>
                          <Input name="radio1" type="radio" />{" "}
                          <Label check>Online</Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input name="radio1" type="radio" />{" "}
                          <Label check>Offline</Label>
                        </FormGroup>
                      </FormGroup>
                    </CardText>
                  </CardText>
                </CardBody>
              </Card>
              <Card
                style={{
                  width: "40rem",
                }}
              >
                <Form>
                  <FormGroup check inline>
                    <Input type="radio" />
                    <Label check>Cash</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input type="radio" />
                    <Label check>UPI</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input type="radio" />
                    <Label check>Cheque</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input type="radio" />
                    <Label check>NEFT/IMPS</Label>
                  </FormGroup>
                  <FormGroup className="m-t-15">
                    <Label htmlFor="trsId">Transation Id</Label>
                    <Input
                      value={trsId}
                      onChange={(e) => {
                        setTrsId(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      id="trsId"
                      placeholder="Enter Transation Id"
                    />
                  </FormGroup>
                  <FormGroup className="m-t-15">
                    <Label htmlFor="description">Description</Label>
                    <Input
                      value={description}
                      placeholder="maximum 300 characters"
                      maxLength={300}
                      onChange={(e) => {
                        setDesc(e.target.value);
                      }}
                      type="textarea"
                      className="form-control"
                      id="description"
                      required
                    />
                  </FormGroup>
                  <FormGroup className="m-t-15">
                    <Label htmlFor="file">Upload Payment receipt</Label>
                    <Input
                      name="image"
                      onChange={(e) => {
                        setFile(e.target.files[0]);
                      }}
                      type="file"
                      id="file"
                    />
                  </FormGroup>
                </Form>
              </Card>
              <Button color="primary" onClick={checkout}>
                Procced
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  return null;
};

export default ProductId;
