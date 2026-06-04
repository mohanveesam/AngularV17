import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskFormComponent } from '../task-form/task-form.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements AfterViewInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  displayedColumns: string[] = [
    'title',
    'assignedTo',
    'priority',
    'dueDate',
    'status',
    'hours',
    'actions',
  ];
  dataSource = new MatTableDataSource<any>([]);
  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {}
  openTaskForm(taskdata?: any, index?: number) {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      width: '700px',
      data: taskdata,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (index !== undefined) {
          const data = this.dataSource.data;
          data[index] = result;
          this.dataSource.data = [...data];
          this.snackBar.open('Task Updated Successfully', 'Close', {
            duration: 3000,
          });
        } else {
          this.dataSource.data = [...this.dataSource.data, result];
          console.log("Sub data========", result)
          this.snackBar.open('Task Added Successfully', 'Close', {
            duration: 3000,
          });
        }
      }
    });
  }
  deleteTask(index: number): void {
    const confirmDelete = confirm('Are you sure to delete?');
    if (confirmDelete) {
      const data = this.dataSource.data;
      data.splice(index, 1);
      this.dataSource.data = [...data];
      this.snackBar.open('Task Deleted Successfully', 'Close', {
        duration: 3000,
      });
    }
  }
  applyFilter(event: any): void {
    const value = event.target.value;
    this.dataSource.filter = value.trim().toLowerCase();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
