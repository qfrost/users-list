import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';

import * as fromApp from '../core/store/index';
import { Store } from '@ngrx/store';
import { AppFacade } from '../core/store/app.facade';

@Injectable({
    providedIn: 'root',
})
export class AppGuard implements CanActivate {

    constructor(private store: Store<fromApp.AppState>, private appFacade: AppFacade) {}

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        // this.store.dispatch(loadUsers());
        // this.store.dispatch(selectUser({id: 1}));

        return of(true);
    }
}
