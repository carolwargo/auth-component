import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { ProductDropdown } from "../../components/ProductDropdown";

const GraphicDesignHeader = () => {
  const handleButtonClick = () => {
    const targetElement = document.getElementById("graphic-design-packages");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
  
      <div>
        
       <ProductDropdown />
     
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       
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
    
  );
};

export default GraphicDesignHeader;
