import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usercomp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usercomp.component.html',
  styleUrl: './usercomp.component.css',
})
export class UsercompComponent implements OnInit {
  users: any[] = [];
  selectedusers: any[] = [];
  submittedusers: any[] = [];

  constructor(private us: UserService) {}
  ngOnInit(): void {
    this.us.getusers().subscribe({
      next: (res: any) => {
        console.log(res);
        this.users = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  selection(event: any, user: any) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedusers.push(user);
    } else {
      this.selectedusers = this.selectedusers.filter((u: any) => u !== user);
    }
    console.log(this.selectedusers);
  }
  onsubmit() {
    if (this.selectedusers.length > 0) {
      this.us.postusers(this.selectedusers).subscribe({
        next: (res) => {
          console.log(res);
          this.submittedusers = [...this.selectedusers];
          // console.log(this.submittedusers);
          this.selectedusers = [];
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
  adduser() {
    // Implementation for adding a new user
  }

  deleteUser(id: number) {
    this.us.deleteUser(id).subscribe({
      next: (res) => {
        console.log(res);

        // remove from UI
        this.users = this.users.filter((user) => user.id !== id);
      },

      error: (err) => {
        console.log(err);
      },
    });
  }
  editUser(user: any) {
    const updatedUser = {
      ...user,
      username: 'Updated Name',
    };

    this.us.updateUser(user.id, updatedUser).subscribe({
      next: (res) => {
        console.log(res);

        // update UI
        const index = this.users.findIndex((u) => u.id === user.id);

        this.users[index] = updatedUser;
      },

      error: (err) => {
        console.log(err);
      },
    });
  }
}
