import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation ADDUSER($user_name: String!, $birth_date: Date!, $email: Email!, $password: String!) {
    addUser(user_name: $user_name, birth_date: $birth_date, email: $email, password: $password) {
      user_name
      birth_date
      email
      password
      dateFormated
    }
  }
`;

export const GET_USERS = gql`
  query users {
    users {
      user_name
      birth_date
      email
      password
      dateFormated
    }
  }
`;