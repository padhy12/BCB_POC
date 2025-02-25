import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-my-solutions',
  standalone: false,
  templateUrl: './my-solutions.component.html',
  styleUrl: './my-solutions.component.css'
})
export class MySolutionsComponent {
  customOptions: OwlOptions = {
    loop: false,
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
        items: 2
      },
      991: {
        items: 3,
        dots: false,
      }
    },
    nav: false
  }
}
