export interface ILoginUser {
  username: string;
  password: string;
}

export interface ILoginUserAuth {
  username: string;
  password: string;
}

export interface IUser {
  id: number;
  username: string;
  about: string;
  avatar: string;
  email: string;
  // wishes: Array<string>;
  createdAt: Date;
  updatedAt: Date;
}
