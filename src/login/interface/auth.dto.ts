import { User } from "../../user/interface/user";

export interface LoginReqDto {
  username: string;
  password: string;
}

export interface LoginResDto {
  readonly user: User;
  readonly access_token: string;
}
