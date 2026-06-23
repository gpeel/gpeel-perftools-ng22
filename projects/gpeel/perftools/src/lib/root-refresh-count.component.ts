import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { Plog } from '@gpeel/plog';

/**
 * the root counter counts the CD check to have the number of global refresh cycles.
 * Starting with Angular 22, since the OnPush mode is the default,
 * this component MUST be EAGER to be refreshed with the "using" component in the same refresh lifecycle.
 * Oherwise since no @Input here, no refresh of this RootRefreshCountComponent will be done
 */
/* eslint-disable @angular-eslint/prefer-on-push-component-change-detection */
@Component({
  selector: 'root-refresh-count',
  template: `{{ onRefreshDomCounter() }}`,
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class RootRefreshCountComponent implements DoCheck {
  counter = 1;
  counterDom = 1;

  constructor() {
    Plog.createComponent('RootRefreshCountComponent');
  }

  ngDoCheck(): void {
    // Called at the beginning of every change detection cycle
    Plog.perfCD(`CD ${this.counter++}`);
  }

  onRefreshDomCounter() {
    Plog.perfDom(`dom ${this.counterDom++}`);
  }
}
