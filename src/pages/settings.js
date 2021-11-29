import React from "react";
import { Button, Form, Col, Image } from "react-bootstrap";
import { LogOutIcon } from "../components/icons";
import avatarImage from "../assets/images/oculus.jpg";

function SettingsPage() {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: 20 }}>
        <div className="col">
          <Button variant="primary" className="float-end">
            <LogOutIcon size={20} color="#fff" /> Log Out
          </Button>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-md-6">
          <Form style={{ textAlign: "left" }}>
            <Form.Group className="mb-3" controlId="oldPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Re-enter Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="newPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="Enter New Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>

        <Col xs={12} md={6} className="float-end">
          <div className="well">
            <Image
              src={avatarImage}
              width={140}
              roundedCircle
              style={{ marginTop: 40 }}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Your Image is here"
            />
            <div className="text-center">
              <p className="h4">Mantey Caleb</p>
              <p className="blockquote-footer mt-1">manteycaleb@gmail.com</p>
            </div>
          </div>
        </Col>
      </div>
    </div>
  );
}

export default SettingsPage;
