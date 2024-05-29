import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getVehicles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/vehicles`);
  }

  createVehicle(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/vehicles`, data);
  }

  updateVehicle(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/vehicles/${id}`, data);
  }
}
