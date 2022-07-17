import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RidersService } from 'src/app/services/riders.service';

@Component({
  selector: 'app-rider-new1',
  templateUrl: './rider-new1.component.html',
  styleUrls: ['./rider-new1.component.css'],
})
export class RiderNew1Component implements OnInit {
  @Output()
  next = new EventEmitter();

  numbers: number[] = Array(11);

  uciid: number = 0;

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
    if (current.value.length > 1) {
      if (next) {
        next.value = current.value[1];
        next.focus();
      }
      current.value = current.value[0];
    }
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
    let paste = e.clipboardData.getData('text');

    if (!this.isValidUCIID(paste)) return;

    this.numbers = paste.split('').map((i: string) => +i);
    e.target.blur();
  }

  onButtonClicked() {
    // složit UCI ID
    this.uciid = parseInt(this.numbers.join(''));
    if (!this.isValidUCIID(this.uciid + '')) return;

    // zjistit, zda již není startovní číslo tomuto UCI ID přiděleno
    this.ridersService.getRiderByUciid(this.uciid).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.rider = response.data;
          this.message = true;
          this.messageText = `UCI ID: ${this.rider.uciid} je přiděleno jezdci ${this.rider.firstName} ${this.rider.lastName} a ten již má přiděleno startovní číslo ${this.rider.plate}.`;
          this.hideAlert();
          return;
        }
      },
      error: (e) => {
        this.ridersService.getSwagger(this.uciid).subscribe((response: any) => {
          this.rider = response;

          if (this.rider.length === 0) {
            this.message = true;
            this.messageText = 'Toto UCI ID neexistuje.';
            this.hideAlert();
            return;
          }
          if (this.rider[0].Nationality !== 'CZE') {
            this.message = true;
            this.messageText =
              'Držitel tohoto UCI ID nemá českou národnost. Pokud jste cizinec a chcete mít české startovní číslo, kontaktujte Komisi BMX Českého svazu cyklisitky.';
            this.hideAlert();
            return;
          }

          // bindnout data na další stránku
          this.next.emit(this.rider[0]);
        });
      },
    });

    // zjistit, zda nejde o cizince
  }

  private isValidUCIID(uciid: string): boolean {
    return (
      uciid
        .trim()
        .split('')
        .map((i) => +i)
        .every((i) => !isNaN(i) && i !== undefined) && uciid.length === 11
    );
  }

  private hideAlert() {
    setTimeout(() => (this.message = false), 5000);
  }
}
