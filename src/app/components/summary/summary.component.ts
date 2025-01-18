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
    this.rows = this.dataService.getRows(); 
    console.log(this.rows);
    this.totalRows = this.rows.length;
    this.validRows = this.rows.filter(row => row.valid).length;
    this.invalidRows = this.rows.filter(row => !row.valid).length;
  }
    restart(): void {
    // Restart the application and reset the data
    console.log('Application restarted');
  }
}
