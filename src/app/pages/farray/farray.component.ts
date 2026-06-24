import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-farray',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './farray.component.html',
  styleUrl: './farray.component.css',
})
export class FarrayComponent {
  uform!: FormGroup;
  submittedUsers: any[] = [];
  constructor(private fb: FormBuilder) {
    this.uform = this.fb.group({
      name: [''],
      skills: this.fb.array([]),
    });
    this.addSkill();
  }
  get skills(): FormArray {
    return this.uform.get('skills') as FormArray;
  }
  addSkill() {
    this.skills.push(this.createSkill());
  }
  createSkill() {
    return this.fb.group({
      Technology: [''],
      Experience: [''],
    });
  }
  removeSkill(index: number) {
    this.skills.removeAt(index);
  }
  onSubmit() {
    if (this.uform.valid) {
      console.log(this.uform.value);
      this.submittedUsers.push(this.uform.value);
      this.uform.reset();
    }
  }
}
