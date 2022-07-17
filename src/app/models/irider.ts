import { IClub } from "./iclub";

export interface IRider {
  _id: string;
  uciid: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  rodnecislo: string;
  gender: string;
  street: string;
  city: string;
  zip: string;
  girlBonus: boolean;
  email: string;
  is20: boolean;
  is24: boolean;
  isElite: boolean;
  club: IClub;
  transponder20: string;
  transponder24: string;
  plate: number;
  plateColor20: string;
  class20: string;
  class24: string;
  emergencyContact: string;
  emergencyPhone: string;
  isActive: boolean;
  isApprowe: boolean;
  photo: string;
  isValid: boolean;
  created: Date;
}
