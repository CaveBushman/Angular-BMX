import {IUser} from "./iuser";

export interface INews {

  _id: string,
  title: string,
  content: string,
  photo: string,
  photo2: string,
  author: IUser,
  created: Date,
  timeToRead: number,
  onHomepage: boolean,
  published: boolean,
}
