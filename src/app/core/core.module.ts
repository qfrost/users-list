import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/index';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    MatToolbarModule,
    MatButtonModule,
    RouterModule
  ]
})
export class CoreModule { }
