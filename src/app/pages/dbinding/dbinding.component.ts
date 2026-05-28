import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dbinding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dbinding.component.html',
  styleUrl: './dbinding.component.css'
})
export class DbindingComponent {
  //Interpolation
  name: string = "Angular"; 

  //Property Binding
  fruit : string ="Mango"
  isDisable = true;

  //Event Binding
  count : number = 0;
  incre(){
    this.count++;
  }
  decre(){
    this.count--;
  }

  username ="";
}
