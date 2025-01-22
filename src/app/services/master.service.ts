import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../models/interfaces/role';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  baseUrl: string = 'https://freeapi.miniprojectideas.com/api/ClientStrive'
  constructor(private http: HttpClient) { }
  getAllRoles():Observable<IResponse> {
    return this.http.get<IResponse>(`${this.baseUrl}/GetAllRoles`)
  }
  getAllDesignation():Observable<IResponse> {
    return this.http.get<IResponse>(`${this.baseUrl}/GetAllDesignation`)
  }
}
