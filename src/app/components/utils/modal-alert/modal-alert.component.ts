import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['./modal-alert.component.css'],
})
export class ModalAlertComponent implements OnInit {
  @Input()
  isVisible = false;

  @Input()
  close = true;

  @Output()
  isVisibleChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  closeAlert() {
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);
  }
}
