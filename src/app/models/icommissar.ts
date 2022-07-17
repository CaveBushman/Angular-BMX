import { IUser } from "./iuser";

export interface ICommissar {

  _id: string,
  user: IUser,
  level: string,
}
