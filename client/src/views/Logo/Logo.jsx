import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Logo = () => {

    return (
        <div className="logo-page">
                <Container className="logo-header" id="logo-header">
          <h3>
            <b>Get a professionally designed logo that you love!</b>
          </h3>
          <Row>
            <Col xs={6}>
              <h5>
                <b>
                  <u>LOGO DESIGN</u>
                </b>
              </h5>
              <p>
                <b>Logo Design:</b> A logo is
                the most important visual identifier of your brand. By
                arranging symbols, text, and color, a logo designer creates a
                unique mark that communicates the essence of your business's identity.
              </p>
             </Col>
             <Col xs={6}>
                <h5>
                    <b>
                    <u>LOGO DESIGN</u>
                    </b>
                </h5>
                <p>
                    <b>Logo Design:</b> A logo is
                    the most important visual identifier of your brand. By
                    arranging symbols, text, and color, a logo designer creates a
                    unique mark that communicates the essence of your business's identity.
                </p>
            </Col>
          </Row>
          </Container>
        </div>
    )
}

export default Logo;