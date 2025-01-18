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
    this.dataService.setRefineData(this.rows);
  }

  validateRow(row: any) {
  const errors: any = {};

  if (!row.Name || typeof row.Name !== 'string') {
    errors.Name = (!row.Name) ? 'Empty value Error' : 'Data Type mismatch error '; 
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(row.Email)) {
    errors.Email = (!row.Email) ? 'Empty value Error' : 'Data Type mismatch error '; 
  }
  if (!/^\d{10}$/.test(row.Phone)) {
    errors.Phone = (!row.Phone) ? 'Empty value Error' : 'Data Type mismatch error '; 
  }
  if (!row.City || typeof row.City !== 'string') {
    errors.City = (!row.City) ? 'Empty value Error' : 'Data Type mismatch error '; 
  }
  if (!row.Address || typeof row.Address !== 'string') {
    errors.Address = (!row.Address) ? 'Empty value Error' : 'Data Type mismatch error '; 
  }
  const gpa = parseFloat(row.GPA);
  if (isNaN(gpa) || gpa < 0 || gpa > 10) {
    errors.GPA = isNaN(gpa) ? 'Data Type mismatch error': 'GPA must be a number between 0 and 10';
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
  this.router.navigate(['/summary']);
}
}
