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
  // Path ke file exe di dalam folder assets
  downloadLink = 'assets/downloads/Projek-Sija.exe'; 
  
  downloadGame() {
    // Membuat element link sementara untuk memicu download
    const link = document.createElement('a');
    link.href = this.downloadLink;
    link.download = 'Projek-Sija.exe'; // Nama file saat terunduh
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}