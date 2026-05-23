import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tform',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './tform.component.html',
  styleUrl: './tform.component.css',
})
export class TformComponent {
  submittedusers: any[] = [];
  user = {
    name: '',
    email: '',
  };
  onSubmit(form: any) {
    console.log(form);
    this.submittedusers.push(this.user);
  }
}
