import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPwdToggle]',
  standalone: true,
})
export class PwdToggleDirective {
  private visibility = false;
  constructor(private element: ElementRef) {}

  @HostListener('click')
  togglePassword() {
    this.visibility = !this.visibility;
    const input = this.element.nativeElement.previousElementSibling;
    const icon = this.element.nativeElement.querySelector('mat-icon');

    if (this.visibility) {
      input.type = 'text';
      icon.innerText = 'visibility_off';
    } else {
      input.type = 'password';
      icon.innerText = 'visibility';
    }
  }
}
