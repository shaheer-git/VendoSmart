import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) { }

  navigateToPreview(): void {
    this.router.navigate(['preview']);
  }
  navigateToSummary(): void {
    this.router.navigate(['summary']);
  }
  navigateToHome(): void {
    this.router.navigate(['']);
  }
}
