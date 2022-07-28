import { gql } from "@apollo/client";

export const SIGN_UP = gql`
  mutation (
    $username: String!
    $email: String!
    $password: String!
    $dopamine_management_datum: ID!
  ) {
    createUsersPermissionsUser(
      data: {
        username: $username
        email: $email
        password: $password
        dopamine_management_datum: $dopamine_management_datum
      }
    ) {
      data {
        id
      }
    }
  }
`;

export const LOGIN = gql`
  mutation ($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        username
        email
      }
    }
  }
`;
