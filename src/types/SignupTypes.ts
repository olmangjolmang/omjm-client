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