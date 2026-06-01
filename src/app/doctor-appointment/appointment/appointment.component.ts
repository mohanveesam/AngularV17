import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AppointmentFormComponent } from '../appointment-form/appointment-form.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css',
})
export class AppointmentComponent {
  displayedColumns: string[] = [
    'patientName',
    'doctorName',
    'appointmentDate',
    'appointmentTime',
    'status',
    'actions',
  ];
  appointments: any[] = [];
  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {}
  openDialog(appointdata?: any, index?: number) {
    const dialogRef = this.dialog.open(AppointmentFormComponent, {
      width: '700px',
      data: appointdata,
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        if (index !== undefined) {
          this.appointments[index] = res;
          this.snackBar.open('Appointment Updated Successfully', 'Close', {
            duration: 3000,
          });
        } else {
          this.appointments.push(res);
          this.snackBar.open('Appointment Added Successfully', 'Close', {
            duration: 3000,
          });
        }
        this.appointments = [...this.appointments];
      }
    });
  }

  deleteAppointment(index: any) {
    const confirmed = confirm('Are you sure you want to delete?');
    if (confirmed) {
      this.appointments.splice(index, 1);
      this.snackBar.open('Appointment Deleted Successfully', 'Close', {
        duration: 3000,
      });
    }
    this.appointments = [...this.appointments];
  }
}
