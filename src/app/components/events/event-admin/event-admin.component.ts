import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/app/models/ievent';
import { IEventClasses } from 'src/app/models/ieventclasses';
import { IRider } from 'src/app/models/irider';
import { EventsService } from 'src/app/services/events.service';
import { RidersService } from 'src/app/services/riders.service';
import * as XLSX from 'xlsx';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-event-admin',
  templateUrl: './event-admin.component.html',
  styleUrls: ['./event-admin.component.css'],
})
export class EventAdminComponent implements OnInit {
  event!: IEvent;
  private _eventID!: any;

  isLoading: boolean = true;

  currentYear = new Date().getFullYear();
  ridersList: any = [];
  ridersListToExcel: any = [];
  ridersListFilename: string = '';

  entriesListFilename: string = "";

  eventClasses!: IEventClasses;

  textUpload1: string = 'Click to upload';
  textUpload2: string = 'or drag and drop';

  btnXLS1: string = 'Click to upload';
  btnXLS2: string = 'or drag and drop';

  btnPDF1: string = 'Click to upload';
  btnPDF2: string = 'or drag and drop';

  btnFast1: string = 'Click to upload';
  btnFast2: string = 'or drag and drop';

  btnBEM1: string = 'Click to upload';
  btnBEM2: string = 'or drag and drop';

  fileXLS!: File;
  filePDF!: File;
  fileFast!: File;
  fileBEM!: File;

  constructor(
    private _route: ActivatedRoute,
    private eventsService: EventsService,
    private ridersService: RidersService
  ) {
  }

  ngOnInit(): void {
    this._eventID = this._route.snapshot.paramMap.get('id');
    this.eventsService.getEvent(this._eventID).subscribe((response: any) => {
      this.event = response.data;
      this.isLoading = false;
    });
  }

  getRidersListFile() {
    console.log('Riders list button clicked');
    this.ridersListFilename =
      formatDate(this.event.date, 'yyyy/MM/dd', 'en-EN') + '_riders_list.xlsx';
    this.eventsService
      .getClassAndFee(this.event.eventClasses._id)
      .subscribe((response: any) => {
        console.log(response)
        this.eventClasses = response.data;

        this.ridersService.getValidRiders().subscribe((response: any) => {
          this.ridersList = response.data;
          this.ridersList.forEach((rider: IRider) => {
            // m??n??m gender podle BEM specifikace
            if (rider.gender == 'Mu??') {
              rider.gender = 'M';
            } else {
              rider.gender = 'F';
            }

            // Upravuji kategorie p????mo pro tento z??vod
            rider.class20 = this.eventsService.setClass20(
              rider,
              this.eventClasses
            );
            rider.class24 = this.eventsService.setClass24(
              rider,
              this.eventClasses
            );

            let row = {
              Licence_num: rider.uciid,
              UCI_ID: rider.uciid,
              UCIcode: rider.uciid,
              FederationID: rider.uciid,
              International_Licence_Code: rider.uciid,
              Expiry_date: this.currentYear + '/12/31',
              Licence_type: 'BMX-RACE',
              Status: '',
              Dob: formatDate(rider.dateOfBirth, 'yyyy/MM/dd', 'en-EN'),
              First_name: rider.firstName,
              Surname: rider.lastName.toUpperCase(),
              Email: rider.email,
              Phone: '',
              Emergency_Contact_Person: rider.emergencyContact,
              Emergency_Contact_Number: rider.emergencyPhone,
              Sex: rider.gender,
              CLUB: rider.club.name.toUpperCase(),
              State: 'Czech Republic',
              UCI_Country: 'CZE',
              Class: rider.class20,
              Class2: rider.class24,
              Class3: '',
              Class4: '',
              Plate: rider.plate,
              Plate2: rider.plate,
              Plate3: rider.plate,
              Plate4: rider.plate,
              Ranking: '',
              Ranking2: '',
              Ranking3: '',
              Ranking4: '',
              Transponder: rider.transponder20,
              Transponder2: rider.transponder24,
              Transponder3: '',
              Transponder4: '',
              Tlabel: 'T1',
              Tlabel2: 'T2',
              Tlabel3: 'T3',
              Tlabel4: 'T4',
              Reference: '',
              Team_No: '',
              Team2_No: '',
              Team3_No: '',
              Team4_No: '',
              Sponsor: rider.club.name.toUpperCase(),
              Comment: '',
              Medical_Suspension: '',
              Disciplinary_Suspension: '',
              Other_Suspension: '',
              POA_Suspension: '',
              Suspension_End_Date: '',
              AdvancedRider: '',
            };
            this.ridersListToExcel.push(row);
          });
          console.log(this.ridersListToExcel);

          const workbook: XLSX.WorkBook = XLSX.utils.book_new();
          const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(
            this.ridersListToExcel
          );
          XLSX.utils.sheet_add_aoa(
            worksheet,
            [['International Licence Code']],
            {
              origin: 'E1',
            }
          );
          XLSX.utils.sheet_add_aoa(worksheet, [['Emergency Contact Person']], {
            origin: 'N1',
          });
          XLSX.utils.sheet_add_aoa(worksheet, [['Emergency Contact Number']], {
            origin: 'O1',
          });
          XLSX.utils.sheet_add_aoa(worksheet, [['Medical Suspension']], {
            origin: 'AU1',
          });
          XLSX.utils.sheet_add_aoa(worksheet, [['Disciplinary Suspension']], {
            origin: 'AV1',
          });
          XLSX.utils.sheet_add_aoa(worksheet, [['Other Suspension']], {
            origin: 'AW1',
          });
          XLSX.utils.sheet_add_aoa(worksheet, [['POA Suspension']], {
            origin: 'AX1',
          });
          XLSX.utils.sheet_add_aoa(worksheet, [['Suspension End Date']], {
            origin: 'AY1',
          });
          XLSX.utils.book_append_sheet(workbook, worksheet, 'BEM5_EXT');
          XLSX.writeFile(workbook, this.ridersListFilename);
        });
      });
  }

