import { Component } from '@angular/core';

@Component({
    selector: 'app-donut',
    templateUrl: './donut.component.html',
    styleUrls: ['./donut.component.css']
})
export class DonutComponent {
    // Doughnut
    public donutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public donutChartData: number[] = [350, 450, 100];
    public donutChartType = 'doughnut';

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}
