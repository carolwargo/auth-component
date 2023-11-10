import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const SoftwareDevelopment = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div style={{paddingTop:"2rem", paddingBottom:"2rem"}}>
        <Container className="software-development" id="brickwall-laptop">
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

export default SoftwareDevelopment;
