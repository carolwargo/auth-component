import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

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
      <br></br>
      <Container className="graphic-design-intro text-center" id="graphic-design-intro">
          <p>PROFESSIONAL HELP MADE EASY</p>
             <h2>
              Collaborate With A Design Expert</h2><p className='mb-4'>
Our network of trusted designers can craft distinctive designs tailored to every phase of your business venture or special event in your journey.
</p>
</Container>
<br></br>

<Container className="graphic-design-process" id="graphic-design-process">
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
<br></br>
<Row className="row d-flex align-items-center justify-content-center">
        <Col className="d-flex align-items-center justify-content-center">
        <a href='#graphic-design-product' className='d-flex align-items-center'>
  See product options to get started <FaArrowRight className='ms-2' />
</a>
          </Col>
  </Row>
</Container>
<br></br>
<br></br>
<br></br>
<br></br>
<Container className="graphic-design-product" id="graphic-design-product">
<Row className="row d-flex align-items-center justify-content-center">

  <h3 className="text-center">
    Choose the product you need designed for your business or event.
  </h3>
  </Row>
<Row className="row d-flex align-items-center justify-content-center text-center">
<p>Know what you need without looking? <span>

  <a href='/graphic-design/contact-form'>
    connect with a designer<FaArrowRight className='ms-2'/>
</a>
</span>
</p>
</Row>
<br></br>

  <MDBRow className='graphic-design-packages row-cols-1 row-cols-md-4 g-4' id="graphic-design-packages">


  <MDBCol className="graphic-design-business-cards" id="graphic-design-business-cards">
<MDBCard>
<MDBCarousel showControls fade showIndicators={false}>
      <MDBCarouselItem itemId={1}>
        <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
      <MDBCardBody>
         <MDBCardTitle>Business Cards</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <a href='/business-cards' className='btn btn d-flex align-items-center' style={{fontSize:'12px'}}>
 Get started with business cards <FaArrowRight className='ms-2' />
</a>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>

    <MDBCol className="graphic-design-essentials" id="graphic-design-essentials">
<MDBCard>
<MDBCarousel showControls fade showIndicators={false}>
      <MDBCarouselItem itemId={1}>
        <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
      <MDBCardBody>
      <MDBCardTitle>Start Up Essentials</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <a href='/essentials' className='btn btn d-flex align-items-center' style={{fontSize:'12px'}}>
 Get started with essentials <FaArrowRight className='ms-2' />
</a>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
  

  <MDBCol className="graphic-design-logo" id="graphic-design-logo">
<MDBCard>
      <MDBCarousel showControls fade showIndicators={false}>
      <MDBCarouselItem itemId={1}>
        <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
      <MDBCardBody>
        <MDBCardTitle>Custom Logo Package</MDBCardTitle>
        <MDBCardText>
       Custom logo that is unique to your brand and business. 
        </MDBCardText>
 <a href='/logo' className='btn btn d-flex align-items-center' style={{fontSize:'12px'}}>
 Get started with logo <FaArrowRight className='ms-2' />
</a>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>


    <MDBCol className="graphic-design-branding" id="graphic-design-branding">
<MDBCard>
<MDBCarousel showControls fade showIndicators={false}>
      <MDBCarouselItem itemId={1}>
        <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
      <MDBCardBody>
        <MDBCardTitle>Logo & Branding Kit</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <a href='/branding' className='btn btn d-flex align-items-center' style={{fontSize:'12px'}}>
 Get started with branding <FaArrowRight className='ms-2' />
</a>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    </MDBRow>
<br></br>
<br></br>
    <Row className="row d-flex align-items-center justify-content-center text-center">
<p>Still not sure what you are looking for? <span>
  <a href='/graphic-design/contact-form'>
   Let us help to define your need <FaArrowRight className='ms-2'/>
</a>
</span>
</p>
</Row>
</Container>
   

   
<br></br>
<br></br>
<br></br>

<Container className="graphic-design-logo-intro" id="graphic-design-logo-intro">
         
          <h3>
            <b>Get a pro to design a logo that you love!</b>
          </h3>
          <p>...the most important visual identifier of your brand.</p>
</Container>



          <Container className="graphic-design" id="graphic-design-inspired">
          <h3>
            <b>Get Inspired</b>
          </h3>
</Container>


        <Container className="graphic-design" id="graphic-design-additional-products">
          <h3>
            <b>Get Inspired</b>
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
