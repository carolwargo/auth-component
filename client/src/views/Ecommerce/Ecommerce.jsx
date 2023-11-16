import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Graffiti2 from "../../assets/images/Graffiti2.png";
import {
  MDBBtn
} from 'mdb-react-ui-kit';

import { motion } from "framer-motion";

const Ecommerce = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
      <header>


<div
  id='intro-example'
  className='p-5 text-center bg-image'
     style={{
    backgroundImage: `url(${Graffiti2})`,
    backgroundSize: 'cover', // Set the background size to cover the entire viewport
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // Optional: Keep the background fixed while scrolling
  }}
>
  <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }}>
    <div className='d-flex justify-content-center align-items-center h-100'>
      <div className='text-white'>
        <h1 className='mb-3'>Graphic Design</h1>
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
          Start tutorial
        </MDBBtn>
        <MDBBtn
          className='m-2'
          tag='a'
          outline
          size='lg'
          target='_blank'
          href='./Contact'
        >
          Start Now
        </MDBBtn>
      </div>
    </div>
  </div>
</div>
</header>

        <Container className="ecommerce" id="ecommerce">
          <h3>
            <b>SOFTWARE DEVELOPMENT SOLUTIONS</b>
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
      </div>
    </motion.div>
  );
};

export default Ecommerce;
