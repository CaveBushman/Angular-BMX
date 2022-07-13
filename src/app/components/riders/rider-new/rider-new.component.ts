import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-rider-new',
  templateUrl: './rider-new.component.html',
  styleUrls: ['./rider-new.component.css']
})
export class RiderNewComponent implements OnInit {

  numbers: number[] = Array(11)

  constructor() {}

  ngOnInit(): void {
  }

  nextNum(e: KeyboardEvent, prev: HTMLInputElement | null, current: HTMLInputElement, next: HTMLInputElement | null) {
    if(current.value.length > 1) current.value = current.value.substring(0,1)
    if(e.key === 'Backspace') {
      if(prev) {
        prev.value = ''
        prev.focus()
      }
      return
    }
    
    if(!isNaN(parseInt(current.value))) {
      if(next) return next.focus()
    } 
    else current.value = ''
  }

  onPaste(e: any, last: HTMLInputElement) {
    let paste = (e.clipboardData)
          .getData('text')
          .trim()
          .split('')
          .map((i: string) => parseInt(i))
          .filter((i: number) => !isNaN(i))
    if(paste.length === 11) {
      this.numbers = paste
      last.focus()
    }
   
  }

}
