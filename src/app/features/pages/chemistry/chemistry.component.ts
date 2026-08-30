import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-chemistry',
  standalone: true,
  template: `
    <section class="page-shell">
      <div class="page-header">
        <h1>Chemischer Teil (Dokumentation)</h1>
      </div>

      <mat-card>
        <mat-card-header>
          <mat-card-title>Dokumentation</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>
            Hier kannst du die chemische Fragestellung, die Versuchsreihe, Beobachtungen,
            Ergebnisse und die fachlichen Zusammenhänge eintragen.
          </p>
          <div class="placeholder-box">
            <strong>Texteintrag:</strong>
            <p>Füge hier deinen Text zur Chemie-Dokumentation ein.</p>
          </div>
        </mat-card-content>
      </mat-card>

      <div class="card-pair">
        <mat-card class="image-card">
          <mat-card-header>
            <mat-card-title>Abbildung 1</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="image-frame small-image">
              <img src="/example-landscape.svg" alt="Zusätzliche Abbildung 1" />
            </div>
            <p class="caption">Erste Bildplatzierung.</p>
          </mat-card-content>
        </mat-card>

        <mat-card class="image-card">
          <mat-card-header>
            <mat-card-title>Abbildung 2</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="image-frame small-image">
              <img src="/example-landscape.svg" alt="Zusätzliche Abbildung 2" />
            </div>
            <p class="caption">Zweite Bildplatzierung.</p>
          </mat-card-content>
        </mat-card>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .page-shell {
        display: grid;
        gap: 1.5rem;
      }

      .page-header {
        margin-bottom: 0.5rem;
      }

      .eyebrow {
        margin: 0 0 0.5rem;
        font-size: 0.74rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #1d4ed8;
        font-weight: 700;
      }

      h1 {
        margin: 0;
        font-size: clamp(1.8rem, 2.5vw, 2.5rem);
        color: #0f172a;
      }

      mat-card {
        border-radius: 18px;
        box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
      }

      mat-card-content {
        line-height: 1.7;
        color: #475569;
      }

      .placeholder-box {
        margin-top: 1rem;
        padding: 1rem;
        background: #f8fafc;
        border: 1px solid rgba(148, 163, 184, 0.25);
        border-radius: 12px;
      }

      .image-card {
        padding-bottom: 0.5rem;
      }

      .image-frame {
        position: relative;
        overflow: visible;
        background: transparent;
        border: none;
        aspect-ratio: 16 / 9;
      }

      .image-frame img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
        border-radius: 18px;
        background: #f8fafc;
        border: 1px solid rgba(148, 163, 184, 0.32);
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.5);
      }

      .card-pair {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem;
      }

      .small-image img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      @media (max-width: 768px) {
        .card-pair {
          grid-template-columns: 1fr;
        }
      }

      .caption {
        margin-top: 0.75rem;
        font-size: 0.92rem;
        color: #475569;
      }
    `,
  ],
  imports: [MatCardModule],
})
export class ChemistryComponent {}
