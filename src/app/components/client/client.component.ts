import { Component, inject } from '@angular/core';
import { IResponse } from '../../models/interfaces/role';
import { FormsModule } from '@angular/forms';
import { Client } from '../../models/classes/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  service = inject(ClientService)
  clientObj: Client = new Client()
  clientList: Client[] = []
  constructor() { }
  getAllClients() {
    this.service.getAllClients().subscribe((res: IResponse) => {
      this.clientList = res.data as Client[]
    })
  }
  addUpdateClient() {
    this.service.addUpdateClient(this.clientObj).subscribe((res: IResponse) => {
      alert(res.message)
      if (res.result){
        this.reset()
        this.getAllClients()
      }
    })
  }
  deleteClientByClientId(id: number) {
    this.service.deleteClientByClientId(id).subscribe((res: IResponse) => {

    })
  }
  reset() {
    this.clientObj = new Client()
  }
  ngOnInit(): void {
    this.getAllClients()
  }
}
