import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-body-bcb',
  standalone: false,
  templateUrl: './home-body-bcb.component.html',
  styleUrl: './home-body-bcb.component.css'
})
export class HomeBodyBCBComponent {
  isSignInPage: boolean = false;
  isServiceRequestPage: boolean = false;
  isDocumentPage: boolean = false;
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isSignInPage = this.router.url === '/signin';
      this.isServiceRequestPage = this.router.url === '/signin';
      this.isDocumentPage = this.router.url === '/document';
    });
  }



    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: true,
      navSpeed: 700,
      margin: 16,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        991: {
          items: 3,
        },
        1024: {
          items: 4,
        }
      },
      nav: false
    }
}
