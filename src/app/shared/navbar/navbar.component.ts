import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  isDropdownOpen = false;
  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = '';
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
        this.isDropdownOpen = false;
      }
    });
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  navigateTo(url: string): void {
    if (this.currentRoute !== url) {
      this.router.navigateByUrl(url);
    }
  }
}
