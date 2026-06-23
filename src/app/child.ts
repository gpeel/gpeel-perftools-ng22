import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { RefreshCountComponent } from '@gpeel/perftools';

@Component({
  selector: 'app-child',
  imports: [RefreshCountComponent],
  template: `
    <refresh-count name="CHILD"></refresh-count>
    <div>Child Component works!</div>
    <button (click)="onClick()">ok</button>
  `,
})
export class ChildComponent {
  cd = inject(ChangeDetectorRef);

  onClick() {
    this.cd.markForCheck();
    console.log('clicked !! ');
  }
}
