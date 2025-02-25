import { Component } from '@angular/core';

@Component({
  selector: 'app-ad-banner',
  standalone: false,
  templateUrl: './ad-banner.component.html',
  styleUrl: './ad-banner.component.css'
})
export class AdBannerComponent {
  isHidden = false;
}
