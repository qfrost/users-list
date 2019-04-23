import { Component, OnInit, ViewChild } from '@angular/core';
import { AppFacade } from '../core/store/app.facade';
import { AppModel } from '../core/models/app.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../core/services/app.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private $user: Observable<AppModel.IUser> = this.appFacade.selectedUser$;
  private idUser: number = null;
  public user: AppModel.IUser;

  constructor(private appFacade: AppFacade,
              private activeRoute: ActivatedRoute,
              private appService: AppService) {
                this.activeRoute.params.subscribe((params) => {
                  this.idUser = parseInt(params.id, 10);
                });
              }

  ngOnInit() {

    this.$user.subscribe((user: AppModel.IUser) => {
      if (!user) {
        // tslint:disable-next-line:no-shadowed-variable
        this.appService.getUserById(this.idUser).pipe(take(1)).subscribe((user: AppModel.IUser) => {
          this.user = user;
        });
      } else {
        this.user = user;
      }
    });

  }

}