  getEntriesFile() {
    console.log('Entries button clicked');
    this.entriesListFilename =
      formatDate(this.event.date, 'yyyy/MM/dd', 'en-EN') + '_entries_list.xlsx';
  }


  editEvent() {
    console.log('Edit event button clicked');
  }

  onXLSFileDrop(file: File) {
    if (file.name.toLowerCase().endsWith('.xls') || file.name.toLowerCase().endsWith('.xlsx')) {
      this.btnXLS1 = file.name
      this.btnXLS2 = ''
      this.fileXLS = file;
    }
  }

  onXLSSelect(event: Event) {
    const files = (event.target as HTMLInputElement).files as FileList;
    if (files === null || files === undefined) return
    this.onXLSFileDrop(files[0])
  }

  onPDFFileDrop(file: File) {
    if (file.name.toLowerCase().endsWith('.pdf')) {
      this.btnPDF1 = file.name
      this.btnPDF2 = ''
      this.filePDF = file;
    }
  }

  onPDFSelect(event: Event) {
    const files = (event.target as HTMLInputElement).files as FileList;
    if (files === null || files === undefined) return
    this.onPDFFileDrop(files[0])
    console.log(files)
  }

  onFASTFileDrop(file: File) {
    if (file.name.toLowerCase().endsWith('.pdf')) {
      this.btnFast1 = file.name
      this.btnFast2 = ''
      this.fileFast = file;
    }
  }

  onFASTSelect(event: Event) {
    const files = (event.target as HTMLInputElement).files as FileList;
    if (files === null || files === undefined) return
    this.onFASTFileDrop(files[0])
  }

  onBEMFileDrop(file: File) {
    if (file.name.toLowerCase().endsWith('.bem')) {
      this.btnBEM1 = file.name
      this.btnBEM2 = ''
      this.fileBEM = file;
    }
  }

  onBEMSelect(event: Event) {
    const files = (event.target as HTMLInputElement).files as FileList;
    if (files === null || files === undefined) return
    this.onBEMFileDrop(files[0])
  }

  processResults() {
    console.log('Process results button clicked');

    if (this.btnXLS1 != 'Click to upload') {
      console.log("Budu ukl??dat XLS soubor");

      const oldFileName = this.event.resultXLS

      const formData = new FormData();
      formData.append('file', this.fileXLS)
      this.eventsService.postFileXLS(formData).subscribe()

      // TODO: Ulo??it n??zev nov??ho souboru do datab??ze

      // TODO: Smazat star?? soubor
    }

    if (this.btnPDF1 != 'Click to upload') {
      console.log("Budu ukl??dat PDF soubor");
      const oldFileName = this.event.resultsPDF || "";
      let newFileNamePDF = "";

      const formData = new FormData();
      formData.append('file', this.filePDF)
      //nahraj soubor na server
      this.eventsService.postFilePDF(formData).subscribe((response: any) => {
        newFileNamePDF = response.data.filename;
        // Ulo?? n??zev nov??ho souboru do datab??ze
        const body = { "resultsPDF": newFileNamePDF }
        this.eventsService.patchEvent(this.event._id, body).subscribe((response: any) => {
          // vyma?? star?? soubor
          const removeFile = { "filename": "uploads/results/pdf/" + oldFileName }
          this.eventsService.postDeleteFile(removeFile).subscribe((response: any) => {
            console.log(response.data)
            // Aktualizuj obsah resultsPDF
            this.event.resultsPDF = newFileNamePDF
          })
        })
      })
    }

    if (this.btnFast1 != 'Click to upload') {
      console.log("Budu ukl??dat FAST soubor");

      const oldFileName = this.event.resultsFast || ""
      let newFilenameFast = "";

      const formData = new FormData();
      formData.append('file', this.fileFast)
      // Nahraj soubor na server
      this.eventsService.postFileFast(formData).subscribe((response: any) => {
        newFilenameFast = response.data.filename;
        //Ulo?? n??zev nov??ho souboru do datab??ze
        const body = { "resultsFast": newFilenameFast }
        this.eventsService.patchEvent(this.event._id, body).subscribe((response: any) => {
          // vyma?? star?? soubor
          const removeFile = { "filename": "uploads/results/fast/" + oldFileName }
          this.eventsService.postDeleteFile(removeFile).subscribe((response: any) => {
            console.log(response.data)
            // Aktualizuj obsah resultsFast
            this.event.resultsFast = newFilenameFast
          })
        })
      })
    }

    if (this.btnBEM1 != 'Click to upload') {
      console.log("Budu ukl??dat BEM soubor");
      console.log(this.btnBEM1)

      const oldFileName = this.event.backupBEM
      let newFilenameBem = "";

      const formData = new FormData();
      formData.append('file', this.fileBEM)
      this.eventsService.postFileBEM(formData).subscribe()

      // Nahraj soubor na server
      this.eventsService.postFileBEM(formData).subscribe((response: any) => {
        newFilenameBem = response.data.filename;
        //Ulo?? n??zev nov??ho souboru do datab??ze
        const body = { "backupBEM": newFilenameBem }
        this.eventsService.patchEvent(this.event._id, body).subscribe((response: any) => {
          // vyma?? star?? soubor
          const removeFile = { "filename": "uploads/bem/" + oldFileName }
          this.eventsService.postDeleteFile(removeFile).subscribe((response: any) => {
            console.log(response.data)
            // Aktualizuj obsah backupBEM
            this.event.backupBEM = newFilenameBem
          })
        })
      })
    }
  }
}


