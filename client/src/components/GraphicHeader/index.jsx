import React from "react";
import { motion } from "framer-motion";
import { MDBBtn } from "mdb-react-ui-kit";
import Graffiti2 from "../../assets/images/Graffiti2.png";

const GraphicDesignHeader = () => {
  const handleButtonClick = () => {
    const targetElement = document.getElementById("graphic-design-packages");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <header>
          <div
            id="intro-example"
            className="p-5 text-center bg-image"
            style={{
              backgroundImage: `url(${Graffiti2})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          >
            <div
              className="mask"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.0)" }}
            >
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white">
                  <h5>GRAPHIC DESIGN SERVICES</h5>
                  <h1 className="mb-3">Let's Get Started</h1>
                  <div>
                  <MDBBtn
                    className="m-2"
                    tag="button" 
                    outline
                    size="lg"
                    onClick={handleButtonClick}
                  >
                    Choose A Product
                  </MDBBtn>

                  <MDBBtn
                    className="m-2"
                    tag="button" // Use 'button' instead of 'a'
                    outline
                    size="lg"
                    onClick={handleButtonClick}
                  >
                    Get Inspired
                  </MDBBtn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </motion.div>
  );
};

export default GraphicDesignHeader;
