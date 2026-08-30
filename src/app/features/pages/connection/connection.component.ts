import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-connection',
  standalone: true,
  template: `
    <section class="page-shell">
      <div class="page-header">
        <h1>Verknüpfung der beiden Fachbereiche</h1>
      </div>

      <mat-card>
        <mat-card-header>
          <mat-card-title>Zusammenführung</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>
            Erläutere hier, wie die beiden Fachbereiche zusammenhängen und welche Erkenntnisse aus der
            Verbindung der Perspektiven hervorgehen.
          </p>
          <div class="placeholder-box">
            <strong>Texteintrag:</strong>
            <p>Füge hier deinen Vergleich, die Synthese und die Schlussfolgerungen ein.</p>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="image-card">
        <mat-card-header>
          <mat-card-title>Abbildung</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="image-placeholder">
            <span>Bild hier einfügen</span>
          </div>
          <p class="caption">Abbildung: Diagramm oder Infografik zur Verknüpfung.</p>
        </mat-card-content>
      </mat-card>
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
        margin-bottom: 0.25rem;
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

      .image-placeholder {
        display: grid;
        place-items: center;
        min-height: 220px;
        border: 2px dashed #cbd5e1;
        border-radius: 16px;
        background: linear-gradient(135deg, #f8fafc, #eef2ff);
        color: #475569;
        font-weight: 500;
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
export class ConnectionComponent {}
