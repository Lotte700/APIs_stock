import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiUrl = 'https://api.example.com/stock-data'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getStockData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}