import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipe } from '../../pipes/reverse.pipe';
import { CaptalizePipe } from '../../pipes/captalize.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, ReversePipe, CaptalizePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  firstname = 'mohhan';
  lastname = 'VEESAM'
  date = new Date();
  amount = 1500; 
  percentage = 0.75;
  employee = {
    id: 1,
    name: 'mohan'
  };


}
