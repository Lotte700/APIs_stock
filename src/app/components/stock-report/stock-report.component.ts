import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-stock-report',
  templateUrl: './stock-report.component.html',
  styleUrls: ['./stock-report.component.css']
})
export class StockReportComponent implements OnInit {
  stockData: any[] = [];

  constructor(private stockService: StockService) {}

  ngOnInit() {
    this.fetchStockData();
  }

  fetchStockData() {
    this.stockService.getStockData().subscribe(
      (data: any) => {
        this.stockData = data; // Assuming the API returns an array of stock data
      },
      (error) => {
        console.error('Error fetching stock data:', error);
      }
    );
  }
}