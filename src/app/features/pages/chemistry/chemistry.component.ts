import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-chemistry',
  standalone: true,
  templateUrl: './chemistry.component.html',
  styleUrl: './chemistry.component.css',
  imports: [CommonModule, MatCardModule, NgOptimizedImage],
})
export class ChemistryComponent {
  imageCards = [
    {
      title: 'Teilchenmodell der Destillation',
      src: 'assets/chemistry/image1.jpg',
      alt: 'Teilchenmodell zeigt Ethanol und Wasser in der Destillationsapparatur',
      caption:
        'Das Teilchenmodell veranschaulicht, dass Ethanol leichter verdampft als Wasser und deshalb im ersten Destillat in höherer Konzentration vorliegt.',
    },
    {
      title: 'Versuchsaufbau',
      src: 'assets/chemistry/image2.jpg',
      alt: 'Destillationsapparatur mit Rundkolben und Reagenzgläsern',
      caption:
        'Der Aufbau aus Rundkolben, Kühlfalle und aufgefangenen Destillaten zeigt den praktischen Ablauf des Versuchs.',
    },
    {
      title: 'Messung und Prüfung',
      src: 'assets/chemistry/image3.jpg',
      alt: 'Ethanol-Wasser-Gemisch im Rundkolben auf der Waage',
      caption:
        'Die Dichte und der Alkoholgehalt der einzelnen Destillate wurden nach der Destillation bestimmt, um die Reinheit der Fraktionen zu vergleichen.',
    },
  ];

  results = [
    {
      phase: 'Erstes Destillat',
      temperature: 'ca. 71 °C',
      density: 'ca. 0,81 g/mL',
      alcohol: 'ca. 96 %',
    },
    {
      phase: 'Mittlere Fraktion',
      temperature: '78–90 °C',
      density: 'ca. 0,88–0,96 g/mL',
      alcohol: 'mittel bis niedrig',
    },
    {
      phase: 'Letztes Destillat',
      temperature: '99–100 °C',
      density: 'ca. 1,00 g/mL',
      alcohol: '0 %',
    },
  ];
}
