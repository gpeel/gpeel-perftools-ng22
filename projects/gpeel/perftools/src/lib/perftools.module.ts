import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RefreshCountComponent} from './refresh-count.component';
import {RootRefreshCountComponent} from './root-refresh-count.component';

/**
 * RefreshCountComponent, RootRefreshCountComponent are standalone component.
 * So you can import them directly, or both together by importing PerftoolsModule
 */
@NgModule({
  imports: [
    CommonModule,RefreshCountComponent, RootRefreshCountComponent
  ],
  exports: [RefreshCountComponent, RootRefreshCountComponent]
})
export class PerftoolsModule {
}
