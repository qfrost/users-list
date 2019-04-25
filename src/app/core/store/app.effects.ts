import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AppActionUnion, loadUsers, loadUsersSuccess, selectUser } from './app.action';
import { AppService } from '../services/app.service';
import { AppModel } from '../models/app.model';


@Injectable()
export class AppEffects {
    constructor(private action$: Actions<AppActionUnion>, private appService: AppService) { }

    @Effect()
    effectUsers$ = this.action$.pipe(
        ofType(loadUsers.type),
        switchMap(() => this.appService.getUsers()),
        switchMap((users: AppModel.IUser[]) => of(loadUsersSuccess({users}))),
        catchError(error => of(error))
    );
}
