import React from "react";
import { Container } from "react-bootstrap";

const ContactForm = () => {
  return (
    <div>
        <Container>
      <br></br>
      <h1>design FORM INQUIRYDHFASH;</h1>
      <br></br>
      <br></br>
      <Container>
        <form class="row g-2 needs-validation" novalidate>
          <div class="col-md-3">
            <div class="form-outline">
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                value="First Name"
                required
                style={{ color: "gray" }}
              />
              <label for="validationCustom01" class="form-label">
                First name
              </label>
              <div class="valid-feedback">Looks good!</div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="form-outline">
              <input
                type="text"
                class="form-control"
                id="validationCustom02"
                value="Last Name"
                required
                style={{ color: "gray" }}
              />
              <label for="validationCustom02" class="form-label">
                Last name
              </label>
              <div class="valid-feedback">Looks good!</div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="form-outline">
              <input
                type="text"
                class="form-control"
                id="validationCustom03"
                value="Email"
                required
                style={{ color: "gray" }}
              />
              <label for="validationCustom03" class="form-label">
                Email
              </label>
              <div class="invalid-feedback">Please provide a valid email.</div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="form-outline">
              <input
                type="text"
                class="form-control"
                id="validationCustom04"
                value="Phone Number"
                required
                style={{ color: "gray" }}
              />
              <label for="validationCustom04" class="form-label">
                Phone Number
              </label>
              <div class="valid-feedback">Looks good!</div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-outline">
              <input
                type="text"
                class="form-control"
                id="validationCustom05"
                value="Street Address"
                required
                style={{ color: "gray" }}
              />
              <label for="validationCustom05" class="form-label">
                Street Address
              </label>
              <div class="valid-feedback">Looks good!</div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="form-outline">
              <input
                type="text"
                class="form-control"
                id="validationCustom06"
                value="City"
                required
                style={{ color: "gray" }}
              />
              <label for="validationCustom06" class="form-label">
                City
              </label>
              <div class="invalid-feedback">Please provide a valid city.</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-outline">
              <input
                type="text"
                class="form-control"
                id="validationCustom07"
                value="Zip Code"
                required
                style={{ color: "gray" }}
              />
              <label for="validationCustom07" class="form-label">
                Zip
              </label>
              <div class="invalid-feedback">Please provide a valid zip.</div>
            </div>
          </div>
          <div class="col-12">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label class="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div class="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">
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
              <option>Company</option>
              <option>Individual</option>
            </select>
          </div>

          <div className="form-group">
            <label for="exampleFormControlSelect1">Service</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Graphic Design</option>
              <option>Web Development</option>
              <option>Software Development</option>
              <option>Digital Marketing</option>
              <option>Ecommerce</option>
            </select>
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect1">Budget</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>$500-$1000</option>
              <option>$1000-$5000</option>
              <option>$5000-$10000</option>
              <option>$10000+</option>
            </select>
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect1">Timeframe</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>1-4 weeks</option>
              <option>1-3 months</option>
              <option>3-6 months</option>
              <option>6+ months</option>
            </select>
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect1">
              How did you hear about us?
            </label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Google</option>
              <option>Facebook</option>
              <option>Instagram</option>
              <option>LinkedIn</option>
              <option>Referral</option>
              <option>Other</option>
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
