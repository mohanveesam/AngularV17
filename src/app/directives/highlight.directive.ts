import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private element:ElementRef) { }

  @HostListener('mouseenter') 
  onMouseEnter(){
    this.element.nativeElement.style.backgroundColor = 'yellow';
    this.element.nativeElement.style.color = 'red';
    this.element.nativeElement.style.display = 'inline-block';
  }
  @HostListener('mouseleave') 
  onMouseLeave(){
    this.element.nativeElement.style.backgroundColor = '';
    this.element.nativeElement.style.color = '';
  }
}
