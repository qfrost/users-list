import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppFacade } from '../core/store/app.facade';
import { AppModel } from '../core/models/app.model';

import * as fromApp from '../core/store/index';
import { Store } from '@ngrx/store';
import { SelectUser } from '../core/store/app.action';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public $usersList: Observable<AppModel.IUser[]> = this.appFacade.loadedUsers$;

  constructor(private appFacade: AppFacade,
              private router: Router,
              private store: Store<fromApp.AppState>) {
    this.appFacade.loadAll();
  }

  public redirectToUser(id: number): void {
    this.store.dispatch(new SelectUser(id));
    this.router.navigate(['user', id]);
  }

}
