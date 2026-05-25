import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, HighlightDirective, MatIconModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  // *ngIf directive example
  showdata: boolean = false;
  show() {
    this.showdata = !this.showdata;
  }

  // *ngFor directive example
  items: string[] = ['Car', 'Bike', 'Jet'];

  //*ngSwitch directive example
  role : string = 'admin';

  // ngClass directive example
  isActive: boolean = false;
  makeactive(){
    this.isActive = !this.isActive;
  }

  // ngStyle directive example
  textcolor :string = 'blue';
  textsize : string = '20px'; 

  iserror : boolean = false;
  correcterror(){
    this.iserror = !this.iserror;
  }
}
