import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import WebHeader from '../../assets/images/WebHeader.png';
import {
  MDBBtn
} from 'mdb-react-ui-kit';

const WebDesign = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ overflow: "hidden" }}
    >
          <div>
<div
  id='intro-example'
  className='p-5 text-center bg-image'
     style={{
    backgroundImage: `url(${WebHeader})`,
    backgroundSize: 'cover', // Set the background size to cover the entire viewport
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // Optional: Keep the background fixed while scrolling
  }}
>
  <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }}>
    <div className='d-flex justify-content-center align-items-center h-100'>
      <div className='text-'>
        <h1 className='mb-3'>Welcome</h1>
        <h5 className='mb-4'>Best &amp; free guide of responsive web design</h5>
        <MDBBtn
          className='m-2'
          tag='a'
          outline
          size='lg'
          rel='nofollow'
          target='_blank'
          href='https://www.youtube.com/watch?v=c9B4TPnak1A'
        >
         Graphic Design
        </MDBBtn>
        <MDBBtn
          className='m-2'
          tag='a'
          outline
          size='lg'
          target='_blank'
          href='./Contact'
        >
          Web Development
        </MDBBtn>
      </div>
    </div>
  </div>
</div>

</div>
      <div>
        <Container className="web-design" id="responsive-web-design">
          <h3>
            <b>DYNAMIC WEBSITE DESIGN</b>
          </h3>
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
                  <u>ELEMENTS OF DYNAMIC WEB DESIGN</u>
                </b>
              </h5>
              <ol>
                <li>
                  <b>SCREEN SIZE SCALABILITY (responsive design): </b>Dynamic websites provide a
                  more interactive and engaging user experience, leading to
                  increased user satisfaction and longer on-site durations.
                  <b>WHY IT MATTERS FUN FACT: </b>
                </li>
                <li>
                  <b>SPEED (real-time updates): </b>Dynamic websites provide a
                  more interactive and engaging user experience, leading to
                  increased user satisfaction and longer on-site durations.
                 <b>WHY IT MATTERS FUN FACT: </b>
                </li>
                <li>
                  <b>CUSTOM RECOMMENDATIONS (preferences): </b>Dynamic websites provide a
                  more interactive and engaging user experience, leading to
                  increased user satisfaction and longer on-site durations.
                 <b>WHY IT MATTERS FUN FACT: </b>
                </li>
               
                <li>
                  <b>ENHANCED VISUALS & EFFECTS: </b>Dynamic websites provide a
                  more interactive and engaging user experience, leading to
                  increased user satisfaction and longer on-site durations.
                 <b>WHY IT MATTERS FUN FACT: </b>
                </li>
              
                <li>
                  <b>OFF-SITE CONTENT INTEGRATION (social media): </b>Dynamic websites provide a
                  more interactive and engaging user experience, leading to
                  increased user satisfaction and longer on-site durations.
                 <b>WHY IT MATTERS FUN FACT: </b>
                </li>
                
                <li>
                  <b>REAL-TIME UPDATES</b>{" "}
                 
                </li>
              </ol>
            </Col>
            <Col xs={6}>
              <h5>
              <b>
                  <u>INTEGRATION POSSIBILITIES:</u>
                </b>
              </h5>

              <ol>
                <li>
                  <b>REAL-TIME UPDATES</b>{" "}
                 
                </li>
                {/* Add more list items as needed */}
              </ol>
            </Col>

          
          </Row>
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
                <li>
                  <b>Content Management Systems (CMS): </b>Dynamic web design allows for the creation of CMS-driven websites, where non-technical users can easily update content, add new pages, and manage multimedia elements.
                </li>
                <li>
                  <b>User Authentication and Authorization: </b>Dynamic websites can implement user authentication and authorization systems, allowing users to create accounts, log in, and access personalized content or restricted areas.</li>
                <li>
                  <b>E-Commerce Functionality: </b>Dynamic websites can support online shopping with features like shopping carts, secure payment processing, order tracking, and inventory management.
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
      </div>
    </motion.div>
  );
};

export default WebDesign;
