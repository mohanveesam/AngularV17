import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatashareService } from '../../services/datashare.service';

@Component({
  selector: 'app-dbinding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dbinding.component.html',
  styleUrl: './dbinding.component.css'
})
export class DbindingComponent implements OnInit {
  constructor(private ds: DatashareService) { }
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
    if(this.count <= 0){
      alert("Count cannot be negative");
    }
    else {
      this.count--;
    }
    // this.count--;
  }

  username ="";



  ///Compoennt BBBBBBB
  recieveData : string = "";
  ngOnInit(){
    this.ds.currentData.subscribe((value) => {
      this.recieveData = value;
    });
  }
}
