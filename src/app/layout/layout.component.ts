import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet, Routes } from '@angular/router';
import { Observable, shareReplay } from 'rxjs';
import { map } from 'rxjs/operators';
import { routes } from '../app.routes';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    AsyncPipe,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);
  readonly router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private route = inject(ActivatedRoute);

  routes: Routes = routes[0]?.children?.filter((route) => route.path && route.path !== '' && route.path !== '**') ?? [];
  actualRoute?: { title: string };
  isStartRoute = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  );

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      const currentPath = this.router.url.replace(/^\//, '') || '';
      this.isStartRoute = currentPath === '';

      const activeRoute = this.routes.find((route) => route.path === this.route.snapshot.firstChild?.routeConfig?.path);
      const data = activeRoute?.data as { title?: string } | undefined;
      this.actualRoute = data ? { title: data.title ?? 'Start' } : { title: 'Start' };
      this.cdr.detectChanges();
    });
  }
}
