import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CommonService } from '../../services/common.service';
import { UserFormComponent } from '../user-form/user-form.component';
import { CommonModule } from '@angular/common';
import { UsercrudService } from '../usercrud.service';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  users: any[] = [];

  constructor(
    private service: UsercrudService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.service.users$.subscribe(res => {
      this.users = res;
    });
  }

  addUser() {
    this.dialog.open(UserFormComponent);
  }

  editUser(user: any) {
    this.dialog.open(UserFormComponent, {
      data: user
    });
  }

  deleteUser(id: number) {
    this.service.deleteUser(id);
  }
}

