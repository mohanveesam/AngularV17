import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Visitor } from '../interfaces/visitor';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

   private visitorsSubject =
    new BehaviorSubject<Visitor[]>([]);

  visitors$ =
    this.visitorsSubject.asObservable();

  getVisitors() {
    return this.visitors$;
  }

  addVisitor(visitor: Visitor) {

    const visitors =
      this.visitorsSubject.value;

    this.visitorsSubject.next([
      ...visitors,
      visitor
    ]);
  }

  updateVisitor(visitor: Visitor) {

    const updated =
      this.visitorsSubject.value.map(v =>
        v.id === visitor.id ? visitor : v
      );

    this.visitorsSubject.next(updated);
  }

  deleteVisitor(id: number) {

    const filtered =
      this.visitorsSubject.value.filter(
        x => x.id !== id
      );

    this.visitorsSubject.next(filtered);
  }
}
