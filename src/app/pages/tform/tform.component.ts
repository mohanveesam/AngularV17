import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { PwdToggleDirective } from '../../directives/pwd-toggle.directive';

@Component({
  selector: 'app-tform',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, PwdToggleDirective],
  templateUrl: './tform.component.html',
  styleUrl: './tform.component.css',
})
export class TformComponent {
  submittedusers: any[] = [];
  user = {
    name: '',
    email: '',
    password: '',
  };
  onSubmit(form: any) {
    console.log(form);
    this.submittedusers.push(this.user);
  }
}
