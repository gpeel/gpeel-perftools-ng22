import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { providePlog } from '@gpeel/plog';
import { plogConfig } from './plog-config';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), providePlog(plogConfig)],
};
