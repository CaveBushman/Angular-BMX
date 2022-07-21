import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDragDrop]',
})
export class DragDropDirective {
  
  @Output() fileDrop = new EventEmitter()

  @HostListener('dragover', ['$event']) onDragOver(e: Event) {
    e.preventDefault();
    e.stopPropagation();
  }

  @HostListener('dragleave', ['$event']) onDragLeave(e: Event) {
    e.preventDefault();
    e.stopPropagation();
  }

  @HostListener('drop', ['$event']) onDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    
    if (files.length >= 1) {
      this.fileDrop.emit(files[0]);
    }
  }
}
