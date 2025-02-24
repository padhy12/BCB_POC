import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-bcb',
  standalone: false,
  templateUrl: './sign-in-bcb.component.html',
  styleUrl: './sign-in-bcb.component.css'
})
export class SignInBCBComponent {
  constructor(private router: Router) {}

  onSignIn() {
    // Perform sign-in logic here
    // After successful login, navigate to home
    this.router.navigate(['/']);
  }
}
