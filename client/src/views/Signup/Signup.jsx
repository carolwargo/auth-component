import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import '../../style/signup.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';
import Feedback from 'react-bootstrap/esm/Feedback';

const SignupForm = () => {
  
  // set initial form state
  const [signUpFormData, setSignUpFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignUpFormData({ ...signUpFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...signUpFormData },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setSignUpFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{backgroundColor:'#f1f1f1', 
      padding: '1px', 
      borderRadius:'10px', 
      boxShadow:'0 4px 8px rgba(0, 0, 0, 0.5)',
    fontFamily:'Poppins'}}
    >
      {/* This is needed for the validation functionality above */}
      <form novalidated='true' onSubmit={handleFormSubmit}>
      <h2>SIGN<span className="span">UP</span></h2>
      <p>Already have an account? <Link to='/login'>Login here!</Link><br></br> 
      <br></br>
  Want to create an account? <br></br>Complete the following and press "Create My Account"!</p>

        {/* show alert if server response is bad */}
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your signup!
        </Alert>
        <div className='form-group '>
          <label htmlFor="signupName">
          </label>
          <input
            type="text"
            className='form-control'
            id='signupName'
            placeholder="Enter Name"
            name="name"
            onChange={handleInputChange}
            value={signUpFormData.name}
            required
          />
          <Feedback type="invalid">
            name is required!
          </Feedback>
        </div>

        <div className='form-group '>
          <label htmlFor="signupEmail">
          </label>
          <input
            type="email"
            className='form-control'
            id='signupEmail'
            placeholder="Your email address"
            name="email"
            onChange={handleInputChange}
            value={signUpFormData.email}
            required
          />
          <Feedback type="invalid">
            Email is required!
          </Feedback>
        </div>

        <div className='form-group '>
          <label htmlFor="signupPassword">
            </label>
          <input
            type="password"
            className='form-control'
            id='signupPassword'
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={signUpFormData.password}
            required
          />
          <Feedback type="invalid">
            Password is required!
          </Feedback>
        </div>
        <br />
        <p style={{fontSize:'12px', color:'gray'}}>By creating an account, you have read and agree to our <Link to='/signupTerms'>Two-Faced General Terms and Conditions</Link>. For more details on how we use the information we collect about you, please read our <Link to= '/privacy-policy'>Two-Faced Privacy and Cookie Policy</Link>.</p>
       
        <button
          disabled={
            !(
              signUpFormData.name &&
              signUpFormData.email &&
              signUpFormData.password
            )
          }
          type="submit"
          variant="success"
          className="form-button btn-success">
         Create My Account
        </button>
     </form>
    </motion.div>
    </div>
  );
};

export default SignupForm;
