import { Component, Inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VisitorService } from '../../services/visitor.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-visitor-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './visitor-form.component.html',
  styleUrl: './visitor-form.component.css',
})
export class VisitorFormComponent implements OnInit {
  visitorForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private vs: VisitorService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<VisitorFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  ngOnInit(): void {
    this.visitorForm = this.fb.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(3)]],
      aadhaarNumber: ['',[Validators.required, Validators.pattern(/^\d{12}$/)],],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      purpose: ['', Validators.required],
      skills: this.fb.array([]),
    });
    if (this.data) {
      this.visitorForm.patchValue(this.data);
      this.data.skills.forEach((skill: any) => {
        this.skills.push(
          this.fb.group({
            skillName: [skill.skillName, Validators.required],
            experience: [skill.experience, Validators.required],
          }),
        );
      });
    } else {
      this.addSkill();
    }
  }
  get skills(): FormArray {
    return this.visitorForm.get('skills') as FormArray;
  }
  addSkill(): void {
    this.skills.push(this.createSkillGroup());
  }
  createSkillGroup(): FormGroup {
    return this.fb.group({
      skillName: ['', Validators.required],
      experience: ['', Validators.required],
    });
  }
  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }
  submit(): void {
    if (this.visitorForm.valid) {
      const payload = this.visitorForm.value;
      if (this.data?.id) {
        this.vs.updateVisitor(payload);
        this.snackBar.open('Visitor updated successfully', 'Close', {
          duration: 3000,
        });
      } else {
        payload.id = Date.now();
        this.vs.addVisitor(payload);
        this.snackBar.open('Visitor added successfully', 'Close', {
          duration: 3000,
        });
      }
      this.dialogRef.close(true);
    } else {
      // this.visitorForm.markAllAsTouched();
      this.snackBar.open('Please fill all required fields', 'Close', {
        duration: 3000,
      });
    }
  }
}
