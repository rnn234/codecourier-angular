import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-install',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.scss']
})
export class InstallComponent {
  downloadLink = '#'; // TODO: Ganti dengan link download actual
  
  downloadGame() {
    // TODO: Implement actual download logic
    if (this.downloadLink && this.downloadLink !== '#') {
      window.open(this.downloadLink, '_blank');
    } else {
      alert('Link download akan segera tersedia!');
    }
  }
}
