import { Component, signal } from '@angular/core';
import { RootRefreshCount } from '@gpeel/perftools';
import { ChildComponent } from './child';

@Component({
  selector: 'app-root',
  template: `
    <root-refresh-count></root-refresh-count>
    <div>Home for {{ title() }}</div>
    <div>App Component works!</div>
    <app-child></app-child>
  `,
  imports: [RootRefreshCount, ChildComponent],
})
export class App {
  protected readonly title = signal('gpeel-perftools-ng22');
}
