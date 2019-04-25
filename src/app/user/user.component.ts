import { Component, OnInit } from '@angular/core';
import { AppFacade } from '../core/store/app.facade';
import { AppModel } from '../core/models/app.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user$: Observable<AppModel.IUser> = this.appFacade.selectedUser$;
  public user: AppModel.IUser;

  constructor(private appFacade: AppFacade) {}

  ngOnInit() {

  }

}
