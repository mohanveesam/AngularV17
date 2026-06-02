import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { VisitorService } from '../../services/visitor.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VisitorFormComponent } from '../visitor-form/visitor-form.component';
import { Visitor } from '../../interfaces/visitor';

@Component({
  selector: 'app-visitor',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './visitor.component.html',
  styleUrl: './visitor.component.css',
})
export class VisitorComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'name',
    'aadhaarNumber',
    'phoneNumber',
    'purpose',
    'actions',
  ];

  dataSource = new MatTableDataSource<Visitor>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private vs: VisitorService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.getVisitors();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getVisitors(): void {
    this.vs.getVisitors().subscribe({
      next: (response) => {
        this.dataSource.data = response;
      },
      error: () => {
        this.snackBar.open('Something went wrong', 'Close', { duration: 3000 });
      },
    });
  }

  openVisitorForm(visitor?: Visitor): void {
    this.dialog.open(VisitorFormComponent, {
      width: '700px',
      data: visitor,
    });
  }

  deleteVisitor(id: number): void {
    const isConfirmed = confirm('Are you sure you want to delete this visitor?',);
    if (!isConfirmed) {
      return;
    }
    this.vs.deleteVisitor(id);
    this.snackBar.open('Visitor deleted successfully', 'Close', {
      duration: 3000,
    });
  }
}
