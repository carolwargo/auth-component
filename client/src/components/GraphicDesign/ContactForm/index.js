import React from "react";
import { Container } from "react-bootstrap";

const ContactForm = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <Container>
        <form className="row g-3 p-2">
          <div className="col-md-4">
            <div className="form-outline">
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                value="Mark"
                required
              />
              <label for="validationDefault01" className="form-label">
                First name
              </label>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-outline">
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                value="Otto"
                required
              />
              <label for="validationDefault02" className="form-label">
                Last name
              </label>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-group form-outline">
              <span className="input-group-text" id="inputGroupPrepend2">
                @
              </span>
              <input
                type="text"
                className="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                required
              />
              <label for="validationDefaultUsername" className="form-label">
                Username
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-outline">
              <input
                type="text"
                className="form-control"
                id="validationDefault03"
                required
              />
              <label for="validationDefault03" className="form-label">
                City
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-outline">
              <input
                type="text"
                className="form-control"
                id="validationDefault05"
                required
              />
              <label for="validationDefault05" className="form-label">
                Zip
              </label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck2"
                required
              />
              <label className="form-check-label" for="invalidCheck2">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </Container>
      <Container>
        <br></br>
        <h1>design FORM INQUIRYDHFASH;</h1>
        <br></br>
        <br></br>
        <Container>
          <form className="row g-2 needs-validation" novalidate>
            <div className="col-md-3">
              <div className="form-outline">
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  value="First Name"
                  required
                  style={{ color: "gray" }}
                />
                <label
                  for="validationCustom01"
                  className="form-label"
                  style={{ paddingLeft: "12px" }}
                ></label>
                <div className="valid-feedback">Looks good!</div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="form-outline">
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom02"
                  value="Last Name"
                  required
                  style={{ color: "gray" }}
                />
                <label
                  for="validationCustom02"
                  className="form-label"
                  style={{ paddingLeft: "12px" }}
                ></label>
                <div className="valid-feedback">Looks good!</div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-outline">
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom03"
                  value="Email"
                  required
                  style={{ color: "gray" }}
                />
                <label
                  for="validationCustom03"
                  className="form-label"
                  style={{ paddingLeft: "12px" }}
                ></label>
                <div className="invalid-feedback">
                  Please provide a valid email.
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-outline">
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom04"
                  value="Phone Number"
                  required
                  style={{ color: "gray" }}
                />
                <label
                  for="validationCustom04"
                  className="form-label"
                  style={{ paddingLeft: "12px" }}
                ></label>
                <div className="valid-feedback">Looks good!</div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-outline">
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom05"
                  value="Street Address"
                  required
                  style={{ color: "gray" }}
                />
                <label
                  for="validationCustom05"
                  className="form-label"
                  style={{ paddingLeft: "12px" }}
                ></label>
                <div className="valid-feedback">Looks good!</div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-outline">
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom06"
                  value="City"
                  required
                  style={{ color: "gray" }}
                />
                <label
                  for="validationCustom06"
                  className="form-label"
                  style={{ paddingLeft: "12px" }}
                ></label>
                <div className="invalid-feedback">Please provide a valid city.</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-outline">
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom07"
                  value="Zip Code"
                  required
                  style={{ color: "gray" }}
                />
                <label
                  for="validationCustom07"
                  className="form-label"
                  style={{ paddingLeft: "12px" }}
                ></label>
                <div className="invalid-feedback">Please provide a valid zip.</div>
              </div>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                />
                <label
                  className="form-check-label"
                  for="invalidCheck"
                  style={{ paddingLeft: "12px", color: "gray" }}
                >
                  Agree to terms and conditions
                </label>
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <br></br>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </form>
        </Container>

        <br></br>
        <br></br>
        <br></br>

        <Container>
          <form>
            <div className="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input
                type="name"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="    Name"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Phone Number</label>
              <input
                type="phone"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Phone Number"
              />
            </div>

            <div className="form-group">
              <label for="exampleFormControlSelect1">Company</label>
              <select className="form-control" id="exampleFormControlSelect1">
              <option value="1">Company</option>
                <option value="2">Individual</option>
              </select>
            </div>

            <div className="form-group">
              <label for="exampleFormControlSelect1">Service</label>
              <select className="select">
                <option value="1">Business Cards</option>
                <option value="2">Start-Up Essentials</option>
                <option value="3">Logo</option>
                <option value="4">Branding</option>
              </select>
            </div>

            <div className="form-group">
              <label for="exampleFormControlSelect1">Timeframe</label>
              <select className="select">
                <option value="1">1-4 weeks</option>
                <option value="2">1-3 months</option>
                <option value="3">3-6 months</option>
                <option value="4">6+ months</option>
              </select>
            </div>

            <div className="form-group">
              <label for="exampleFormControlFile1">File Upload</label>
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
              />
            </div>

            <div className="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>
          </form>
        </Container>
      </Container>
    </div>
  );
};

export default ContactForm;
