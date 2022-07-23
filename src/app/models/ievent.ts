import { IClub } from "./iclub";
import { ICommissar } from "./icommissar";
import { IEventClasses } from "./ieventclasses";

export interface IEvent {
  _id: string;
  name: string;
  organizer: IClub;
  date: Date;
  isUciEvent: boolean;
  pcp: ICommissar;
  apcp: ICommissar;
  rankingType: string;
  eventClasses : IEventClasses,
  isRegOpen: boolean;
  regOpenTo: Date;
  proposition: string;
  commissionFee: number;
  backupBEM: string;
  backupBEM2: string;
  resultSeries: string;
  resultsPDF: string;
  resultsFast: string;
  resultXLS: string;
  canceled: boolean;
}
