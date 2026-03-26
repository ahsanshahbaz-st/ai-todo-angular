import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main class="app-shell">
      <header class="app-header">
        <h1>AI Todo Angular Demo</h1>
        <p>Issue-driven implementation with PR-based delivery.</p>
      </header>
      <section class="app-content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
