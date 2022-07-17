export interface IClub {
  _id: string,
  
  name: string;
  companyNumber: Number;
  region: string,

  street: String;
  city: String;
  zip: Number;

  contactPerson: String;
  contactEmail: String;
  contactPhone: String;

  bankAccount: String;

  web: String;
  facebook: String;
  instagram: String;

  map: String;
  qrCodeForMap: String;

  isActive: Boolean;

  dateCreated: Date;
}
