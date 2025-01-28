import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [NgClass],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @Input() message: string = ''
  @Input() alertType: string = ''
  @Output() closeFunction = new EventEmitter()

  closeAlert() {
    this.closeFunction.emit()
  }
}
