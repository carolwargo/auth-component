import React, { useState } from "react";

export const ProductDropdown = () => {
  // State for dropdowns
  const [preference1, setPreference1] = useState("");

  // State for radio buttons
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange1 = (event) => {
    setPreference1(event.target.value);
  };

  const handleRadioChange1 = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleRadioChange2 = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <div className="row-fluid bg-info-subtle p-4">
        <h1>Share Your Vision</h1>
        <p>HELP US HELP YOU BRING YOUR VISION TO LIFE...</p>
      </div>


      
      <div className="p-4">
        <div className="row">
            <form onSubmit={handleSubmit}>
              <br></br>
              <br></br>

<div className="row">
              <div className="col-md-8">
              {/* Radio form controls here */}
              <fieldset className="row mb-3">
                <legend className="col-form-label col-md-6 pt-0">
                 Is this for personal or business use?
                </legend>
                <div className="col-md-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios1"
                      value="Personal"
                      checked={selectedOption === "Personal"}
                      onChange={handleRadioChange1}
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      Personal
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios2"
                      value="Business"
                      checked={selectedOption === "Business"}
                      onChange={handleRadioChange1}
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      Business
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios3"
                      value="Other"
                      checked={selectedOption === "Other"}
                      onChange={handleRadioChange1}
                    />
                    <label className="form-check-label" htmlFor="gridRadios3">
                      Other
                    </label>
                  </div>
                </div>
              </fieldset>
               

{/* Radio form controls print or design preference */}
               
              <fieldset className="row mb-3">
                <legend className="col-form-label col-md-6 pt-0">
                 What do you need from us?
                </legend>
                <div className="col-md-6">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios1"
                      value="Design Service"
                      checked={selectedOption === "Design Service"}
                      onChange={handleRadioChange2}
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      Design Service
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios2"
                      value=" Print Service"
                      checked={selectedOption === " Print Service"}
                      onChange={handleRadioChange2}
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      Print Service
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios3"
                      value="Web Development"
                      checked={selectedOption === "Web Development"}
                      onChange={handleRadioChange2}
                    />
                    <label className="form-check-label" htmlFor="gridRadios3">
                      Web Development
                    </label>
                  </div>
                </div>
              </fieldset>
                </div>

              {/* Select product dropdown form controls here */}
              <div className="col-md-6">
  <label className="col-form-label" htmlFor="specificSizeSelect1">
    <b>Choose A Product From The Following List Of Options:</b>
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
         


              <button type="submit" className="btn btn-primary">
                Submit Info
              </button>
            </form>
          </div>   
      </div>
    </div>
  );
};
