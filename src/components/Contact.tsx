// import React, { useState } from "react";
// import axios from "axios";
import { Card, Button, Form, Container } from "react-bootstrap";

import "../css/globals.css";
import "../css/Contact.module.css";

export default function Contact() {
  // const [sent, setSent] = useState(false);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");

  // const handleSend = async (e) => {
  //   e.preventDefault();
  //   setSent(true);
  //   try {
  //     await axios.post(
  //       `https://sheltered-inlet-00725.herokuapp.com/send_mail`,
  //       {
  //         name,
  //         email,
  //         subject,
  //         message,
  //       }
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div className="" style={{ backgroundColor: "#222" }}>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "60vh", backgroundColor: "#222" }}
      >
        <div>
          <Card style={{ minWidth: "500px", minHeight: "300px" }}>
            <Card.Body>
              <h2 className="text-center mb-4">Contact Us </h2>
              <p>Tell us how we are doing</p>
              {/* 
        {error && <Alert variant="danger">{error}</Alert>} */}
              <Form>
                <Form.Group id="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="email" required />
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" required />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button
                  // disabled={loading}
                  className=" sendbtn "
                  type="submit"
                >
                  send
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}
