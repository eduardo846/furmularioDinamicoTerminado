import React from "react";
import "./ThirdStep.css";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";

const ThirdStep = () => {
  return (
    <div>
      <h2>Third Step</h2>
      <h4>Do you want to add any comment?</h4>
      <Container className="p-5 text-center">
        <Row className="justify-content-md-center">
          <Col lg="10">
            <FloatingLabel
              controlId="floatingTextarea"
              label="Comments"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="leave a comment"
                onChange={(e) => console.log(e.target.value)}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <div className="send-form">
          <p className="result p-3" onClick={() => console.log("View result")}>
            View result 🙌
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ThirdStep;
