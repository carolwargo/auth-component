import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Col, Row } from "react-bootstrap";

import WhiteWaves from "../../assets/images/WhiteWaves.png";

import Form from "react-bootstrap/Form";

const Contact = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    alert("Message Sent: \n" + JSON.stringify(data));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{padding: '2rem', 
      backgroundImage: `url(${WhiteWaves})`,}}
    >
     
      <Col md={6}className="container bg-secondary-subtle text-dark p-4"
      style={{
        borderRadius: '10px',
      }}>
         <h1 style={{ fontFamily: "Great Vibes", color: "#BF6A6A", textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", }}>Contact</h1>
        <Form className="form" onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label htmlFor="firstName">First name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  className="firstName"
                  tabIndex="1"
                  ref={firstNameRef}
                  placeholder="First Name"
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label htmlFor="lastName">Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  className="lastName"
                  tabIndex="2"
                  ref={lastNameRef}
                  placeholder="Last Name"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              id="email"
              className="email"
              placeholder="example@email.com"
              tabIndex="3"
              ref={emailRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Start typing..."
              className="message"
              name="message"
              ref={messageRef}
            />
          </Form.Group>
          <button type="submit" className="send" onClick={handleSubmit}
          style={{
            fontSize: "1.25rem",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Example shadow: 0 offset, 4px blur, 8px spread, 10% opacity
            textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
            backgroundColor: "#BF6A6A",
            color: "white",
            paddingRight: "1.75rem",
            paddingLeft: "1.75rem",
            borderRadius: "10px",
          }}
          >
            Send
          </button>
        </Form>
      </Col>
    </motion.div>
  );
};

export default Contact;
