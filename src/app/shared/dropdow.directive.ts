import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.show') isOpened = false;
    @HostListener('click') toggleOpen() {
        this.isOpened = !this.isOpened;
    }
}
