import { Component, OnDestroy, OnInit } from '@angular/core';
import { LabelDetailsComponent } from '../../../shared/common/label-details/label-details.component';
import { Card } from '../../../core/models/card.interface';
import { CardsService } from '../../../../services/cards.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Response } from '../../../core/models/response.interface';
import { formatBoolean } from '../../../../helpers/format-boolean';
import { formatDate } from '../../../../helpers/format-date-time';

@Component({
  selector: 'app-details-card',
  standalone: true,
  imports: [LabelDetailsComponent, RouterLink],
  templateUrl: './details-card.component.html',
})
export class DetailsCardComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void>;
  protected card: Card | undefined;

  constructor(
    private service: CardsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.unsubscribe$ = new Subject<void>();
  }

  ngOnInit(): void {
    this.loadCard();
  }

  private getCardId(): string | null {
    return this.route.snapshot.paramMap.get('id');
  }

  private loadCard(): void {
    this.service
      .getCard(Number(this.getCardId() || '0'))
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (response: Response): void => {
          this.card = response.body[0];
        },
        error: (error: any) => console.error(error),
      });
  }

  protected onClickEdit(): void {
    this.router.navigate(['/cartillas/modificar', this.getCardId()]).then(() => {});
  }

  protected onClickDelete(): void {
    this.service
      .deleteCard(Number(this.getCardId() || '0'))
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: () => {
          this.router.navigate(['/cartillas']).then(() => {});
        },
        error: (error: any) => console.error(error),
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  protected readonly formatBoolean = formatBoolean;
  protected readonly formatDate = formatDate;
}
