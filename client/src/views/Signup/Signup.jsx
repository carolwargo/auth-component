import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SIGN_UP = gql`
  mutation SignUp($name: String!, $email: String!, $password: String!) {
    signUp(name: $name, email: $email, password: $password) {
      // Define what data you want to retrieve after successful signup
    }
  }
`;

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signUp] = useMutation(SIGN_UP);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    signUp({ variables: { name, email, password } })
      .then(response => {
        // Handle success (if needed)
        console.log('Sign up successful:', response);
      })
      .catch(error => {
        // Handle error (if needed)
        console.error('Error signing up:', error);
      });
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicFullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="name"
          placeholder="Enter Full Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicFullName">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicFullName">
        <Form.Label>Choose Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Choose Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>

      {/* Add similar Form.Group components for Email and Password */}
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default SignupPage;
