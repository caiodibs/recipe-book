import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() menuSelected = new EventEmitter<string>();

  constructor() { }
  ngOnInit() {
  }

  onSelect (menu: string) {
    this.menuSelected.emit(menu);
  }

}
