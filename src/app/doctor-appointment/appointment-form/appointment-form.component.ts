import {Component,Inject,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-appointment-form',
  standalone: true,
    imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.css',
})
export class AppointmentFormComponent implements OnInit{
  appointForm!: FormGroup;
  statuses = ['Scheduled', 'Completed', 'Cancelled'];
  priorities = ['Low', 'Medium', 'High'];
  timeSlots = ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'];
  minDate = new Date();
  constructor(
    private fb: FormBuilder,
    private dialogRef : MatDialogRef<AppointmentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    this.appointForm = this.fb.group({
      patientName: ['', Validators.required],
      doctorName: ['', Validators.required],
      department: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      appointmentTime: ['', Validators.required],
      priority: ['', Validators.required],
      status: ['Scheduled', Validators.required],
      notes: [''],
    });

    if(this.data){
      this.appointForm.patchValue(this.data);
    }
  }

  onSubmit() : void{
    if(this.appointForm.invalid){
            this.appointForm.markAllAsTouched();

      return;
    }
    this.dialogRef.close(
      this.appointForm.value
    );
  }
  close():void{
    this.dialogRef.close();
  }

  get f() {
    return this.appointForm.controls;
  }
}
