import { Router } from '@angular/router';

import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isCollapsed: boolean = true;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  showMenu(): boolean {
    return this.router.url != '/user/login';
  }
}
