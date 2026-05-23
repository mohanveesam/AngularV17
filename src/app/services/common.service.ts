import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}
  users: any[] = [];

  saveUser(payload: any) {
    this.users.push(payload);
    console.log('Service Data:', this.users);
  }

  getUsers() {
    return this.users;
  }
}
