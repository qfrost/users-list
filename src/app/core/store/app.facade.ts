import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromApp from './index';
import { LoadUsers, SelectUser } from './app.action';
import { AppService } from '../services/app.service';
import { AppModel } from '../models/app.model';
import { take, first } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class AppFacade {
  loadedUsers$ = this.store.select(fromApp.getUsers);
  selectedUser$ = this.store.select(fromApp.getUserById);

  constructor(private store: Store<fromApp.AppState>, private appService: AppService) {}

  public loadAll(): void {
    this.appService.getUsers().subscribe((users: AppModel.IUser[]) => {
        this.store.dispatch(new LoadUsers(users));
    });
  }
}
