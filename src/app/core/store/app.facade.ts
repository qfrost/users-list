import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromApp from './index';
import { loadUsers } from './app.action';
import { AppService } from '../services/app.service';
import { AppModel } from '../models/app.model';


@Injectable({
    providedIn: 'root'
})
export class AppFacade {
  loadedUsers$ = this.store.select(fromApp.getUsers);
  selectedUser$ = this.store.select(fromApp.getUserById);

  constructor(private store: Store<fromApp.AppState>, private appService: AppService) {}

  public loadAll(): void {
    this.store.dispatch(loadUsers());
  }
}
