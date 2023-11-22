import React from "react";
import { Container, Row, Col} from "react-bootstrap";
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
      <br />
      <br />
      <Container className="logo-header" id="logo-header">
        <h3>
          <b>Get a professionally designed logo that you love!</b>
        </h3>
        <p>
          <i style={{color:'gray'}}>A logo is the most important visual identifier of your brand. By arranging symbols, text, and color, a logo
              designer creates a unique mark that communicates the essence of
              your business's identity.</i>
        </p>
       
{/*start body */}       
     
            <br />
            <Row>
            <Col md={4}>
            <h5>Logo Design Elements</h5>
          </Col>
          </Row>
          <br />


          <Row>  
          <Col md={5}>
          <h5> What makes a good logo?</h5>
            <p> A good logo is a balance of simplicity, memorability, timelessness, versatility, appropriateness, and uniqueness. By incorporating these principles into the design process, a logo can effectively represent a brand and contribute to its success in the competitive market.</p>   
            <br />
  </Col>      
<Col>{/* Logo Principles COL */}
          <h5> Logo Principles</h5>
            <ul style={{margin:'0px'}}>  
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
         <span >
      <FcIdea style={{ verticalAlign:'top', marginRight:'10px', marginTop:'3px' }}/>
    </span><i>"simple"</i>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p style={{ fontSize:'14px', padding:'.5rem', justifyContent:'center'}}>
          A <i style={{color:'blue'}}>"simple"</i>
          Simplicity allows for quick identification, especially in situations where the logo needs to be reproduced in various sizes or across different mediums. A straightforward design helps in creating a lasting impression on the audience.
        </p>
        </Modal.Body>
      </Modal>
      </li>

{/* Modal for Memorable */}
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
          <span >
      <FcIdea style={{ verticalAlign:'top', marginRight:'10px', marginTop:'3px' }}/>
    </span><i>"memorable"</i>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p style={{ fontSize:'14px', padding:'.5rem', justifyContent:'center'}}>
          A <i style={{color:'blue'}}>"memorable"</i>
          It should leave a lasting impression on the viewer, making it easier for them to remember and recognize the brand. This often involves a combination of simplicity, unique elements, and clever design choices that make the logo stand out from the crowd.
        </p>
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
         <span >
      <FcIdea style={{ verticalAlign:'top', marginRight:'10px', marginTop:'3px' }}/>
    </span><i>"timeless"</i>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p style={{ fontSize:'14px', padding:'.5rem', justifyContent:'center'}}>
          A <i style={{color:'blue'}}>"timeless"</i>
          A good logo should be able to withstand the test of time without appearing outdated or irrelevant. This involves avoiding design trends that may quickly become obsolete and opting for classic, enduring elements that remain relevant across different eras.r.
        </p>
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
          <span >
      <FcIdea style={{ verticalAlign:'top', marginRight:'10px', marginTop:'3px' }}/>
    </span><i>"versatile"</i>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p style={{ fontSize:'14px', padding:'.5rem', justifyContent:'center'}}>
          A <i style={{color:'blue'}}>"versatile"</i>
          Whether it's on a business card, a website, or a billboard, a versatile logo retains its integrity and clarity. It should be scalable without losing its impact, and the design should work well in both color and black-and-white formats.
        </p>
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
           <span >
      <FcIdea style={{ verticalAlign:'top', marginRight:'10px', marginTop:'3px' }}/>
    </span><i>"appropriate"</i>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p style={{ fontSize:'14px', padding:'.5rem', justifyContent:'center'}}>
          A <i style={{color:'blue'}}>"appropriate"</i> A good logo should be appropriate for the brand it represents. It should reflect the values, personality, and industry of the business. The choice of colors, fonts, and symbols should align with the company's identity and target audience. An appropriate logo establishes a connection between the brand and its consumers.
        </p>
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
              color: isHoveredUnique || smShowUnique ? 'blue' : 'blue', // Apply the same color transition for the modal title
              transition: 'color 0.3s ease-in-out', // Added transition property for color
              fontSize:'1rem',
            }}
            id="unique"
          >
          <span >
      <FcIdea style={{ verticalAlign:'top', marginRight:'10px', marginTop:'3px' }}/>
    </span><i>"unique"</i>
          </Modal.Title>
        </Modal.Header>
       <Modal.Body>
  <p style={{ fontSize:'14px', padding:'.5rem', justifyContent:'center'}}>
  A <i style={{color:'blue'}}>"unique"</i> logo should set a brand apart from its competitors and be easily distinguishable. A unique design not only helps in creating a strong brand identity but also prevents confusion with other businesses. Originality is key to capturing the attention of the audience and leaving a lasting impression.
  </p>
</Modal.Body>

      </Modal>
      </li>

            </ul>
            </Col>
<aside className= 'border border-black'>
            <br />
          <h6>"Creative Fusion: Crafting Harmony with Images, Text, and Shapes"</h6>
                <p>
                <i style={{color:'gray'}}>A logo is the most important visual identifier of your brand. By arranging symbols, text, and color, a logo
              designer creates a unique mark that communicates the essence of
              your business's identity.</i>
                </p>
          <br />
          <br />
          <h6>"Design Dynamics: Exploring the Impact of Color, Space, and Size"</h6>
</aside>      
        </Row>

        <Col md={8}>
        <h5>What makes a bad logo?</h5>
  <p>A bad logo can have a negative impact on a brand's image and recognition. By avoiding the following common pitfalls, a brand can ensure that its logo remains effective, timeless, and aligned with its identity.:</p>
  <ul>
    <li><strong>Too much detail:</strong>Logos with excessive details become cluttered and lose clarity, making them difficult to recognize.</li>
    <li><strong>Too many colors:</strong> An overuse of colors can make a logo overwhelming and challenging to reproduce in various contexts.</li>
    <li><strong>Too many fonts:</strong> Using multiple fonts can create visual chaos and diminish the cohesiveness of the logo.</li>
    <li><strong>Too literal:</strong> Logos that are overly literal may lack creativity and fail to convey a brand's personality or values effectively.</li>
    <li><strong>Too complex:</strong> Complex logos can be confusing and fail to make a quick and memorable impact on the audience.</li>
    <li><strong>Too trendy:</strong> Following design trends too closely can result in a logo that quickly becomes outdated, losing its relevance over time.</li>
  </ul>
  <p>By avoiding these common pitfalls, a brand can ensure that its logo remains effective, timeless, and aligned with its identity.</p>
</Col>
        <Row>

        </Row>
        <br />
      </Container>
    </div>
  );
};

export default Logo;
