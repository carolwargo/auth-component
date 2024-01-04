import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Dev from "../../assets/images/Dev.png";
import Design from "../../assets/images/Design.png";
import GraphicDesign from "../../assets/images/GraphicDesign.png";
//import Graffiti from "../../assets/images/Graffiti.png";
import WebD from "../../assets/images/WebD.png";
import Marketing from "../../assets/images/Marketing.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function intro() {
  return (
    <div className="container">
      <div className="row d-flex">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="business-essentials-col">
            <div className="business-essentials-body">
              <div className="business-essentials-title">
              <h1>BUSINESS ESSENTIALS</h1>
              </div>
              <p className="business-essentials-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi perspiciatis consequatur magnam, aperiam alias saepe reprehenderit id animi soluta quae, neque commodi ratione dolor. Dolorum ut assumenda inventore ratione nesciunt!
              </p>
              <button className="btn btn-outline-danger">
                <Link to="/services">Learn More</Link>
              </button>
            </div>
          </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h1>IMAGE HERE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, voluptate, quibusdam, quia voluptas quod quos
              </p>
         </div>
      </div>
      <br></br>
      <br></br>
      <Row className="d-flex justify-content-center">
        <Col md={6} style={{ paddingBottom: "1rem" }}>
          <motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.9 }}>
            <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 255, 0.5)" }}>
              <Link to="/web-dev">
                <Card.Img variant="top" src={WebD} />
              </Link>
            </Card>
          </motion.div>
        </Col>
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center"
          style={{ paddingBottom: "1rem" }}
        >
          <h4>Web Design & Development</h4>
        </Col>
      </Row>

      {/* end 2 card container; Web Design & Graphic Design */}

      {/*ADD ADDITIONAL CARDS ecommerce, socialMedia, mobileApp */}

      <Container>
        <Row
          className="d-flex justify-content-center"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 255, 0.5)" }}
        >
          <h1
            className="text-center"
            style={{
              fontFamily: "Great Vibes",
              color: "#BF6A6A",
              fontSize: "2rem",
            }}
          >
            SERVICE GALLERY
          </h1>
          <Col md={3} style={{ paddingBottom: "1rem" }}>
            <motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.9 }}>
              <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}>
                <Card.Img variant="top" src={Design} />
                <Card.Body>
                  <Card.Title
                    className="text-center"
                    style={{ fontSize: "1rem" }}
                  >
                    Design
                  </Card.Title>
                  <button className="btn card-button">
                    <Link to="/web-design">Dynamic Web Design</Link>
                  </button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col md={3} style={{ paddingBottom: "1rem" }}>
            <motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.9 }}>
              <Link to="/services#softwareDev">
                <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}>
                  <Card.Img variant="top" src={Dev} />
                  <Card.Body>
                    <Card.Title
                      className="text-center"
                      style={{ fontSize: "1rem" }}
                    >
                      Software Solutions
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </motion.div>
          </Col>

          <Col md={3} style={{ paddingBottom: "1rem" }}>
            <motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.9 }}>
              <Link to="/services#digitalMarketing">
                <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}>
                  <Card.Img variant="top" src={Marketing} />
                  <Card.Body>
                    <Card.Title
                      className="text-center"
                      style={{ fontSize: "1rem" }}
                    >
                      Digital Marketing
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </motion.div>
          </Col>

          <Col md={3} style={{ paddingBottom: "1rem" }}>
            <motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.9 }}>
              <Link to="/services#graphicDesign">
                <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}>
                  <Card.Img variant="top" src={GraphicDesign} />
                  <Card.Body>
                    <Card.Title
                      className="text-center"
                      style={{ fontSize: "1rem" }}
                    >
                      Graphic Design
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </motion.div>
          </Col>
          {/*ADD ADDITIONAL CARDS ecommerce, socialMedia, mobileApp */}
        </Row>
      </Container>
    </div>
  );
}
