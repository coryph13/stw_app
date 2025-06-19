// src/types/auth.ts

export interface User {
  id?: string;
  name: string;
  login?: string;
}

export interface RegisterInput {
  name: string;
  login: string;
  password: string;
}

export interface RegisterResponse {
  message: string;
  user: User;
}

export interface VerifyRegistrationCodeInput {
  login: string;
  code: string;
}

export interface VerifyRegistrationCodeResponse {
  message: string;
  user: User;
}

export interface LoginInput {
  login: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
  expires_in: string;
  user: User;
}

export interface LogoutResponse {
  message: string;
}

// export interface UpdateProfileInput {
//   name?: string;
//   password?: string;
// }

// export interface UpdateProfileResponse {
//   updateProfile: {
//     message: string;
//     user: User;
//   };
// }

export interface RequestPasswordResetInput {
  login: string;
}

export interface RequestPasswordResetResponse {
  message: string;
}

export interface ResetPasswordInput {
  login: string;
  code: string;
  new_password: string;
}

export interface ResetPasswordResponse {
  message: string;
}