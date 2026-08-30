import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-history',
  standalone: true,
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
  imports: [CommonModule, MatCardModule],
})
export class HistoryComponent {
  imageCards = [
    {
      title: 'Abbildung 1',
      src: '/example-landscape.svg',
      alt: 'Historische Abbildung 1',
      caption: 'Erste historische Bildplatzierung.',
    },
    {
      title: 'Abbildung 2',
      src: '/example-landscape.svg',
      alt: 'Historische Abbildung 2',
      caption: 'Zweite historische Bildplatzierung.',
    },
  ];
}
