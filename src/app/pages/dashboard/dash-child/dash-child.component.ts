import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dash-child',
  standalone: true,
  imports: [],
  templateUrl: './dash-child.component.html',
  styleUrl: './dash-child.component.css'
})
export class DashChildComponent {
   @Input() parentData: string = '';

  @Output() childEvent = new EventEmitter<string>();

  sendData(): void {
    this.childEvent.emit('Hello from Child');
  }

}
