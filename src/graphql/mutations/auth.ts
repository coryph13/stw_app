import { gql } from "graphql-request";

export const REGISTER_MUTATION = gql`
  mutation Register($name: String!, $login: String!, $password: String!) {
    register(name: $name, login: $login, password: $password) {
      message
      user {
        id
        name
        login
      }
    }
  }
`;

export const VERIFY_REGISTRATION_CODE_MUTATION = gql`
  mutation VerifyRegistrationCode($login: String!, $code: String!) {
    verifyRegistrationCode(login: $login, code: $code) {
      message
      access_token
      token_type
      expires_in
      user {
        id
        name
        login
      }
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation Login($login: String!, $password: String!) {
    login(login: $login, password: $password) {
      access_token
      token_type
      expires_in
      user {
        id
        name
        login
      }
    }
  }
`;

export const LOGOUT_MUTATION = gql`
  mutation Logout {
    logout {
      message
    }
  }
`;

export const REQUEST_PASSWORD_RESET_MUTATION = gql`
  mutation RequestPasswordReset($login: String!) {
    requestPasswordReset(login: $login) {
      message
    }
  }
`;

export const RESET_PASSWORD_MUTATION = gql`
  mutation ResetPassword($login: String!, $code: String!, new_password: String!) {
    resetPassword(login: $login, code: $code, new_password: $new_password) {
      message
    }
  }
`;

export const RESEND_CODE_MUTATION = gql`
  mutation ResendCode($login: String!) {
    resendCode(login: $login) {
      message
    }
  }
`;