import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsercrudService {

  
    private usersSubject = new BehaviorSubject<any[]>([
      {
        id: 1,
        name: 'Mohan',
        age: 28
      }
    ]);
  
    users$ = this.usersSubject.asObservable();
  
    getUsers() {
      return this.usersSubject.value;
    }
  
    addUser(user: any) {
      const users = [...this.usersSubject.value];
      users.push(user);
      this.usersSubject.next(users);
    }
  
    updateUser(user: any) {
      const users = this.usersSubject.value.map(item =>
        item.id === user.id ? user : item
      );
  
      this.usersSubject.next(users);
    }
  
    deleteUser(id: number) {
      const users = this.usersSubject.value.filter(
        item => item.id !== id
      );
  
      this.usersSubject.next(users);
    }
}
