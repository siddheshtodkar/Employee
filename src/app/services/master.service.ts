import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../models/interfaces/role';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  baseUrl: string = environment.API_URL
  constructor(private http: HttpClient) { }

  // GET methods
  getAllRoles(): Observable<IResponse> {
    return this.http.get<IResponse>(`${this.baseUrl}/GetAllRoles`)
  }
  getAllDesignation(): Observable<IResponse> {
    return this.http.get<IResponse>(`${this.baseUrl}/GetAllDesignation`)
  }
  getDasboardData(): Observable<IResponse> {
    return this.http.get<IResponse>(`${this.baseUrl}/GetDasboardData`)
  }

  // DELETE methods
  deleteRoleById(id: number): Observable<IResponse> {
    return this.http.delete<IResponse>(`${this.baseUrl}/DeleteRoleById?roleid=${id}`)
  }
  deleteDesignationById(id: number): Observable<IResponse> {
    return this.http.delete<IResponse>(`${this.baseUrl}/DeleteDesignationById?designationId=${id}`)
  }
}
