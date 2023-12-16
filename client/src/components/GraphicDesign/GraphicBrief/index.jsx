import React, { useState } from "react";

function GraphicBrief() {
  // State for radio buttons
  const [useType, setUseType] = useState("");
  const [serviceType, setServiceType] = useState("");
    const [textarea, setTextarea] = useState("");
const [preference1, setPreference1] = useState("");
    // State for text inputs
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


  const handleUseType = (event) => {
    setUseType(event.target.value);
  };

  const handleServiceType = (event) => {
    setServiceType(event.target.value);
  };

  const handleTextareaChange = (event) => {
    setTextarea(event.target.value);
    };

    const handleDropdownChange1 = (event) => {
        setPreference1(event.target.value);
        };

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
        };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
        };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
        };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };
  return (
    <div className="p-4">
      <h1>Graphic Brief</h1>
      <h6>ANSWER THE QUESTIONS, FILL IN THE BLANKS & PRESS SUBMIT...</h6>
      <br></br>
      <div className="row">
        <form onSubmit={handleSubmit} className="col-md-8">
          <div>
            <p>
              <b>What is your use & need?</b>
            </p>
            <p>
              <b>1. Is this for personal or business use? </b>
            </p>
            <div style={{ paddingLeft: "2rem" }}>
              <fieldset className="row mb-2">
                <legend className="col-form-label col-md-6 pt-0">
                  Choose An Option:
                </legend>
                <div className="col-md-6">
                  <div className="form-check">
                    <input
                      className="form-check-input border border-dark"
                      type="radio"
                      name="gridRadios"
                      id="gridRadiosPersonal"
                      value="Personal"
                      checked={useType === "Personal"}
                      onChange={handleUseType}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="gridRadiosPersonal"
                    >
                      Personal
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border border-dark"
                      type="radio"
                      name="gridRadios"
                      id="gridRadiosBusiness"
                      value="Business"
                      checked={useType === "Business"}
                      onChange={handleUseType}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="gridRadiosBusiness"
                    >
                      Business
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border border-dark"
                      type="radio"
                      name="gridRadios"
                      id="gridRadiosOther"
                      value="Other"
                      checked={useType === "Other"}
                      onChange={handleUseType}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="gridRadiosOther"
                    >
                      Other
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            <p><b>2. What do you need from us? </b></p> 
            <div style={{ paddingLeft: "2rem" }}>
              <fieldset className="row mb-2">
                <legend className="col-form-label col-md-6 pt-0">
                  Choose An Option:
                </legend>
                <div className="col-md-6">
                  <div className="form-check">
                    <input
                      className="form-check-input border border-dark"
                      type="radio"
                      name="serviceType"
                      id="gridRadiosDesignService"
                      value="Design Service"
                      checked={serviceType === "Design Service"}
                      onChange={handleServiceType}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="gridRadiosDesignService"
                    >
                      Design Service
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border border-dark"
                      type="radio"
                      name="gridRadios"
                      id="gridRadiosPrintService"
                      value=" Print Service"
                      checked={serviceType === " Print Service"}
                      onChange={handleServiceType}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="gridRadiosPrintService"
                    >
                      Print Service
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input border border-dark"
                      type="radio"
                      name="gridRadios"
                      id="gridRadiosWebDevelopmentService"
                      value="Web Development"
                      checked={serviceType === "Web Development"}
                      onChange={handleServiceType}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="gridRadiosWebDevelopmentService"
                    >
                      Web Development
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            <div >
<b>3. Tell Us In Your Words About Your Vision or Product: </b>
    <p><i>Example: "I need a 4x6 postcard designed for a grand opening event at a John Doe Dealership, located at 123 Anywhere St. MyTown, USA. I want a sparkling aesthetic, with red and white text, calligraphy font, with a picture of a car. The date is 01/01/2021 and I need it by 12/01/2020.  I want to use this for a Facebook ad, and I want to print 1000 copies." 
   </i></p> 

    <label htmlFor="exampleFormControlTextarea1">
        I want...
        </label>
    <textarea className="form-control border border-dark" 
    id="exampleFormControlTextarea1" 
    rows="4"
    value={textarea} required
    onChange={handleTextareaChange}
    >
    </textarea>
  </div>


  <div>
  <label className="col-form-label" htmlFor="specificSizeSelect1">
    <b>4. Choose A Product From The Following List Of Options:</b>
    <p>If you do not see what you are looking for, choose "Not Listed".</p>
  </label>
  <select
    className="form-select"
    id="specificSizeSelect1"
    value={preference1}
    onChange={handleDropdownChange1}
  >
    <option value="">Choose A Product...</option>
    <option value="1">Banners - Starting at...</option>
    <option value="2">Book Covers - Starting at...</option>
    <option value="2">Brochures - Starting at...</option>
    <option value="3">Business Cards - Starting at...</option>
    <option value="19">Cards - Starting at...</option>
    <option value="13">Catalog - Starting at...</option>
    <option value="9">Envelopes</option>
    <option value="4">Flyers - Starting at...</option>
    <option value="10">Forms</option>
    <option value="19">Infographics - Starting at...</option>
    <option value="19">Invitations - Starting at...</option>
    <option value="8">Letterhead</option>
    <option value="19">Logos - Starting at...</option>
    <option value="12">Magazine - Starting at...</option>
    <option value="15">Menus - Starting at...</option>
    <option value="5">Postcards - Starting at...</option>
    <option value="6">Posters - Starting at...</option>
    <option value="19">Presentations - Starting at...</option>
    <option value="17">Product Labels - Starting at...</option>
    <option value="18">Stationery - Starting at...</option>
    <option value="14">Stickers - Starting at...</option>
    <option value="16">T-Shirt - Starting at...</option>
    <option value="7">Yard Signs - Starting at...</option>
    <option value="20">Not Listed</option>
  </select>
</div>


<div className="row">
<div>
<p><b>5. Please Provide Your Contact Information: </b></p>
    <p>In addition to contact information, include anything you would like us to know regarding communication in the <i>"Additional Comments"</i> section provided. <span>
    <i>Examples: Preferred method of communication, time of day, and/or alternative point of contact.</i></span></p>
    </div>

    <div className="col-md-4 mb-2">
    <label htmlFor="validationDefaultFirst">First Name</label>
    <input
      type="text"
      className="form-control border"
      id="validationDefaultFirst"
      placeholder="first name"
      value={firstName}
      required
      onChange={handleFirstNameChange}
    />
  </div>

  <div className="col-md-4 mb-2">
    <label htmlFor="validationDefaultLast">Last Name</label>
    <input
      type="text"
      className="form-control border"
      id="validationDefaultLast"
      placeholder="last name"
      value={lastName}
      required
      onChange={handleLastNameChange}
    />
  </div>
</div>
<div className="row">
<div className="col-md-6 mb-2">
    <label htmlFor="validationDefaultEmail">Email</label>
      <input
        type="email"
        className="form-control border"
        id="validationDefaultEmail"
        placeholder="email@mail.com"
        aria-describedby="inputGroupPrepend2"
        value={email}
        required
        onChange={handleEmailChange}
      />
   </div>
    < div className="col-md-6 mb-4">
    <label htmlFor="validationDefaultPhone"> Phone Number</label>
    <input
        type="text"
        className="form-control border"
        id="validationDefaultPhone"
        placeholder="(xxx) xxx-xxxx"
        value={phone}
        required
        onChange={handlePhoneChange}
        >
    </input>
    </div>
    </div>
    <div className="row">
    <div className=" mb-2">
   <label htmlFor="formControlTextarea2">Additional Comments</label>
   <textarea className="form-control" 
    id="exampleFormControlTextarea2" 
    rows="2"
    value={textarea} required
    onChange={handleTextareaChange}
    >
    </textarea>
    </div>
    </div>
          </div>
          <br></br>
              <button type="submit" className="btn btn-primary">
                Submit Info
              </button>
        </form>

        <div className="col-md-4">
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
    </div>
  );
}

export default GraphicBrief;
