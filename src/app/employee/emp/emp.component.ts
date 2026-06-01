import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EmpFormComponent } from '../emp-form/emp-form.component';
@Component({
  selector: 'app-emp',
  standalone: true,
  imports: [CommonModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule],
  templateUrl: './emp.component.html',
  styleUrl: './emp.component.css'
})
export class EmpComponent {
   displayedColumns: string[] = [
    'name',
    'age',
    'skills',
    'action'
  ];
  employees: any[] = [];

  constructor(private dialog: MatDialog) {}

  openDialog(employee?: any, index?: number) {

    const dialogRef = this.dialog.open(
      EmpFormComponent,
      {
        width: '500px',
        data: employee
      }
    );

    dialogRef.afterClosed().subscribe(res => {

      if(res) {

        if(index !== undefined) {
          this.employees[index] = res;
        } else {
          this.employees.push(res);
        }

        this.employees = [...this.employees];
      }

    });
  }
  deleteEmployee(index: number) {

    this.employees.splice(index, 1);

    this.employees = [...this.employees];

  }
}
