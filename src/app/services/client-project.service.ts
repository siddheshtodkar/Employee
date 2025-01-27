import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClientProject, IResponse } from '../models/interfaces/role';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientProjectService {
  baseUrl: string = environment.API_URL
  constructor(private http: HttpClient) { }

  // GET methods
  getAllClientProjects(): Observable<IResponse> {
    return this.http.get<IResponse>(`${this.baseUrl}/GetAllClientProjects`)
  }

  // POST methods
  addUpdateClientProject(body: IClientProject): Observable<IResponse> {
    return this.http.post<IResponse>(`${this.baseUrl}/AddUpdateClientProject`, body)
  }
}
