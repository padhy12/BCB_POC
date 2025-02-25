import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header-bcb',
  standalone: false,
  templateUrl: './header-bcb.component.html',
  styleUrl: './header-bcb.component.css'
})
export class HeaderBCBComponent {
  isDropdownVisible = false;
  isSignInPage: boolean = false;
  isDocumentPage: boolean = false;

  showDropdown() {
    this.isDropdownVisible = true;
  }

  hideDropdown() {
    this.isDropdownVisible = false;
  }

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // ✅ Check if the current route is '/signin'
        this.isSignInPage = event.url === '/home';
        this.isDocumentPage  = event.url === '/document';
      }
    });
  }
}
