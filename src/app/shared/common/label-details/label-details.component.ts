import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label-details',
  standalone: true,
  imports: [],
  templateUrl: './label-details.component.html',
})
export class LabelDetailsComponent {
  @Input() label: string;

  constructor() {
    this.label = '';
  }
}
