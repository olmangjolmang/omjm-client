export interface Errors {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
}

export interface Touched {
  email: boolean;
  nickname: boolean;
  password: boolean;
  passwordConfirm: boolean;
}

export interface SignupPayload {
  email: string;
  password: string;
  nickname: string;
  
}

// export interface ProfileCompletionPayload {
//   category: string;
// }

export interface SignupResponse {
  token: string;
}

export interface SignupErrorResponse {
  message: string;
}
