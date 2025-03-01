import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnInit {

  httpClient = inject(HttpClient);
  data: any = [];  // ข้อมูลหุ้น
  chart: any;

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    // ใช้ API ของ Alpha Vantage เพื่อดึงข้อมูลหุ้น AAPL
    this.httpClient.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=2CPEK24O2ZJ0GRIM')
      .subscribe((response: any) => {
        const timeSeries = response['Time Series (Daily)'];
        const labels = Object.keys(timeSeries).reverse();  // วันที่
        const prices = Object.values(timeSeries).reverse().map((item: any) => item['4. close']);  // ราคาหุ้น

        this.data = prices;

        // แสดงกราฟ
        this.renderChart(labels, prices);
      });
  }

  renderChart(labels: any[], data: any[]) {
    this.chart = new Chart('stockChart', {
      type: 'line',  // ใช้กราฟแบบ Line
      data: {
        labels: labels,
        datasets: [{
          label: 'ราคาหุ้น AAPL',
          data: data,
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });
  }
}
