import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-rform',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './rform.component.html',
  styleUrl: './rform.component.css',
})
export class RformComponent {
  userForm!: FormGroup;
  cities = ['Hyderabad', 'Chennai', 'Bangalore', 'Mumbai'];
  filteredCities = [...this.cities];
  submittedUsers: any[] = [];
  show = false;
  cshow = false;
  constructor(
    private fb: FormBuilder,
    private cs: CommonService,
  ) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', Validators.required],
      city: ['', Validators.required],
      active: [false],
      hobbies: this.fb.group({
        reading: [false],
        coding: [false],
        gaming: [false],
      }),
      // search: [''],
    });
  }
  get f() {
    return this.userForm.controls;
  }
  togglePassword() {
    this.show = !this.show;
  }
  ctogglePassword() {
    this.cshow = !this.cshow;
  }
  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    // REAL-TIME PAYLOAD
    const payload = {
      ...this.userForm.value,
      createdDate: new Date(),
      status: true,
    };
    console.log('Payload:', payload);

    // LOCAL ARRAY
    this.submittedUsers.push(payload);

    // SERVICE SAVE
    this.cs.saveUser(payload);
    console.log('Component Array:', this.submittedUsers);
    this.userForm.reset();
    this.userForm.patchValue({ active: false });
  }
}
