import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-chemistry',
  standalone: true,
  templateUrl: './chemistry.component.html',
  styleUrl: './chemistry.component.css',
  imports: [CommonModule, MatCardModule],
})
export class ChemistryComponent {
  imageCards = [
    {
      title: 'Abbildung 1',
      src: '/example-landscape.svg',
      alt: 'Zusätzliche Abbildung 1',
      caption: 'Erste Bildplatzierung.',
    },
    {
      title: 'Abbildung 2',
      src: '/example-landscape.svg',
      alt: 'Zusätzliche Abbildung 2',
      caption: 'Zweite Bildplatzierung.',
    },
  ];
}
