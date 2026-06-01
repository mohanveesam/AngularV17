import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-emp-form',
  standalone: true,
    imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './emp-form.component.html',
  styleUrl: './emp-form.component.css'
})
export class EmpFormComponent {
   employeeForm!: FormGroup;

  constructor(

    private fb: FormBuilder,

    private dialogRef: MatDialogRef<EmpFormComponent>,

    @Inject(MAT_DIALOG_DATA)
    public data: any

  ) {}
   ngOnInit(): void {

    this.employeeForm = this.fb.group({

      name: [''],

      age: [''],

      skills: this.fb.array([])

    });

    if(this.data) {

      this.employeeForm.patchValue({

        name: this.data.name,

        age: this.data.age

      });
      this.data.skills.forEach((skill: any) => {

        this.skills.push(

          this.fb.group({

            technology: [skill.technology],

            experience: [skill.experience]

          })

        );

      });

    }

  }
get skills(): FormArray {

    return this.employeeForm.get('skills') as FormArray;

  }

  addSkill() {

    this.skills.push(

      this.fb.group({

        technology: [''],

        experience: ['']

      })

    );

  }
removeSkill(index: number) {

    this.skills.removeAt(index);

  }
   submit() {

    this.dialogRef.close(
      this.employeeForm.value
    );

  }

}
