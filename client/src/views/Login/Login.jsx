import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../style/login.css';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';
import Feedback from 'react-bootstrap/esm/Feedback';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [showAlert, setShowAlert] = useState(false);

  const [login, { error }] = useMutation(LOGIN_USER);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
  
    try {
      if (form.checkValidity() === false) {
        // If form validation fails, stop form submission
        event.stopPropagation();
        return;
      }
  
      const { data } = await login({
        variables: { ...userFormData },
      });
  
      console.log(data);
      Auth.login(data.login.token);
    } catch (error) {
      console.error('Login error:', error);
      // Optionally, you can set an error state to display a more user-friendly message
      setShowAlert(true);
    } finally {
      // Always clear form values, even if there was an error
      setUserFormData({
        email: '',
        password: '',
      });
    }
  };
  
  return (
    <>
<div>
<motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{backgroundColor:'#f1f1f1', 
      padding: '10px', 
      borderRadius:'10px', 
      boxShadow:'0 4px 8px rgba(0, 0, 0, 0.5)',
    fontFamily:'Poppins'}}
    >
 <form novalidated='true' onSubmit={handleFormSubmit}>
 <h2 className='mb-0'>LOG<span className="span">IN</span></h2>
  <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your login credentials!
        </Alert>
    <div className="form-group">
      <label 
      htmlFor="loginEmail">
      </label>
      <input 
      type="email" 
      className="form-control" 
      id="loginEmail" 
      aria-describedby="emailHelp" 
      placeholder="Enter Email"
      name="email"
      onChange={handleInputChange}
      value={userFormData.email}
      required
      />

        <Feedback type="invalid">
          Email is required!
        </Feedback>
    </div>
    <div className="form-group">
      <label 
      htmlFor="loginPassword"
      >
      </label>
      <input 
      type="password" 
      className="form-control" 
      id="loginPassword" 
      placeholder="Enter Password"
      name="password"
      onChange={handleInputChange}
      value={userFormData.password}
      required
      />
      <Feedback type="invalid">
            Password is required!
          </Feedback>
    </div>
    <br />
<p className='forgot-password'>
      Forgot <a href="/forgotpassword">password?</a>
    </p>
    <br />
    <p style={{fontSize:'12px', color:'gray'}}>By logging in, you have read and agree to our <Link to='/signupTerms'> Two-Faced General Terms and Conditions</Link>. For more details on how we use the information we collect about you, please read our <Link to= '/privacy-policy'>Two-Faced Privacy and Cookie Policy</Link>.</p>
    <div className="form-check">
    <br />
      <input 
      type="checkbox" 
      className="form-check-input" 
      id="rememberMe"
      />
      <label 
      className="form-check-label" 
      htmlFor="rememberMe">
        Remember Me
        </label>
    </div>
    <button 
    disabled={!(userFormData.email && userFormData.password)}
    type="submit" 
    className="form-button btn-success custom-button">
      Login
      </button>
  
    <p className='text-center'>Need to create an account? <Link to='/signup'>signup now</Link></p>
  </form>
  </motion.div>
</div>
    </>
  );
};

export default LoginForm;
