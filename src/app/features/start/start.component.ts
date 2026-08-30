import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-start',
  standalone: true,
  template: `
    <section class="page-shell hero-card">
      <h1>Startseite</h1>
      <p class="lead">
        Herzlich willkommen zur interaktiven Darstellung unseres Studienprojekts.
        Die Navigation auf der linken Seite führt dich durch die einzelnen Teilbereiche.
      </p>

      <div class="overview-grid">
        <mat-card>
          <mat-card-header>
            <mat-card-title>Gemeinsame Fragestellung</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>Hier wird die gemeinsame Forschungsfrage und der thematische Fokus dargestellt.</p>
          </mat-card-content>
        </mat-card>

        <mat-card>
          <mat-card-header>
            <mat-card-title>Chemischer Teil</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>Dokumentation, Analyse und fachliche Grundlagen zum chemischen Aspekt.</p>
          </mat-card-content>
        </mat-card>

        <mat-card>
          <mat-card-header>
            <mat-card-title>Historischer Teil</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>Quellenarbeit und historische Einordnung der Thematik.</p>
          </mat-card-content>
        </mat-card>

        <mat-card>
          <mat-card-header>
            <mat-card-title>Verknüpfung</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>Zusammenführung der beiden Fachbereiche und zentrale Erkenntnisse.</p>
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
        padding: 2rem;
        background: linear-gradient(135deg, #ffffff, #f8fafc);
        border-radius: 20px;
        box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
      }

      .hero-card {
        border: 1px solid rgba(148, 163, 184, 0.2);
      }

      .eyebrow {
        margin: 0 0 0.5rem;
        font-size: 0.76rem;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        color: #1d4ed8;
        font-weight: 700;
      }

      h1 {
        margin: 0 0 0.75rem;
        font-size: clamp(2rem, 3vw, 2.7rem);
        color: #0f172a;
      }

      .lead {
        margin: 0 0 2rem;
        max-width: 60ch;
        color: #475569;
        line-height: 1.7;
      }

      .overview-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1rem;
      }

      mat-card {
        border-radius: 16px;
        box-shadow: 0 8px 18px rgba(15, 23, 42, 0.05);
      }

      mat-card-title {
        font-size: 1.05rem;
      }

      mat-card-content p {
        margin: 0;
        line-height: 1.6;
        color: #475569;
      }
    `,
  ],
  imports: [MatCardModule],
})
export class StartComponent {}
