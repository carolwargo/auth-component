import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import GraphicHeader from '../../components/GraphicHeader/index.jsx'
import { FaArrowRight } from 'react-icons/fa';
import { FcTodoList } from "react-icons/fc";
import { FcDownload } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { FcTemplate } from "react-icons/fc";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
  MDBRow,
  MDBCol,
  
} from 'mdb-react-ui-kit';

export const GraphicDesign = () => {
  return (
    <div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ overflow: "hidden" }}
    >
      <GraphicHeader />
      <br></br>
      <Container className="graphic-design text-center" id="design-workspace">
          <p>PROFESSIONAL HELP MADE EASY</p>
             <h2>
              Collaborate With A Designer</h2><p className='mb-4'>
Our network of trusted designers can craft distinctive designs tailored to every phase of your business venture or special event in your journey.
</p>
</Container>

<Container>
<Row className="row">
        <Col className="col-sm-3 d-flex align-items-center">
         
          <FcTemplate size={150} className="mr-2" /> {/* Adjust the icon size and margin as needed */}
      
          <p>Choose your product based on your individual need.</p>
        </Col>
        <Col className="col-sm-3 d-flex align-items-center">
         
          <FcTodoList size={150} className="mr-2" />
          
          <p>Fill out a brief and share your project details with your designer.</p>
        </Col>
        <Col className="col-sm-3 d-flex align-items-center">
     
         
          <FcCollaboration size={150} className="mr-2" />
          
          <p>Work with your designer on design and revisions.</p>
      </Col>
      <Col className="col-sm-3 d-flex align-items-center">
         
          <FcDownload size={150} className="mr-2" />
         
            <p>Receive your files & downloads and discuss printing options.</p>
      </Col>
</Row>
<Row className="row d-flex align-items-center justify-content-center">
        <Col className="d-flex align-items-center justify-content-center">
        <a href='/' className='btn btn d-flex align-items-center'>
  Choose a product to get started <FaArrowRight className='ms-2' />
</a>
          </Col>
  </Row>
</Container>
<br></br>


<Container>
<Row className="row d-flex align-items-center justify-content-center">
<Col className="d-flex align-items-center justify-content-center">
  <h3>
    Choose the product you need designed
  </h3>
  </Col>
  </Row>
  <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
  <MDBCol>
<MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
      
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
 <a href='/' className='btn btn d-flex align-items-center'>
  Go to Next Page <FaArrowRight className='ms-2' />
</a>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    <MDBCol>
<MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
      
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
 <a href='/' className='btn btn d-flex align-items-center'>
  Go to Next Page <FaArrowRight className='ms-2' />
</a>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    <MDBCol>
<MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
      
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
 <a href='/' className='btn btn d-flex align-items-center'>
  Go to Next Page <FaArrowRight className='ms-2' />
</a>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
   <MDBCol>
<MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
      
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
 <a href='/' className='btn btn d-flex align-items-center'>
  Go to Next Page <FaArrowRight className='ms-2' />
</a>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    </MDBRow>
</Container>
   
        <Container className="graphic-design" id="design-workspace">
          <h3>
            <b>GRAPHIC DESIGN</b>
          </h3>
          <ul>
            <li>Banners</li>
            <li>Posters</li>
            <li>Yard Signs</li>
            <li>Flyers</li>
            <li>Brochures</li>
            <li>Post Cards</li>
            <li>Logos</li>
            <li>Business Cards</li>

          </ul>
          <h5> CREATING INTERACTIVE AND USER-FRIENDLY WEBSITES </h5>
          <p>
            Dynamic web design is a crucial aspect of modern web development,
            allowing websites to go beyond static content and provide a more
            immersive user experience. Unlike static websites, which display
            fixed content to all users, dynamic websites adapt and respond to
            user interactions, making them more engaging and user-friendly.
          </p>
       
          <Row>
            <Col xs={6}>
              <h5>
                <b>
                  <u>KEY COMPONENTS OF DYNAMIC WEB DESIGN:</u>
                </b>
              </h5>

              <ol>
                <li>
                  <b>Database Management Systems (e.g., MySQL, MongoDB):</b>{" "}
                  Databases store and retrieve data for dynamic websites. They
                  are used to manage user information, product listings, content,
                  and more. Database integration is a key component of dynamic
                  web design.
                </li>
                {/* Add more list items as needed */}
              </ol>
            </Col>

            <Col xs={6}>
              <h5>
                <b>
                  <u>BENEFITS OF DYNAMIC WEB DESIGN</u>
                </b>
              </h5>
              <ol>
                <li>
                  <b>Enhanced User Engagement: </b>Dynamic websites provide a
                  more interactive and engaging user experience, leading to
                  increased user satisfaction and longer on-site durations.
                </li>
                {/* Add more list items as needed */}
              </ol>
            </Col>
          </Row>
          <p>
            <b>
              Dynamic web design is at the forefront of modern web development,
              empowering websites to provide dynamic, personalized, and
              engaging experiences for users. By leveraging technologies like
              JavaScript, server-side scripting, and databases, developers can
              create websites that adapt to user behavior and preferences,
              setting the stage for a more interactive web.
            </b>
          </p>
        </Container>
        </motion.div>
      </div>
  );
};

export default GraphicDesign;
