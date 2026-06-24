import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { FormControl, FormsModule } from '@angular/forms';
import { DashChildComponent } from './dash-child/dash-child.component';
import { DatashareService } from '../../services/datashare.service';
import { debounceTime } from 'rxjs';
import { MaterialModule } from '../../shared/material.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, DashChildComponent, MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  // 1.Get api integration-----------------------------------------------------------------------
  // users : any[] =[];
  //  constructor(private cs:CommonService){
  // }
  // getdata(){
  //     this.users=this.cs.getPeople();
  // }


  // 2. Search filter using ngmodel-----------------------------------------------------------------------
  // searchText: string = '';
  // fruits: string[] = [
  //   'Apple',
  //   'Banana',
  //   'Orange',
  //   'Mango',
  //   'Grapes'
  // ];
  // get filteredFruits(): string[] {
  //   return this.fruits.filter(fruit =>
  //     fruit.toLowerCase().includes(this.searchText.toLowerCase())
  //   );
  // }


  // 3. Search filter using event binding----------------------------------------------------------------------
  //  users: string[] = [
  //   'John',
  //   'David',
  //   'Smith',
  //   'Alice',
  //   'Bob'
  // ];
  // filteredUsers: string[] = this.users;
  // searchUser(event: any): void {
  //   const value = event.target.value.toLowerCase();
  //   this.filteredUsers = this.users.filter(user =>
  //     user.toLowerCase().includes(value)
  //   );
  // }



  // 4. Component interaction using @Input and @Output----------------------------------------------------------------------
  // message: string = 'Hello from Parent';
  // receivedMessage: string = '';
  // receiveData(data: string): void {
  //   this.receivedMessage = data;
  // }


  // 5. Component interaction using service----------------------------------------------------------------------
  //  message: string = '';
  // constructor(private ds: DatashareService) {}
  // sendData(): void {
  //   this.ds.updateData(this.message);
  //   this.message = '';
  // }



  // 6.Directive task
  // activeBlock: string = '';
  // showBlock(block: string): void {
  //   this.activeBlock = block;
  // }


  // 7. debounce search using rxjs
   users = [
    'Ramesh',
    'Suresh',
    'Mahesh',
    'Kiran',
    'Rajesh',
    'Anil',
    'Rahul'
  ];

  filteredUsers = [...this.users];

  searchControl = new FormControl('');

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe((value: any) => {
        this.filteredUsers = this.users.filter(user =>
          user.toLowerCase().includes(value.toLowerCase())
        );
      });
  }








}   
