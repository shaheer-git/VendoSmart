import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../services/data-sharing.service';

@Component({
  selector: 'app-summary',
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent implements OnInit {
  rows!: any[];
  totalRows: any;
  validRows: any;
  invalidRows: any;
  constructor(private dataService: DataSharingService) { }

  ngOnInit(): void {
    this.rows = this.dataService.getRefineData(); 
    this.totalRows = this.rows.length;
    this.invalidRows = this.rows.filter(row => Object.keys(row.errors).length).length;
    this.validRows = this.totalRows - this.invalidRows;
  }
    restart(): void {
    // Restart the application and reset the data
    console.log('Application restarted');
  }
}
