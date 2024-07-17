import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import path from '../app/core/api/api';
import { Observable } from 'rxjs';
import { Response } from '../app/core/models/response.interface';
import { Card } from '../app/core/models/card.interface';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private readonly path: string;

  constructor(private http: HttpClient) {
    this.path = path;
  }

  getCards(): Observable<Response> {
    return this.http.get<Response>(`${this.path}/cartilla/lista`);
  }

  getCard(id: number): Observable<Response> {
    return this.http.get<Response>(`${this.path}/cartilla/obtener/${id}`);
  }

  createCard(card: Card): Observable<Response> {
    return this.http.post<Response>(`${this.path}/cartilla/agregar`, card);
  }

  updateCard(card: Card): Observable<Response> {
    return this.http.put<Response>(`${this.path}/cartilla/modificar/${card.id}`, card);
  }

  deleteCard(id: number): Observable<Response> {
    return this.http.delete<Response>(`${this.path}/cartilla/eliminar/${id}`);
  }
}
