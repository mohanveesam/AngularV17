import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiurl = 'https://fakestoreapi.com/users';

  constructor(private http: HttpClient) {}
  getusers() {
    return this.http.get(this.apiurl);
  }

  postusers(data: any) {
    console.log('POST DATA', data);
    return this.http.post(this.apiurl, data);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.apiurl}/${id}`);
  }

  updateUser(id: number, data: any) {
    return this.http.put(`${this.apiurl}/${id}`, data);
  }
}
