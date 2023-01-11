import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="introduction p-3 p-lg-5 mt-5">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <h1 className="pl-2 text-center">
              Welcome to dynamic form{" "}
              <span className="pt-2 bp-4">that will do everything that you want</span>
            </h1>
            <h4 className="text-center pt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cumque eveniet tempora.
            </h4>
            <div className="d-flex container-actions mt-5">
                <div className="container-buttons">
                    <Button className="p-3" onClick={()=>console.log("Click Button")}>Get in touch</Button>
                    <Button className="p-3">Get in touch</Button>
                </div>
                <div className="btn-start-create">
                    <a href="#dynamic-form">Start to create </a>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Introduction;
