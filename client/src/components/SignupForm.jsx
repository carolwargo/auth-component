import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_USER } from '../utils/mutations';
import { QUERY_USERS } from '../utils/queries';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [addUser, { error }] = useMutation(ADD_USER, {
    update(cache, { data: { addUser } }) {
      try {
        const { users } = cache.readQuery({ query: QUERY_USERS });
  
        cache.writeQuery({
          query: QUERY_USERS,
          data: { users: [...users, addUser] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });
  

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
        await addUser({
          variables: { name, email, password }, // Include email and password
        });
      
        setName('');
        setEmail('');
        setPassword('');
      } catch (err) {
        console.error(err);
      }
    };

  return (
    <div>
      <h3>Sign Up To Register</h3>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <input
            placeholder="Enter full name"
            value={name}
            className="form-input w-100"
            onChange={(event) => setName(event.target.value)}
          />
           <input
            placeholder="Use Email..."
            value={email}
            className="form-input w-100"
            onChange={(event) => setEmail(event.target.value)}
          />
           <input
            placeholder="Add Password..."
            value={password}
            className="form-input w-100"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-info btn-block py-3" type="submit">
           Register
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default SignupForm;

