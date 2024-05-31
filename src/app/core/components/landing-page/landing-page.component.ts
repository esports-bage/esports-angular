import { Component } from '@angular/core';
import { CarousalFeatures1Component } from './carousal-features-1/carousal-features-1.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CarousalFeatures1Component],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
