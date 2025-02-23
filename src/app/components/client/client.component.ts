import { Component, inject } from '@angular/core';
import { IResponse } from '../../models/interfaces/master';
import { FormsModule } from '@angular/forms';
import { Client } from '../../models/classes/client';
import { ClientService } from '../../services/client.service';
import { UpperCasePipe } from '@angular/common';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-client',
  imports: [FormsModule, UpperCasePipe, AlertComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  service = inject(ClientService)
  clientObj: Client = new Client()
  clientList: Client[] = []
  message: string = ''
  alertType: string = ''
  constructor() { }
  getAllClients() {
    this.service.getAllClients().subscribe((res: IResponse) => {
      this.clientList = res.data as Client[]
    })
  }
  addUpdateClient() {
    this.service.addUpdateClient(this.clientObj).subscribe((res: IResponse) => {
      this.alert(res.message, 'success')
      if (res.result) {
        this.reset()
        this.getAllClients()
      }
    })
  }
  deleteClientByClientId(id: number) {
    this.service.deleteClientByClientId(id).subscribe((res: IResponse) => {
      this.alert(res.message, 'danger')
      if (res.result) {
        this.getAllClients()
      }
    })
  }
  alert(message: string, alertType: string) {
    this.message = message
    this.alertType = alertType
  }
  reset() {
    this.clientObj = new Client()
  }
  ngOnInit(): void {
    this.getAllClients()
  }
}
