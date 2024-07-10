import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import path from '../core/api/api';
import { Observable } from 'rxjs';
import { Card } from '../core/models/card.interface';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private readonly path: string;

  constructor(private http: HttpClient) {
    this.path = path;
  }

  getCards(): string {
    return 'cards';
  }

  getCard(registrationNumber: number): string {
    return `cards/${registrationNumber}`;
  }

  createCard(card: Card): string {
    return `create card: ${card}`;
  }

  updateCard(card: Card): string {
    return `update card: ${card}`;
  }

  /*
  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.path}/cards`);
  }

  getCard(registrationNumber: number): Observable<Card> {
    return this.http.get<Card>(`${this.path}/cards/${registrationNumber}`);
  }

  createCard(card: Card): Observable<Card> {
    return this.http.post<Card>(`${this.path}/cards`, card);
  }

  updateCard(card: Card): Observable<Card> {
    return this.http.put<Card>(`${this.path}/cards/${card.registrationNumber}`, card);
  }

   */
}
