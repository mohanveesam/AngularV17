import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';
import { UsercrudService } from '../usercrud.service';


@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
 userForm !: FormGroup
  constructor(
    private fb: FormBuilder,
    private service: UsercrudService,
    private dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  this.userForm = this.fb.group({
    id: [0],
    name: ['', Validators.required],
    age: ['', Validators.required]
  });
  }



  ngOnInit() {

    if (this.data) {
      this.userForm.patchValue(this.data);
    }

  }

  save() {

    if (this.userForm.invalid) {
      return;
    }

    const formData = this.userForm.value;

    if (this.data) {

      this.service.updateUser(formData);

    } else {

      this.service.addUser({
        ...formData,
        id: Date.now()
      });

    }

    this.dialogRef.close();
  }
}