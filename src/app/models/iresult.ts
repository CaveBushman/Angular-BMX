import { IEvent } from "./ievent";
import { IRider } from "./irider";

export interface IResult {

  _id: string,
  event: IEvent,
  rider: IRider,
  category: string, 
  position: number,
  marked: boolean,
  point: number,
  is20: boolean,
  created: Date,
}
