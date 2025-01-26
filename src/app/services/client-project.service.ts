import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../models/interfaces/role';
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
}
