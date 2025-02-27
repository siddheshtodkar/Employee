import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Client } from '../../models/classes/client';
import { ClientService } from '../../services/client.service';
import { AsyncPipe, UpperCasePipe } from '@angular/common';
import * as clientActions from '../../store/client/client.actions'
import { Store } from '@ngrx/store';
import { getClientsSelector } from '../../store/client/client.selectors';

@Component({
  selector: 'app-client',
  imports: [FormsModule, UpperCasePipe, AsyncPipe],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  service = inject(ClientService)
  store = inject(Store)
  clientObj: Client = new Client()
  clientList$
  constructor() {
    this.clientList$ = this.store.select(getClientsSelector)
  }
  getAllClients() {
    this.store.dispatch(clientActions.getClients())
  }
  addUpdateClient() {
    // this.service.addUpdateClient(this.clientObj).subscribe((res: IResponse) => {
    //   this.alert(res.message, 'success')
    //   if (res.result) {
    //     this.reset()
    //     this.getAllClients()
    //   }
    // })
    this.store.dispatch(clientActions.addUpdateClient({ client: this.clientObj }))
  }
  deleteClientByClientId(id: number) {
    // this.service.deleteClientByClientId(id).subscribe((res: IResponse) => {
    //   this.alert(res.message, 'danger')
    //   if (res.result) {
    //     this.getAllClients()
    //   }
    // })
    this.store.dispatch(clientActions.deleteClient({ id: id }))
  }
  // alert(message: string, alertType: string) {
  //   this.message = message
  //   this.alertType = alertType
  // }
  reset() {
    this.clientObj = new Client()
  }
  ngOnInit(): void {
    this.getAllClients()
  }
}
