import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor() { }
  private rows: any[] = [];
  private refineData: any[] = [];

  setRows(data: any[]): void {
    this.rows = data;
  }

  getRows(): any[] {
    return this.rows;
  }
  setRefineData(data: any[]): void {
    this.refineData = data;
  }

  getRefineData(): any[] {
    return this.refineData;
  }
}
