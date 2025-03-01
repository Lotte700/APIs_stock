import { Component, OnInit } from '@angular/core';
import { Chart, LinearScale, Title, Tooltip, Legend, CategoryScale, LineController, LineElement, PointElement } from 'chart.js';

// Register the necessary components
Chart.register(
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  LineController, // Register the LineController
  LineElement,   // Register the LineElement
  PointElement   // Register the PointElement (required for line charts)
);

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnInit {
  chart: any;

  ngOnInit(): void {
    console.log('Component initialized'); // Log 1
    this.fetchData();
  }

  fetchData() {
    console.log('Fetching data...'); // Log 2
    // Simulate fetching data
    this.renderChart();
  }

  renderChart() {
    console.log('Rendering chart...'); // Log 3

    // Check if canvas element exists
    const canvas = document.getElementById('canvasId') as HTMLCanvasElement;
    if (!canvas) {
      console.error('Canvas element not found!'); // Log 4
      return;
    }

    // Log the data being passed to the chart
    const chartData = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
        label: 'Stock Price',
        data: [10, 20, 30, 40, 50],
        borderColor: 'blue',
        fill: false,
      }]
    };
    console.log('Chart data:', chartData); // Log 5

    this.chart = new Chart(canvas, {
      type: 'line',
      data: chartData,
      options: {
        scales: {
          x: {
            type: 'category',
          },
          y: {
            type: 'linear',
          }
        }
      }
    });

    console.log('Chart rendered successfully'); // Log 6
  }
}