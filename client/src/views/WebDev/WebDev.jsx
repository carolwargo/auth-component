import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import WebHeader from '../../assets/images/WebHeader.png';
import {
  MDBBtn
} from 'mdb-react-ui-kit';
import '../../index.css';

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
         Web Design
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
{/*end of header*/}


{/*start scroll spy*/}

<div className="row">
  <div className="col-4">
    <nav id="navbar-webdev" className="h-100 flex-column align-items-stretch pe-4 border-end">
      <nav className="nav nav-pills flex-column">
        <a className="nav-link" href="#item-1">Idenity & Access Management</a>
        <nav className="nav nav-pills flex-column">
          <a className="nav-link ms-3 my-1" href="#item-1-1">User Management</a>
          <a className="nav-link ms-3 my-1" href="#item-1-2">User Authentication and Authorization</a>
        </nav>

        <a className="nav-link" href="#item-2">Dashboards</a>
        <nav className="nav nav-pills flex-column">
          <a className="nav-link ms-3 my-1" href="#item-2-1">Vendor Accounts</a>
          <a className="nav-link ms-3 my-1" href="#item-2-1-1">sub category Vendor Accounts</a>
          <a className="nav-link ms-3 my-1" href="#item-2-2">Customer Accounts</a>
        </nav>

        <a className="nav-link" href="#item-3">Profiles</a>
        <nav className="nav nav-pills flex-column">
          <a className="nav-link ms-3 my-1" href="#item-3-1">Customer Profiles</a>
          <a className="nav-link ms-3 my-1" href="#item-3-2">Social Profiles</a>
        </nav>

        <a className="nav-link" href="#item-4">Forms</a>
        <nav className="nav nav-pills flex-column">
          <a className="nav-link ms-3 my-1" href="#item-4-1">Contact</a>
          <a className="nav-link ms-3 my-1" href="#item-4-2">Login</a>
          <a className="nav-link ms-3 my-1" href="#item-4-3">SignUp</a>
          <a className="nav-link ms-3 my-1" href="#item-4-4">Subscription</a>
          <a className="nav-link ms-3 my-1" href="#item-4-5">Profile</a>
        </nav>
        
        <a className="nav-link" href="#item-5">E-Commerce</a>
        <nav className="nav nav-pills flex-column">
          <a className="nav-link ms-3 my-1" href="#item-5-1">Storefront</a>
          <a className="nav-link ms-3 my-1" href="#item-5-2">Payments</a>
          <a className="nav-link ms-3 my-1" href="#item-5-3">Catalog</a>
          <a className="nav-link ms-3 my-1" href="#item-5-4">Inventory</a>
        </nav>
      </nav>
    </nav>
  </div>

  <div className="col-8 ">
    <div data-bs-spy="scroll" data-bs-target="#navbar-webdev" data-bs-smooth-scroll="true" className="scrollspy-webdev" tabIndex="0">
      <div id="item-1">
        <h4>Idenity & Access Management</h4>
        <p>...</p>
      </div>
      <div id="item-1-1">
        <h5>User Management</h5>
        <p>Category: Identity and Access Management </p>
        <p>Purpose: Creating, updating, and managing user accounts. This includes user registration, login, logout, password reset, and account profile management.</p>
<p>Common Features: User registration forms, authentication (login/logout), account settings, password recovery.</p>
<p>Common Technologies: JWT (JSON Web Tokens), OAuth, OpenID Connect, user databases (SQL or NoSQL), authentication libraries (e.g., Passport.js).</p>
      </div>
      <div id="item-1-2">
        <h5>User Authentication and Authorization</h5>
        <p>Category: Security</p>
<p>Purpose: Verifying the identity of users and determining what actions or resources they are allowed to access (authorization).
</p>
<p>Common Features: Secure login, multi-factor authentication (if needed), role-based access control (RBAC), permissions management.
</p>
<p>Common Technologies: JWT (JSON Web Tokens), OAuth, access control lists (ACLs), authorization middleware, Firebase Authentication.
    </p>

      </div>
      <div id="item-2">
        <h4>Item 2</h4>
        <p>...</p>
      </div>
      <div id="item-3">
        <h4>Item 3</h4>
        <p>...</p>
      </div>
      <div id="item-3-1">
        <h5>Item 3-1</h5>
        <p>...</p>
      </div>
      <div id="item-3-2">
        <h5>Item 3-2</h5>
        <p>...</p>
      </div>
    </div>
  </div>
</div>
<br></br>
<br></br>
{/*end nav scroll*/}


{/*start of web design*/}
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
