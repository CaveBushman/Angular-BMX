import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface ISwagger {
  RiderCategory: string;
  TeamCode: string;
  TeamName: string;
  UCIID: number;
  SalutationCode: string;
  FirstName: string;
  LastName: string;
  Nationality: string;
  Continent: string;
  Birthdate: Date;
  Age: number;
  Gender: string;
  Role: string;
}

@Injectable({
  providedIn: 'root'
})
export class RiderService {

  constructor() { }
}
