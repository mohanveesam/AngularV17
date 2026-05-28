import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css',
})
export class CrudComponent {
  empData: any[] = [];
  editIndex = null;

  empForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.empForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.requiredTrue],
      skills: this.fb.array([this.createSkill()]),
    });
  }

  createSkill(): FormGroup {
    return this.fb.group({
      technology: [''],
      experience: [''],
    });
  }
  get skills(): FormArray {
    return this.empForm.get('skills') as FormArray;
  }
  removeAt(index: any) {
    this.skills.removeAt(index);
  }
  addSkill() {
    this.skills.push(this.createSkill());
  }
  onSubmit() {
    // if (this.empForm.invalid) {
    //   return;
    // }
    const formval = this.empForm.value;

    if (this.editIndex !== null) {
      this.empData[this.editIndex] = formval;
      this.editIndex = null;
    } else {
      this.empData.push(formval);
    }
    console.log(this.empData);
    this.empForm.reset();
    this.skills.clear();
    this.addSkill();
  }
  EditRecord(employee: any, index: any) {
    this.editIndex = index;
    this.empForm.patchValue({
      name: employee.name,
      age: employee.age,
    });
    this.skills.clear();
    employee.skills.forEach((skill: any) => {
      this.skills.push(
        this.fb.group({
          technology: skill.technology,
          experience: skill.experience,
        }),
      );
    });
  }
  deleteRecord(index: any) {
    this.empData.splice(index, 1);
  }
}
