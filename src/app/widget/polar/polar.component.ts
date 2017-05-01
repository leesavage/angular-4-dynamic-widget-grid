import { Component } from '@angular/core';

@Component({
    selector: 'app-polar',
    templateUrl: './polar.component.html',
    styleUrls: ['./polar.component.css']
})
export class PolarComponent {

    // PolarArea
    public polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
    public polarAreaChartData = [300, 500, 100, 40, 120];
    public polarAreaLegend = true;

    public polarAreaChartType = 'polarArea';

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}
