import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../models/interfaces/role';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Client } from '../models/classes/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl: string = environment.API_URL
  constructor(private http: HttpClient) { }

  // GET methods
  getAllClients(): Observable<IResponse> {
    return this.http.get<IResponse>(`${this.baseUrl}/GetAllClients`)
  }

  // POST methods
  addUpdateClient(body: Client): Observable<IResponse> {
    return this.http.post<IResponse>(`${this.baseUrl}/AddUpdateClient`, body)
  }

  // DELETE methods
  deleteClientByClientId(id: number): Observable<IResponse> {
    return this.http.delete<IResponse>(`${this.baseUrl}/DeleteClientByClientId?clientId=${id}`)
  }
}
