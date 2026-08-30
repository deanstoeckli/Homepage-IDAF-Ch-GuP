import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-problem',
  standalone: true,
  templateUrl: './problem.component.html',
  styleUrl: './problem.component.css',
  imports: [MatCardModule],
})
export class ProblemComponent {}
