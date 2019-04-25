import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/index';
import { HeaderComponent } from './header/header.component';
import { AppEffects } from './store/app.effects';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      name: 'User List Store App',
    }),
    MatToolbarModule,
    MatButtonModule,
    RouterModule
  ]
})
export class CoreModule { }
