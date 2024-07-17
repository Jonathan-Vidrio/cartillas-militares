import { Component, OnDestroy } from '@angular/core';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CardsService } from '../../../../services/cards.service';
import { Card } from '../../../core/models/card.interface';
import { Subject, takeUntil } from 'rxjs';
import { Response } from '../../../core/models/response.interface';

@Component({
  selector: 'app-all-cards',
  standalone: true,
  imports: [NgForOf, RouterLink, FormsModule, NgxPaginationModule],
  templateUrl: './all-cards.component.html',
})
export class AllCardsComponent implements OnDestroy {
  private unsubscribe$ = new Subject<void>();

  protected selectedFilter: string;
  protected searchValue: string;
  protected currentPage: number;
  protected cards: Card[];

  constructor(private service: CardsService) {
    this.selectedFilter = 'matricula';
    this.searchValue = '';
    this.currentPage = 1;
    this.cards = [];

    this.loadCards();
  }

  protected searchCard() {
    console.log('searchCard');
  }

  private loadCards(): void {
    this.service
      .getCards()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (response: Response): void => {
          this.cards = response.body;
        },
        error: (error: any) => console.error(error),
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
