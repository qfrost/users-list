import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import * as fromApp from '../core/store/index';
import { Store, select } from '@ngrx/store';
import { map, take, switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AppGuard implements CanActivate {

    constructor(private store: Store<fromApp.AppState>, private router: Router) {}

    waitForUsersToLoad(): Observable<boolean> {
        return this.store.pipe(
            select(fromApp.getUsersLoaded),
            map(isLoaded => isLoaded),
            take(1)
        );
    }


    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        return this.waitForUsersToLoad().pipe(
            switchMap((isLoaded) => {
                if (!isLoaded) {
                    this.router.navigate(['/']);
                    return of(false);
                }

                return of(true);
            })
        );
    }
}
