import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { CrimesEffect } from './state/crimes/crimes.effect';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { crimesReducer } from './state/crimes/crimes.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(),importProvidersFrom(
    HttpClientModule,
    StoreModule.forRoot({crimes:crimesReducer }),
    EffectsModule.forRoot([CrimesEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  )]
};
