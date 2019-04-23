import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStorageService {

  private apiUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor() { }

  public get getApiUrl(): string {
    return this.apiUrl;
  }

}
