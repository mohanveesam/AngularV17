import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  FormArray,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../shared/material.module';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  taskForm!: FormGroup;
  priorityList = ['Low', 'Medium', 'High', 'Critical'];
  statusList = ['Pending', 'In Progress', 'Completed'];
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TaskFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.taskForm = this.fb.group(
      {
        title: ['', Validators.required],
        description: [''],
        assignedTo: ['', Validators.required],
        startDate: ['', Validators.required],
        dueDate: ['', Validators.required],
        priority: ['', Validators.required],
        status: ['', Validators.required],
        estimatedHours: [
          '',
          [Validators.required, Validators.pattern('^[0-9]*$')],
        ],
        activityLogs: this.fb.array([]),
      },
      {
        validators: this.dateValidator,
      },
    );

    if (this.data) {
      this.taskForm.patchValue(this.data);
      this.data.activityLogs.forEach((activity: any) => {
        this.activityLogs.push(
          this.fb.group({
            comment: [activity.comment],
            updatedBy: [activity.updatedBy],
            updatedDate: [activity.updatedDate],
          }),
        );
      });
    }
  }
  dateValidator(group: AbstractControl): any {
    const start = group.get('startDate')?.value;
    const due = group.get('dueDate')?.value;

    if (start && due && due < start) {
      return {
        invalidDate: true,
      };
    }

    return null;
  }
  onSubmit() {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();

      return;
    }

    this.dialogRef.close(this.taskForm.value);
  }
  close(): void {
    this.dialogRef.close();
  }
  get f() {
    return this.taskForm.controls;
  }
  get activityLogs(): FormArray {
    return this.taskForm.get('activityLogs') as FormArray;
  }
  createActivityLog(): FormGroup {
    return this.fb.group({
      comment: ['', Validators.required],
      updatedBy: ['', Validators.required],
      updatedDate: [new Date()],
    });
  }
  addActivity(): void {
    this.activityLogs.push(this.createActivityLog());
  }
  removeActivity(index: number): void {
    this.activityLogs.removeAt(index);
  }
}
