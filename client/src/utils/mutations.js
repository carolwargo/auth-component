import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      _id
      name
      email
      password  # Make sure to include any other fields you want to retrieve after signup
    }  
  }
`;
export const DELETE_USER = gql`
  mutation deleteUser($userId: ID!) {
    removeUser(userId: $userId) {
      _id
      name
      email
      password
    }
  }
`;
