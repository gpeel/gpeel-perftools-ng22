import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Plog } from '@gpeel/plog';

/* eslint-disable @angular-eslint/prefer-on-push-component-change-detection */
/**
 * Starting with Angular 22, since the OnPush mode is the default,
 * this component MUST be EAGER to be refreshed with the "using" component in the same refresh lifecycle.
 * Oherwise since no @Input here, no refresh of this RootRefreshCountComponent will be done
 */
@Component({
  selector: 'refresh-count',
  template: `{{ onRefreshCounter() }}`,
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class RefreshCountComponent {
  /**
   * the name of the refresh counter
   */
  @Input() name = '';
  counter = 1;

  onRefreshCounter() {
    Plog.perfComponent(`${this.name} ${this.counter++}`);
  }
}
