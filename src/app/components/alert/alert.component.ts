import { AsyncPipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { alertSelector } from '../../store/app/app.selectors';
import * as appActions from '../../store/app/app.actions'
import { IAlert } from '../../models/interfaces/app';

@Component({
  selector: 'app-alert',
  imports: [NgClass, AsyncPipe],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  store = inject(Store)
  alert$
  constructor() {
    this.alert$ = this.store.select(alertSelector)
  }
  closeAlert() {
    let emptyAlert: IAlert = {
      message: '',
      alertYpe: ''
    }
    this.store.dispatch(appActions.showAlert({ alert: emptyAlert }))
  }
}