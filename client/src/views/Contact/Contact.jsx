import React, {useState} from "react";
import { motion } from "framer-motion";
import {Container, Row, Col } from "react-bootstrap"; // Add 'from "react-bootstrap"' at the en
import "../../style/contact.css"; 

const ContactForm = () => {
  const [contactFormData, setContactFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setContactFormData({ ...contactFormData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactFormData),
      });

      if (response.ok) {
        alert(`Thank you ${contactFormData.name} for your message!`);
        setContactFormData({ name: '', email: '', message: '' });
      } else {
        alert('Error submitting the form. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Error submitting the form. Please try again later.');
    }
  };

  return (
    <div >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{backgroundColor:'#f1f1f1', 
      padding: '10px', 
      borderRadius:'10px', 
      boxShadow:'0 4px 8px rgba(0, 0, 0, 0.5)',
    fontFamily:'Poppins'}}
    >
      <Container>
        

        <Row>
          
          <Col lg={6} className="py-5">
            <h1 className="py-4">GET IN TOUCH</h1>
            <h4>CONTACT <span>INFORMATION</span></h4>
            <br />
            <address>
              <strong>Email: put@email.address.com</strong>
              <br />
            
              <p>
                <strong>Phone: 443-771-1726</strong>
              </p>
            </address>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit possimus in rem
              modi minus quia delectus voluptas eaque quaerat mollitia, eum amet. Praesentium,
              nostrum repellendus culpa delectus facilis ut alias?
            </p>
          </Col>

          <Col lg={6} >
          <form method="post" onSubmit={handleSubmit}>
<h2>CONTACT<span className="span">US</span></h2>
      <label htmlFor="name"></label>
      <input
      type="text"
      name="name"
      id="name"
      onChange={handleChange}
      value={contactFormData.name}
      placeholder="Enter Name"
      required
      >
      </input>
      <label htmlFor="email"></label>
      <input
      type="email"
      name="email"
      id="email"
      onChange={handleChange}
      value={contactFormData.email}
      placeholder="example@gmail.com"
      required
      >
      </input>
      <label htmlFor="message"></label>
      <textarea
      name="message"
      id="message"
      rows={5}
      onChange={handleChange}
      value={contactFormData.message}
      placeholder="Type Message Here..."
      required
      >
      </textarea>
      <button type="submit">Send</button>
</form>
          </Col>
        </Row>
      </Container>

    </motion.div>
    </div>
  );
};

export default ContactForm;
