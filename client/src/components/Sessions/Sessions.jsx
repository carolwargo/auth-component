import React from "react";
import { motion } from "framer-motion";

import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import { Card, Row, Col } from "react-bootstrap";
import Concrete from "../../assets/images/Concrete.png";

const Sessions = () => {
  return (
    <div className="content">
       {/*<Nav>
         
          <Nav.Link
  as={Link}
  to="/contact"
 
    style={{
        fontSize: "1.25rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Example shadow: 0 offset, 4px blur, 8px spread, 10% opacity
        textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
        backgroundColor: "#BF6A6A",
        color: "white",
        paddingRight: "2rem",
        paddingLeft: "2rem",
    
  
  
    borderRadius: '4px',
    padding: '4px 8px 2px 8px',
    textDecoration: 'none',
    textAlign: 'center',

  }}
>
  <FaPhone /> Contact Us
</Nav.Link>
        </Nav>
      */}
  

      <Row className="pt-4">
        <Col md={6} style={{ paddingBottom: "1rem", padding: "2rem" }}>
          <motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.9 }}>
            <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}>
              <Card.Img variant="top" src={Concrete} />
              <Card.Body>
                <Card.Title style={{ fontSize: "1rem" }}>
                  TUESDAY SESSIONS
                </Card.Title>
                <Card.Text>
                  
                    <b>DATES: </b>
                    12/12 12/19 12/26
                  
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>

        <Col md={6} style={{ paddingBottom: "1rem", padding: "2rem" }}>
          <motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.9 }}>
            <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}>
              <Card.Img variant="top" src={Concrete} />
              <Card.Body>
                <Card.Title style={{ fontSize: "1rem" }}>
                  TUESDAY SESSIONS
                </Card.Title>
                <Card.Text>
                    <b>DATES: </b>
                    12/12 12/19 12/26
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
      <Row
        className="justify-content-center text-center p-4
      "
      >
        <Col md={3}>
          <button className="btn btn-secondary btn-lg btn-block" type="submit">
            <Link to="/" className="text-white">Register</Link>
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default Sessions;
