import React from "react";
import { Link } from 'react-router-dom';
import {Row,Col} from "react-bootstrap";
import { motion } from "framer-motion";
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import Dev from "../../assets/images/Dev.png";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function intro() {
  return (
    <div style={{paddingTop:"2rem", paddingBottom:"2rem"}}
    >
      <Container>
    <Row className="d-flex justify-content-center">
    <h1 className="text-center" style={{fontFamily:'Great Vibes', color:'#BF6A6A',fontSize:"2rem"}}>ADDITIIONAL SERVICES</h1>  
      <Col md={3}
      style={{paddingBottom:"1rem"}}>
      <motion.div whileHover={{ scale: .95 }} whileTap={{ scale: 0.9 }}>
       <Link to="/web-design">
       <Card
         style={{
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', 
            borderRadius: "10px"
        }}
         >
        <Card.Img variant="top" src={Dev} style={{
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', 
            borderRadius: "10px"}} />
      </Card>
      </Link> 
      </motion.div>
      </Col>

      <Col md={3}
      style={{paddingBottom:"1rem"}}>
    <motion.div whileHover={{ scale: .95 }} whileTap={{ scale: 0.9 }}>
    <Link to="/software-dev">
      <Card
         style={{
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', 
            borderRadius: "10px"
        }}
         >
        <Card.Img variant="top" src={Dev} style={{
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', 
            borderRadius: "10px"}} />
      </Card>
      </Link>
      </motion.div>
      </Col>

      <Col md={3}
      style={{paddingBottom:"1rem"}}>
      <motion.div whileHover={{ scale: .95 }} whileTap={{ scale: 0.9 }}>
      <Link to="/services#digitalMarketing">
      <Card
         style={{
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', 
            borderRadius: "10px"
        }}
         >
        <Card.Img variant="top" src={Dev} style={{
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', 
            borderRadius: "10px"}} />
      </Card>
      </Link>
      </motion.div>
      </Col>
      
      <Col md={3}
      style={{paddingBottom:"1rem"}}>
    <motion.div whileHover={{ scale: .95 }} whileTap={{ scale: 0.9 }}>
    <Link to="/services#graphicDesign">
    <Card
         style={{
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', 
            borderRadius: "10px"
        }}
         >
        <Card.Img variant="top" src={Dev} style={{
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', 
            borderRadius: "10px"}} />
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
    