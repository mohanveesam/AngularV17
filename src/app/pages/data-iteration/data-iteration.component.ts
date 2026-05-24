import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-iteration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-iteration.component.html',
  styleUrl: './data-iteration.component.css',
})
export class DataIterationComponent {
  //1 : Array of strings
  fruits = ['apple', 'orange', 'banana', 'grape'];

  //2 : Array of objects
  users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Sara', age: 30 },
    { id: 3, name: 'Mike', age: 28 },
  ];

  //3 : Nested objects
  employees = [
    {
      id: 1,
      name: 'John',
      address: {
        city: 'Bangalore',
        pincode: 560001,
      },
    },
    {
      id: 2,
      name: 'Sara',
      address: {
        city: 'Hyderabad',
        pincode: 500001,
      },
    },
  ];

  //4 : Array of arrays
  numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  //5 : Array of objects with nested arrays
  students = [
    {
      name: 'John',
      marks: [80, 75, 90],
    },
    {
      name: 'Sara',
      marks: [70, 85, 88],
    },
  ];
}
