import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to submit the form data (e.g., send a request to your backend)
    // For simplicity, let's just set the subscribed state to true.
    setSubscribed(true);
  };

  return (
    <section>
      <div className="container">
        {/* CTA box */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Background illustration */}
            <div className="position-absolute right-0 top-0 ml-5 pointer-events-none" aria-hidden="true">
              <svg width="238" height="110" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* SVG path data */}
              </svg>
            </div>

            <div className="d-flex flex-column lg:flex-row justify-content-between items-center text-white p-5" data-aos="fade-up" style={{backgroundColor:'red'}}>
              {/* CTA content */}
              <div className="mb-6 lg:mb-0 text-center lg:text-left lg:w-1/2">
                <h3 className="h3 mb-2">Stay in the loop</h3>
                <p className="text-light text-lg">Join our newsletter to get top news before anyone else.</p>
              </div>

              {/* CTA form */}
              <form className="w-full lg:w-1/2" onSubmit={handleFormSubmit}>
                <div className="d-flex flex-column flex-sm-row justify-content-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                  <input
                    type="email"
                    className="w-full form-control mb-2 mr-sm-2"
                    placeholder="Your best email…"
                    aria-label="Your best email…"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <button type="submit" className="btn btn-outline-light  mr-sm-2">
                    Subscribe
                  </button>
                </div>
                {/* Success message */}
                {subscribed && <p className="text-center lg:text-left lg:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
