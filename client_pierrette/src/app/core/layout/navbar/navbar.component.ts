import {Component} from '@angular/core';

type NAVITEM = {
  name: string;
  to: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  NavItem: NAVITEM[] = [
    {name: 'home', to: ''},
    {name: 'about us', to: 'about-us'},
    {name: 'contact', to: 'contact'},
  ]
  ShopItem: NAVITEM[] = [
    {name: 'pierre', to: 'product/1'},
    {name: 'huile', to: 'product/13'},
    {name: 'other', to: 'product/132'},
  ]

  isNavOpen: boolean = false;
  isDropDownOpen: boolean = false;
  constructor() { }


  toggleNav(): void {
  }

  closeNav(): void {
  }

  toggleDropdown(): void {
  }

}
