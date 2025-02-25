// import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
// import Chart from 'chart.js/auto';

// @Component({
//   selector: 'app-document-bcb',
//   standalone: false,
//   templateUrl: './document-bcb.component.html',
//   styleUrl: './document-bcb.component.css'
// })
// export class DocumentBCBComponent implements AfterViewInit {
  
//   @ViewChild('moneyChart') moneyChart!: ElementRef;

//   ngAfterViewInit() {
//     const ctx = this.moneyChart.nativeElement.getContext('2d');
//     new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: ['Money in', 'Money spent'],
//         datasets: [{
//           data: [93259, 70017],
//           backgroundColor: ['#28a745', '#dc3545']
//         }]
//       },
//       options: { 
//         responsive: true, 
//         plugins: { 
//           legend: { display: false } 
//         },
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     });
//   }
// }

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


  // ngAfterViewInit() {
  //   if (this.moneyChart) {
  //     const ctx = this.moneyChart.nativeElement.getContext('2d');
  //     new Chart(ctx, {
  //       type: 'bar',
  //       data: {
  //         labels: ['Money in', 'Money spent'],
  //         datasets: [{
  //           data: [9325, 7001],
  //           backgroundColor: ['#28a745', '#dc3545']
  //         }]
  //       },
  //       options: { 
  //         responsive: true,
  //         maintainAspectRatio: false,
  //         plugins: { 
  //           legend: { display: false } 
  //         },
  //         scales: {
  //           y: {
  //             beginAtZero: true
  //           }
  //         }
  //       }
  //     });
  //   } else {
  //     console.error('Canvas element not found');
  //   }
  // }
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
// export class DocumentBCBComponent implements AfterViewInit, OnDestroy {

//   private myChart: Chart | null = null;

//   ngAfterViewInit() {
//     this.renderChart();
//   }

//   renderChart() {
//     const canvas = document.getElementById('moneyChart') as HTMLCanvasElement;
//     if (!canvas) return;

//     // Destroy the previous instance if it exists
//     if (this.myChart) {
//       this.myChart.destroy();
//     }

//     // Initialize the new chart
//     this.myChart = new Chart(canvas, {
//       type: 'bar',
//       data: {
//         labels: ['Money in', 'Money spent'],
//         datasets: [{
//           data: [93259, 70017],
//           backgroundColor: ['#28a745', '#dc3545'],
//           borderRadius: 10
//         }]
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         plugins: {
//           legend: { display: false }
//         },
//         scales: {
//           y: {
//             beginAtZero: true,
//             ticks: { color: "#1f2d3d" }
//           },
//           x: {
//             ticks: { color: "#1f2d3d" }
//           }
//         }
//       }
//     });
//   }

//   ngOnDestroy() {
//     // Ensure chart is destroyed when component is destroyed
//     if (this.myChart) {
//       this.myChart.destroy();
//     }
//   }
// }

