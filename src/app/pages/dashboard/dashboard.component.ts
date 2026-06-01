import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  users : any[] =[];
   constructor(private cs:CommonService){

  }
  getdata(){
      this.users=this.cs.getPeople();
  }
}
