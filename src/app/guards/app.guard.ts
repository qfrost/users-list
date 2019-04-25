import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import * as fromApp from '../core/store/index';
import { Store, select } from '@ngrx/store';
import { map, take, switchMap, filter, catchError, tap } from 'rxjs/operators';
import { loadUsers, selectUser, loadUsersSuccess } from '../core/store/app.action';
import { AppService } from '../core/services/app.service';
import { AppModel } from '../core/models/app.model';

@Injectable({
    providedIn: 'root',
})
export class AppGuard implements CanActivate {

    constructor(private store: Store<fromApp.AppState>, private appService: AppService, private router: Router) {}

    waitForUsersToLoad(): Observable<boolean> {
        return this.store.pipe(
            select(fromApp.getUsersLoaded),
            map(isLoaded => isLoaded),
            take(1)
        );
    }

    hasSelectedUserInStore(id: string): Observable<boolean> {
        return this.store.pipe(
          select(fromApp.getUserById),
          map(user => !!user),
          take(1)
        );
    }

    hasUsersInApi(id: string): Observable<boolean> {
        return this.appService.getUsers().pipe(
            map((users: AppModel.IUser[]) => loadUsersSuccess({users})),
            tap(action => this.store.dispatch(action)),
            map((users) => {
                this.store.dispatch(selectUser({id: parseInt(id, 10)}));
                return !!users;
            }),
            catchError(() => {
                this.router.navigate(['/']);
                return of(false);
            })
        );
    }

    hasUser(id) {
        return this.hasSelectedUserInStore(id).pipe(
            switchMap(inStore => {
                if (inStore) {
                    return of(inStore);
                }

                return this.hasUsersInApi(id);
            })
        );
    }


    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        return this.waitForUsersToLoad().pipe(
            switchMap(() => this.hasUser(route.params.id) )
        );
    }
}
