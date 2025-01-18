import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../../services/data-sharing.service';

@Component({
  selector: 'app-preview',
  imports: [CommonModule],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})
export class PreviewComponent implements OnInit {
  constructor(private router: Router, private dataService: DataSharingService) { }
  rows: any[] = [];

  ngOnInit(): void {
    this.rows = this.validateData(this.dataService.getRows());
    console.log(this.rows);
  }

  hasError(value: any, column: string): boolean {
    if (value === null || value === undefined || value === '') {
      return true;
    }

    switch (column) {
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // Validate email format
      case 'phone':
        return !/^\d{10}$/.test(value); // Validate phone number (10 digits)
      case 'gpa':
        return isNaN(value) || value < 0 || value > 10; // Validate GPA (0-10)
      default:
        return false; // No error for other columns
    }
  }

  validateRow(row: any) {
  const errors: any = {};

  if (!row.Name || typeof row.Name !== 'string') {
    errors.Name = 'Empty value or invalid type for Name';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(row.Email)) {
    errors.Email = 'Invalid email format';
  }
  if (!/^\d{10}$/.test(row.Phone)) {
    errors.Phone = 'Phone number must be a 10-digit numeric value';
  }
  if (!row.City || typeof row.City !== 'string') {
    errors.City = 'Empty value or invalid type for City';
  }
  if (!row.Address || typeof row.Address !== 'string') {
    errors.Address = 'Empty value or invalid type for Address';
  }
  const gpa = parseFloat(row.GPA);
  if (isNaN(gpa) || gpa < 0 || gpa > 10) {
    errors.GPA = 'GPA must be a number between 0 and 10';
  }

  return errors;
}

validateData(rows: any) {
  return rows.map((row: any, index: any) => {
    const errors = this.validateRow(row);
    return {
      rowIndex: index + 1,
      row,
      errors
    };
  });
}
navigateToSummary(): void {
  this.router.navigate(['/summary']); // Navigate to the summary page
}
}
