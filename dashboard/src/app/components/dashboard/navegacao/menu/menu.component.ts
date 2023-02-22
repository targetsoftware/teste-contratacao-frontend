import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isCollapsed: boolean = true;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  showMenu(): boolean {
    return this.router.url != '/user/login';
  }
}
