import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Papa from 'papaparse'
import { DataSharingService } from '../../services/data-sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  imports: [CommonModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  constructor(private dataService: DataSharingService, private router: Router) { }

  errorMessage = '';

  onFileUpload(event: any): void {
    const file = event.target.files[0];
    if (!file) {
      this.errorMessage = 'Please select a file.';
      return;
    }

    if (file.type !== 'text/csv') {
      this.errorMessage = 'Invalid file type. Please upload a CSV file.';
      return;
    }

    Papa.parse(file, {
      header: true, // Treat the first row as headers
      skipEmptyLines: true, // Ignore empty lines
      complete: (results) => {
        console.log(results.data); // Parsed data as an array of objects
        this.dataService.setRows(results.data);
      }
    });
  }
  navigateToPreview(): void {
    this.router.navigate(['preview']);
  }
}
