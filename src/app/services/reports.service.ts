import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import path from '../core/api/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportsService {
  private readonly path: string;

  constructor(private http: HttpClient) {
    this.path = path;
  }

  getReport(report: string): string {
    return `report/${report}`;
  }

  /*
  getReport(report: any): Observable<any> {
    return this.http.get<any>(`${this.path}/reports`);
  }

   */
}
