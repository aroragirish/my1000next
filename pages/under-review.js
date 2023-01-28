import React, { useEffect, useState } from "react";

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
import img4 from "../assets/search.png";

import img5 from "../assets/images/portfolio/kyc.png";
import Image from "next/image";

const UnderReview = () => {
  return (
    <div className="container mt-5 pt-5 text-center">
      <div className="row">
        <div className="col-md-12">
          <div className="card-shadow card card-body">
            <div className="card-title">
              <Image className="card-img-top" src={img5} alt="wrappixel kit" />
            </div>
            <h2 className="card-text">Your application is under review</h2>
            {/* <p className="text-muted">It won't take more than 2 minutes</p> */}
            {/* <a
              style={{
                fontSize: "24px",
                cursor: "pointer",
              }}
              className="text-primary"
            >
              COMPLETE KYC
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderReview;
