import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink], // RouterLink diperlukan untuk [routerLink] di HTML
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('contentSection') contentSection!: ElementRef;
  
  boxHovered = false; //
  showContentSection = false; //
  
  constructor(private cdr: ChangeDetectorRef) {}

  toggleContentSection() {
    this.showContentSection = !this.showContentSection;
    this.cdr.detectChanges(); //
    
    if (this.showContentSection) {
      setTimeout(() => {
        // Otomatis scroll ke bawah saat section terbuka
        this.contentSection?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }
}