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
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-12">
          <div className="bg-black text-white p-3">
          <p>HELP US, HELP YOU BRING YOUR VISION TO LIFE...</p>
        <h1  style={{
                fontFamily: "Great Vibes",
                color: "#0F7E8F",
                textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              }}
              >
              Share Your Thoughts Below!</h1>
      </div>
          </div>
        </div>

<div className="row">
<div className="col-md-8 ">
  
  <ProductDropdown />
</div>
<div className="col-md-4 mt-5">
  
    <div className="bg-black text-white p-4" >
    <h5 style={{fontFamily:'monospace'}}>1. BUSINESS vs. PERSONAL:<span style={{color:'gray', fontSize:'1rem', fontFamily:'monospace'}}> <br></br>The importance of disclosing use...</span> </h5>
    <p style={{fontSize:"14px"}}>Business use considerations may include but, are not limited to the following:
    </p>
        <ol style={{fontSize:"14px"}}>
        <li>Alignment of brand identity & marketing strategies</li>
        <li>Avoiding copyright legalities and licensing requirements.</li>
        <li>Budget; resource allocation</li>   
        </ol> 
<p style={{fontSize:"14px"}}>Understanding the project's scope ensures the final product meets its intended goals without compromising business standards.</p>
</div>
<br></br>
<div className="bg-black text-white p-4" >
   <p>Providing detailed information ensures that the design aligns with your vision, and it helps the designer create a product that meets your expectations. </p>
    
   </div>
</div>

   </div>   

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
    </div>

  );
};

export default GraphicDesignHeader;
