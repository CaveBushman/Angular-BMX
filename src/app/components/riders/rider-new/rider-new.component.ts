import { Component, ElementRef, OnInit } from '@angular/core';
import { RidersService } from 'src/app/services/riders.service';

@Component({
  selector: 'app-rider-new',
  templateUrl: './rider-new.component.html',
  styleUrls: ['./rider-new.component.css'],
})
export class RiderNewComponent implements OnInit {
  numbers: number[] = Array(11);

  uciid: number = 10091812605;

  message: boolean = false;
  messageText: string = '';

  rider: any = [];

  constructor(private ridersService: RidersService) {}

  ngOnInit(): void {}

  nextNum(
    e: KeyboardEvent,
    prev: HTMLInputElement | null,
    current: HTMLInputElement,
    next: HTMLInputElement | null
  ) {
    if (current.value.length > 1) current.value = current.value.substring(0, 1);
    if (e.key === 'Backspace') {
      if (prev) {
        prev.value = '';
        prev.focus();
      }
      return;
    }

    if (!isNaN(parseInt(current.value))) {
      if (next) return next.focus();
    } else current.value = '';
  }

  onPaste(e: any, last: HTMLInputElement) {
    let paste = e.clipboardData
      .getData('text')
      .trim()
      .split('')
      .map((i: string) => parseInt(i))
      .filter((i: number) => !isNaN(i));
    if (paste.length === 11) {
      this.numbers = paste;
      last.focus();
    }
  }

  onButtonClicked() {
    console.log('Button clicked');

    // složit UCI ID

    // zjistit, zda již není startovní číslo tomuto UCI ID přiděleno

    this.ridersService
      .getRiderByUciid(this.uciid)
      .subscribe((response: any) => {
        if (response.success) {
          this.rider = response.data;
          this.message = true;
          this.messageText = `UCI ID: ${ this.rider.uciid } je přiděleno jezdci ${ this.rider.firstName } ${ this.rider.lastName } a ten již má přiděleno startovní číslo ${ this.rider.plate }.`;
        }
      });
    if (this.rider) {
    }
    // zjistit, zda nejde o cizince

    this.ridersService.getSwagger(this.uciid).subscribe((response: any) => {
      this.rider = response;
      console.log(this.rider[0]);
    });

    console.log(this.rider[0].Nationality);

    if (this.rider.Nationality == !'CZE') {
      this.message = true;
      this.messageText =
        'Držitel tohoto UCI ID nemá českou národnost. Pokud jste cizinec a chcete mít české startovní číslo, kontaktujte Komisi BMX Českého svazu cyklisitky.';
    }

    // bindnout data na další stránku
  }
}
