import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-connection',
  standalone: true,
  templateUrl: './connection.component.html',
  styleUrl: './connection.component.css',
  imports: [MatCardModule],
})
export class ConnectionComponent {}
