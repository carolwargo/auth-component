import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FcIdea } from "react-icons/fc";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const Logo = () => {
  
  const [isHoveredVersatile, setIsHoveredVersatile] = useState(false);
  const [isHoveredAppropriate, setIsHoveredAppropriate] = useState(false);
  const [isHoveredTimeless, setIsHoveredTimeless] = useState(false);
  const [isHoveredUnique, setIsHoveredUnique] = useState(false);
  const [isHoveredSimple, setIsHoveredSimple] = useState(false);
  const [isHoveredMemorable, setIsHoveredMemorable] = useState(false);

  
  const [smShowVersatile, setSmShowVersatile] = useState(false);
  const [smShowAppropriate, setSmShowAppropriate] = useState(false);
  const [smShowTimeless, setSmShowTimeless] = useState(false);
  const [smShowUnique, setSmShowUnique] = useState(false);
  const [smShowSimple, setSmShowSimple] = useState(false);
  const [smShowMemorable, setSmShowMemorable] = useState(false);
 
  const toggleModalVersatile = () => {
    setSmShowVersatile(!smShowVersatile);
  };

 const toggleModalAppropriate = () => {
   setSmShowAppropriate(!smShowAppropriate);
  };

  const toggleModalTimeless = () => {
    setSmShowTimeless(!smShowTimeless);
  };

  const toggleModalSimple = () => {
    setSmShowSimple(!smShowSimple);
  };

  const toggleModalMemorable = () => {
    setSmShowMemorable(!smShowMemorable);
  };

  const toggleModalUnique = () => {
    setSmShowUnique(!smShowUnique);
  };

  return (
    <div className="logo-page">
      <Container className="logo-header" id="logo-header">
        <h3>
          <b>Get a professionally designed logo that you love!</b>
        </h3>
        <p>
          <b> A logo is the most important visual identifier of your brand.</b>
        </p>
        <Row>
        <Col md={4}>
            <h5>
              <b>
                <u>LOGO DESIGN</u>
              </b>
            </h5>
            <p>
              <b> A logo</b> is the most important visual identifier
              of your brand. By arranging symbols, text, and color, a logo
              designer creates a unique mark that communicates the essence of
              your business's identity.
            </p>
          </Col>
          </Row>
        <Row>
      
            </Row>
            <Row>
            <Col md={4}>
            <h5>Logo Design Elements</h5>
          </Col>
          </Row>
          <br />
          <Row>  
<Col md={4}>
            <h5> What makes a good logo?</h5>
            <p> 6 Principles of Logo Design</p>
            <ul>  

{/* Modal for Simple */}
              <li>
        <span
          style={{
            cursor: 'pointer',
            textDecoration: 'underline',
            color: isHoveredSimple || smShowSimple ? 'lightblue' : 'blue',
            transition: 'color 0.2s ease-in-out',
          }}
          onMouseOver={() => setIsHoveredSimple(true)}
          onMouseOut={() => setIsHoveredSimple(false)}
          onClick={toggleModalSimple}
        >
          Simple
        </span>
        <Modal
          size="sm"
          show={smShowSimple}
          onHide={toggleModalSimple}
          aria-labelledby="simple"
        >
          <Modal.Header closeButton>
          <Modal.Title
            style={{
              color: isHoveredSimple || smShowSimple ? 'lightblue' : 'blue', // Apply the same color transition for the modal title
              transition: 'color 0.3s ease-in-out', // Added transition property for color
            }}
            id="simple"
          >
            <b>Simple</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FcIdea /> <b>Tip:</b> <br />
          Create 3 variations: black and white, and color. <br />
          View the logo on multi-sized media - from icon to banner.
        </Modal.Body>
      </Modal>
      </li>

      <li>
        <span
          style={{
            cursor: 'pointer',
            textDecoration: 'underline',
            color: isHoveredMemorable || smShowMemorable ? 'lightblue' : 'blue',
            transition: 'color 0.3s ease-in-out',
          }}
          onMouseOver={() => setIsHoveredMemorable(true)}
          onMouseOut={() => setIsHoveredMemorable(false)}
          onClick={toggleModalMemorable}
        >
          Memorable
        </span>
        <Modal
          size="sm"
          show={smShowMemorable}
          onHide={toggleModalMemorable}
          aria-labelledby="memorable"
        >
          <Modal.Header closeButton>
          <Modal.Title
            style={{
              color: isHoveredMemorable || smShowMemorable ? 'lightblue' : 'blue', // Apply the same color transition for the modal title
              transition: 'color 0.3s ease-in-out', // Added transition property for color
            }}
            id="memorable"
          >
            <b>Memorable</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FcIdea /> <b>Tip:</b> <br />
          Create 3 variations: black and white, and color. <br />
          View the logo on multi-sized media - from icon to banner.
        </Modal.Body>
      </Modal>
      </li>

{/* Modal for Timeless */}
              <li>
        <span
          style={{
            cursor: 'pointer',
            textDecoration: 'underline',
            color: isHoveredTimeless || smShowTimeless ? 'lightblue' : 'blue',
            transition: 'color 0.3s ease-in-out',
          }}
          onMouseOver={() => setIsHoveredTimeless(true)}
          onMouseOut={() => setIsHoveredTimeless(false)}
          onClick={toggleModalTimeless}
        >
          Timeless
        </span>
        <Modal
          size="sm"
          show={smShowTimeless}
          onHide={toggleModalTimeless}
          aria-labelledby="timeless"
        >
          <Modal.Header closeButton>
          <Modal.Title
            style={{
              color: isHoveredTimeless || smShowTimeless ? 'lightblue' : 'blue', // Apply the same color transition for the modal title
              transition: 'color 0.3s ease-in-out', // Added transition property for color
            }}
            id="timeless"
          >
            <b>Timeless</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FcIdea /> <b>Tip:</b> <br />
          Create 3 variations: black and white, and color. <br />
          View the logo on multi-sized media - from icon to banner.
        </Modal.Body>
      </Modal>
      </li>

{/* Modal for Versatile */}
              <li>
        <span
          style={{
            cursor: 'pointer',
            textDecoration: 'underline',
            color: isHoveredVersatile || smShowVersatile ? 'lightblue' : 'blue',
            transition: 'color 0.3s ease-in-out',
          }}
          onMouseOver={() => setIsHoveredVersatile(true)}
          onMouseOut={() => setIsHoveredVersatile(false)}
          onClick={toggleModalVersatile}
        >
          Versatile
        </span>
        <Modal
          size="sm"
          show={smShowVersatile}
          onHide={toggleModalVersatile}
          aria-labelledby="versatile"
        >
          <Modal.Header closeButton>
          <Modal.Title
            style={{
              color: isHoveredVersatile || smShowVersatile ? 'lightblue' : 'blue', // Apply the same color transition for the modal title
              transition: 'color 0.3s ease-in-out', // Added transition property for color
            }}
            id="versatile"
          >
            <b>Versatile</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FcIdea /> <b>Tip:</b> <br />
          Create 3 variations: black and white, and color. <br />
          View the logo on multi-sized media - from icon to banner.
        </Modal.Body>
      </Modal>
      </li>

{/* Modal for Appropriate */}
      <li>
        <span
          style={{
            cursor: 'pointer',
            textDecoration: 'underline',
            color: isHoveredAppropriate || smShowAppropriate ? 'lightblue' : 'blue',
            transition: 'color 0.3s ease-in-out',
          }}
          onMouseOver={() => setIsHoveredAppropriate(true)}
          onMouseOut={() => setIsHoveredAppropriate(false)}
          onClick={toggleModalAppropriate}
        >
          Appropriate
        </span>
        <Modal
          size="sm"
          show={smShowAppropriate}
          onHide={toggleModalAppropriate}
          aria-labelledby="appropriate"
        >
          <Modal.Header closeButton>
          <Modal.Title
            style={{
              color: isHoveredAppropriate || smShowAppropriate ? 'lightblue' : 'blue', // Apply the same color transition for the modal title
              transition: 'color 0.3s ease-in-out', // Added transition property for color
            }}
            id="appropriate"
          >
            <b>Appropriate</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FcIdea /> <b>Tip:</b> <br />
          Create 3 variations: black and white, and color. <br />
          View the logo on multi-sized media - from icon to banner.
        </Modal.Body>
      </Modal>
      </li>

{/* Modal for Unique */}
              <li>
        <span
          style={{
            cursor: 'pointer',
            textDecoration: 'underline',
            color: isHoveredUnique || smShowUnique ? 'lightblue' : 'blue',
            transition: 'color 0.3s ease-in-out',
          }}
          onMouseOver={() => setIsHoveredUnique(true)}
          onMouseOut={() => setIsHoveredUnique(false)}
          onClick={toggleModalUnique}
        >
          Unique
        </span>
        <Modal
          size="sm"
          show={smShowUnique}
          onHide={toggleModalUnique}
          aria-labelledby="unique"
        >
          <Modal.Header closeButton>
          <Modal.Title
            style={{
              color: isHoveredUnique || smShowUnique ? 'lightblue' : 'blue', // Apply the same color transition for the modal title
              transition: 'color 0.3s ease-in-out', // Added transition property for color
            }}
            id="unique"
          >
            <b>Unique</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FcIdea /> <b>Tip:</b> <br />
          Create 3 variations: black and white, and color. <br />
          View the logo on multi-sized media - from icon to banner.
        </Modal.Body>
      </Modal>
      </li>

            </ul>
            </Col>
          <Col md={4}>
            <h5>What makes a bad logo?</h5>
            <ul>
              <li>Too much detail</li>
              <li>Too many colors</li>
              <li>Too many fonts</li>
              <li>Too literal</li>
              <li>Too complex</li>
              <li>Too trendy</li>
            </ul>
            </Col>
            <Col md={4}>
          <h5>"Creative Fusion: Crafting Harmony with Images, Text, and Shapes"</h5>
          <h5>"Design Dynamics: Exploring the Impact of Color, Space, and Size"</h5>
</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Logo;
