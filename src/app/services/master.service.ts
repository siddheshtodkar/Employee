import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  baseUrl: string = 'https://freeapi.miniprojectideas.com/api/ClientStrive'
  constructor(private http: HttpClient) { }
  getAllRoles() {
    return this.http.get(`${this.baseUrl}/GetAllRoles`)
  }
}
