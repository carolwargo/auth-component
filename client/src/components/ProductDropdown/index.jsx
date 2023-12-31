import React, { useState } from "react";


export const ProductDropdown = () => {

      // State for input values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  //const [address, setAddress] = useState("");
  //const [city, setCity] = useState("");
  //const [state, setState] = useState("");
  //const [zip, setZip] = useState("");

  const [textarea, setTextarea] = useState("");

  
  // State for dropdowns
  const [preference1, setPreference1] = useState("");

  // State for radio buttons
  const [selectedOption, setSelectedOption] = useState("");

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

    /*
    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleStateChange = (event) => {
        setState(event.target.value);
    };

    const handleZipChange = (event) => {
        setZip(event.target.value);
    };
*/
const handleTextareaChange = (event) => {
    setTextarea(event.target.value);
};
  
  const handleDropdownChange1 = (event) => {
    setPreference1(event.target.value);
  };

  const handleUseType = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleServiceType = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      
      <div className="p-4">
            <form onSubmit={handleSubmit}>

           
   {/*
    <div className="row g-5">
    <div className="col-md-12 mb-2">
    <label htmlFor="validationDefaultStreet">STREET ADDRESS</label>
    <input
      type="text"
      className="form-control border border-black"
      id="validationDefaultStreet"
      placeholder="123 Main St"
      value={address}
      required
      onChange={handleAddressChange}
    />
  </div>
  </div>
 
<div className="row g-5">
  <div className="col-md-6 mb-2">
    <label htmlFor="validationDefaultCity"  className="form-label">CITY</label>
    <input
      type="text"
      className="form-control border border-black"
      id="validationDefaultCity"
      placeholder="Anytown"
      value={city}
      required
      onChange={handleCityChange}
    />
  </div>

<div className="col-md-3 mb-2">
<label htmlFor="inputState" className="form-label">
    STATE
  </label>
  <select
    className="form-select border border-black"
    id="inputState"
    value={state}
    onChange={handleStateChange}
  >
  <option selected>Choose...</option>
  <option>Alabama</option>
  <option>Alaska</option>
  <option>Arizona</option>
  <option>Arkansas</option>
  <option>California</option>
  <option>Colorado</option>
  <option>Connecticut</option>
  <option>Delaware</option>
  <option>Florida</option>
  <option>Georgia</option>
  <option>Hawaii</option>
  <option>Idaho</option>
  <option>Illinois</option>
  <option>Indiana</option>
  <option>Iowa</option>
  <option>Kansas</option>
  <option>Kentucky</option>
  <option>Louisiana</option>
  <option>Maine</option>
  <option>Maryland</option>
  <option>Massachusetts</option>
  <option>Michigan</option>
  <option>Minnesota</option>
  <option>Mississippi</option>
  <option>Missouri</option>
  <option>Montana</option>
  <option>Nebraska</option>
  <option>Nevada</option>
  <option>New Hampshire</option>
  <option>New Jersey</option>
  <option>New Mexico</option>
  <option>New York</option>
  <option>North Carolina</option>
  <option>North Dakota</option>
  <option>Ohio</option>
  <option>Oklahoma</option>
  <option>Oregon</option>
  <option>Pennsylvania</option>
  <option>Rhode Island</option>
  <option>South Carolina</option>
  <option>South Dakota</option>
  <option>Tennessee</option>
  <option>Texas</option>
  <option>Utah</option>
  <option>Vermont</option>
  <option>Virginia</option>
  <option>Washington</option>
  <option>West Virginia</option>
  <option>Wisconsin</option>
  <option>Wyoming</option>
</select>

  </div>
  <div className="col-md-3 mb-2">
    <label htmlFor="validationDefaultZip"  className="form-label">ZIP CODE</label>
    <input
      type="text"
      className="form-control border border-black"
      id="validationDefaultZip"
      placeholder="zip-code"
      value={zip}
      required
      onChange={handleZipChange}
    />
  </div>
</div>
 */}
 <br></br>
 
 <h6 >ANSWER THE QUESTIONS, FILL IN THE BLANKS & PRESS SUBMIT...</h6>  
 <br></br>   
 <div className="row">
  <div className="col-md-8">
  </div>
  <div className="col-md-4">
  </div>
  </div>
<div className="row">  
<p><b>What is your use & need?</b></p> 
                <div className="col-md-12">
               <p><b>1. Is this for personal or business use? </b></p> 
               <div style={{paddingLeft:'2rem'}}>
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
                      checked={selectedOption === "Personal"}
                      onChange={handleUseType}
                    />
                    <label className="form-check-label" htmlFor="gridRadiosPersonal">
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
                      checked={selectedOption === "Business"}
                      onChange={handleUseType}
                    />
                    <label className="form-check-label" htmlFor="gridRadiosBusiness">
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
                      checked={selectedOption === "Other"}
                      onChange={handleUseType}
                    />
                    <label className="form-check-label" htmlFor="gridRadiosOther">
                      Other
                    </label>
                  </div>
                </div>
              </fieldset>
              </div>
            

{/* Radio form controls print or design preference */}
<p><b>2. What do you need from us? </b></p> 
<div style={{paddingLeft:'2rem'}}>
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
    checked={selectedOption === "Design Service"}
    onChange={handleServiceType}
  />
                   <label className="form-check-label" htmlFor="gridRadiosDesignService">
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
                      checked={selectedOption === " Print Service"}
                      onChange={handleServiceType}
                    />
                    <label className="form-check-label" htmlFor="gridRadiosPrintService">
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
                      checked={selectedOption === "Web Development"}
                      onChange={handleServiceType}
                    />
                    <label className="form-check-label" htmlFor="gridRadiosWebDevelopmentService">
                      Web Development
                    </label>
                  </div>
                </div>
              </fieldset>
              </div>
              <br></br>
              <br></br>
                </div>

{/* Text Area form controls here */}
<div className="row mb-2">  
 
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
  </div>
  </div>
              {/* Select product dropdown form controls here */}
              <div className="row g-5 ">   
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
</div>

<div className="row g-3">   

<div>
<p><b>5. Please Provide Your Contact Information: </b></p>
    <p>In addition to contact information, include anything you would like us to know regarding communication in the <i>"Additional Comments"</i> section provided. <span>
    <i>Examples: Preferred method of communication, time of day, and/or alternative point of contact.</i></span></p>
    </div>

  <div className="col-md-6 mb-2">
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
  <div className="col-md-6 mb-2">
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

  <div className="row ">
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
         <br></br>
              <button type="submit" className="btn btn-primary">
                Submit Info
              </button>
            </form>
          </div>   
      </div>

    
  );
};
