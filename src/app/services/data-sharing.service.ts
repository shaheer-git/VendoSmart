import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor() { }
  private rows: any[] = [];

  setRows(data: any[]): void {
    this.rows = data;
  }

  getRows(): any[] {
    return this.rows;
  }
}
