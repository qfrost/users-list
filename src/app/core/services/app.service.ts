import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppModel } from '../models/app.model';
import { AppStorageService } from './app-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient, private appStorageService: AppStorageService) { }

  public getUsers(): Observable<AppModel.IUser[]> {
    return this.httpClient.get<AppModel.IUser[]>(this.appStorageService.getApiUrl);
  }

  public getUserById(id: number): Observable<AppModel.IUser> {
    return this.httpClient.get<AppModel.IUser>(`${this.appStorageService.getApiUrl}/${id}`);
  }

}
