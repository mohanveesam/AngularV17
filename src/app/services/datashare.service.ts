import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  constructor() { }
  private data = new BehaviorSubject<string>('');

  currentData = this.data.asObservable();

  updateData(message: string): void {
    this.data.next(message);
  }
}
