import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
 
@Component({
  selector: 'app-document-bcb',
  standalone: false,
  templateUrl: './document-bcb.component.html',
  styleUrls: ['./document-bcb.component.css']
})
export class DocumentBCBComponent implements AfterViewInit, OnInit {
 
  activeTab: string = 'overview';
  chart: any;
 
  @ViewChild('moneyChart', { static: false }) moneyChart!: ElementRef;
  ngOnInit() {
    this.renderChart();
  }
 
  renderChart() {
    setTimeout(() => {
      const ctx = document.getElementById('savingsChart') as HTMLCanvasElement;
      if (ctx) {
        this.chart = new Chart(ctx, {
          type: 'doughnut',
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom',
              }
            }
          },
          data: {
            labels: ['Revenue', 'Expenses', 'Profit', 'Cashflow','Savings'],
            datasets: [{
              data: [50, 20, 15, 15,20],
              backgroundColor: ['#00BFFF', '#006EFC', '#5C6C80', '#BFDCFC','#00A1E0']
            }]
          }
        });
      }
    }, 500);
  }
 
  setActiveTab(tab: string) {
    this.activeTab = tab;
    if (tab === 'overview') {
      this.renderChart();
    }
  }
 
   ngAfterViewInit() {
    setTimeout(() => {
      if (this.moneyChart?.nativeElement) {
        const ctx = this.moneyChart.nativeElement.getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Money in', 'Money spent'],
            datasets: [{
              data: [93259, 70017],
              backgroundColor: ['#28a745', '#dc3545']
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true } }
          }
        });
      } else {
        console.error('Canvas element not found');
      }
    }, 500); // Ensure DOM is ready before accessing canvas
  }
}