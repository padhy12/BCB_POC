import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-body-bcb',
  standalone: false,
  templateUrl: './home-body-bcb.component.html',
  styleUrl: './home-body-bcb.component.css'
})
export class HomeBodyBCBComponent {
  isSignInPage: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isSignInPage = this.router.url === '/signin';
    });
  }
}
