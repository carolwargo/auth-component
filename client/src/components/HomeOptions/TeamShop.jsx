import React, { useState } from "react";
import { useEffect } from "react";

import { GiGraduateCap } from "react-icons/gi";
import { GiBasketballJersey } from "react-icons/gi";
import { BsArrowThroughHeart } from "react-icons/bs";
import { PiTShirtDuotone } from "react-icons/pi";
import { IoCloudUploadOutline } from "react-icons/io5";

const TeamShop = () => {
  const [preference1, setPreference1] = useState("");
    const [textarea, setTextarea] = useState("");

  const handleDropdownChange1 = (e) => {
    setPreference1(e.target.value);
  };

    const handleTextareaChange = (e) => {
    setTextarea(e.target.value);
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("You have submitted:", preference1);
  };
  useEffect(() => {
    const handleHover = () => {
      document.getElementById('exampleSpan').addEventListener('mouseover', function () {
        // Display the message when the span is hovered
        document.getElementById('hoverMessage').style.display = 'block';
      });

      document.getElementById('exampleSpan').addEventListener('mouseout', function () {
        // Hide the message when the span is not hovered
        document.getElementById('hoverMessage').style.display = 'none';
      });
    };

    // Call the function to set up the event listeners
    handleHover();

    // Cleanup the event listeners when the component is unmounted (optional)
    return () => {
      document.getElementById('exampleSpan').removeEventListener('mouseover', handleHover);
      document.getElementById('exampleSpan').removeEventListener('mouseout', handleHover);
    };
  }, []);

  return (
    <div>
      <div className="container">
        <h1 className="mt-5">TEAM SHOP</h1>
        <br></br>
        <div className="row p-5">
        <div className="col-sm-12 col-md-3 col-lg-3 d-flex flex-column align-items-center" id="#senior-nights">

            <GiGraduateCap style={{ fontSize: "80px" }} />
            <p>Senior Nights</p>
          </div>
            <div className="col-sm-12 col-md-3 col-lg-3 d-flex flex-column align-items-center" id="#team-drip">
    
            <GiBasketballJersey style={{ fontSize: "80px" }} />
            <p>Team "Drip"</p>
          </div>
            <div className="col-sm-12 col-md-3 col-lg-3 d-flex flex-column align-items-center" id="#spirit-wear">
    
            <PiTShirtDuotone style={{ fontSize: "80px" }} />
            <p>Spirit Wear</p>
          </div>
            <div className="col-sm-12 col-md-3 col-lg-3 d-flex flex-column align-items-center" id="#girlfriend-gear">
    
            <BsArrowThroughHeart style={{ fontSize: "80px" }} />
            <p>Girlfriend Gear</p>
          </div>
        </div>
        {/*^ end icon row*/}
      </div>
      {/*^ end icon container*/}

      <div className="container" id="senior-nights">
      
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
           <form onSubmit={handleSubmit} className="form-team-shop">
            <h3>Custom Banners</h3>
            <h6>Represent your Seniors loud and proud!</h6>
            <br></br>

              <div className="form-content">
                <div>
                  <p>
                    {" "}
                    <b>Banner sizes:</b><br></br><i>Banner design pricing starts at $50.</i>
                  </p>
                  <p
                    style={{
                      paddingLeft: ".5em",
                      paddingRight: ".5rem",
                      fontSize: "12px",
                      color: "gray",
                    }}
                  >
                    If you do not see what you are looking for, choose "Not
                    Listed & describe in your own words".
                  </p>
                  <label
                    className="col-form-label"
                    htmlFor="specificSizeSelect1"
                  >
                  </label>
                  <select
                    className="form-select border border-black"
                    id="specificSizeSelect1"
                    value={preference1}
                    onChange={handleDropdownChange1}
                  >
                    <option value="">Banner Options...</option>
                    <option value="1">2x3  Design Only</option>
                    <option value="2">2x3  Design & Print</option>
                    <option value="3">2x4  Design Only</option>
                    <option value="4">2x4  Design & Print</option>
                    <option value="5">3x5  Design Only </option>
                    <option value="6">2x4  Design & Print</option>
                    <option value="7">3x6  Design Only</option>
                    <option value="8">2x4  Design & Print</option>
                    <option value="9">Custom Sizing</option>
                  </select>
                </div>
                <br></br>
              <br></br>
              <div className="upload">
                <p className="mb-1">Upload photo if desired.</p>
                
                <p className="p-1 border border-black rounded text-center">Upload <IoCloudUploadOutline/></p>
                </div>
          
                <p className="text-center mt-1 mb-1">-or-</p>
            
<div className="form-group">
<label htmlFor="exampleFormControlTextarea1" className="mb-1">
        Describe your product vision or need. <br></br><span id="exampleSpan" style={{fontSize:'12px' }}>Description Example...</span>
      </label>
      <p id="hoverMessage" style={{ paddingLeft: '.5rem', paddingRight: '.5rem', fontSize: '12px', color: 'gray'}} className="mb-2">
        <i>"I need a 4x6 postcard (1000 printed copies) AND Facebook Ad by 12/01/2021, designed for a grand opening at John Doe Dealership, located at 123 Anywhere St. MyTown taking place on 01/01/2021 (1pm-6pm). I want a sparkling aesthetic, with red & white text, calligraphy font & a picture of a car."</i>
      </p>
    <textarea className="form-control border border-dark" 
    id="exampleFormControlTextarea1" 
    rows="4"
    value={textarea} required
    onChange={handleTextareaChange}
    >
    </textarea>
    </div>  
    </div>
            </form>
          </div>
 {/* ^ end senior night left col*/}
          <div className="col-sm-12 col-md-6 col-lg-6 p-5">   
          
            <br></br>
            <h5>CUSTOMIZATION OPTIONS:</h5>
            <ul>
                <li><b>Size:</b> Choose The Dimensions</li>
                <li><b>Orientation:</b> Horizontal or Vertical</li>
                <li><b>Hanging:</b> Grommets or No Grommets</li>
                <li><b>Material:</b> Indoor or Outdoor</li>
            </ul>
            <br></br>
            <h5>COST FACTORS: <span style={{fontSize:'12px', color:'gray'}}>to include but, are not limited to...</span></h5>
            <ol>
            <li style={{marginBottom:'.5rem'}}><b>Design</b> pricing is typically based on need & quantity.</li>
            
            <li><b>Print</b> pricing is typically based on the following:</li>
            
            <ul>
                <li><b>Size:</b> Choose The Dimensions</li>
                <li><b>Orientation:</b> Horizontal or Vertical</li>
                <li><b>Hanging:</b> Grommets or No Grommets</li>
                <li><b>Material:</b> Indoor or Outdoor</li>
            </ul>
         </ol>
            </div>
          {/* ^ end senior night right col*/}
        </div>
        {/* ^ end senior night row*/}
        <br></br>
      </div>
{/* ^ end senior night container*/}

      <div className="container" id="team-drip">
        <h3 className="mt-5">TEAM DRIP</h3>
        <p>Represent your Team, Organization or School!</p>
        
      </div>
    </div>
  );
};

export default TeamShop;
