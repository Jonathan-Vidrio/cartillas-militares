import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() title: string = '';
  @Output() onSubmit: EventEmitter<void>;

  @ViewChild('customModal') customModal!: ElementRef;

  protected isVisible: boolean;

  constructor() {
    this.onSubmit = new EventEmitter<void>();
    this.isVisible = false;
  }

  submit(event: Event): void {
    event.preventDefault();
    this.onSubmit.emit();

    this.hide();
  }

  show(): void {
    const modalElement = this.customModal.nativeElement;
    modalElement.classList.add('show');
    modalElement.style.display = 'block';
    document.body.classList.add('modal-open');
    this.isVisible = true;
  }

  hide(): void {
    const modalElement = this.customModal.nativeElement;
    modalElement.classList.remove('show');
    modalElement.style.display = 'none';
    document.body.classList.remove('modal-open');
    this.isVisible = false;
  }
}
