import { Component } from '@angular/core';
import { NgGrid, NgGridItem, NgGridConfig, NgGridItemConfig, NgGridItemEvent } from 'angular2-grid';
import { WidgetService } from 'services/widget.service';
import { Widget } from 'models/widget';
import { GridHelper } from 'helpers/grid-helper';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
    private widgets: Array<Widget> = [];
    private gridConfig: NgGridConfig;

    constructor(private widgetService: WidgetService) {
        this.gridConfig = GridHelper.gridConfig();
        this.widgetService.getWidget().subscribe((widget) => {
            this.widgets.push(widget);
        });
    }

    public removeWidget(index: number): void {
        if (this.widgets[index]) {
            this.widgets.splice(index, 1);
        }
    }

    public updateItem(index: number, event: NgGridItemEvent): void {
        // @todo
    }

    public onDrag(index: number, event: NgGridItemEvent): void {
        // @todo
    }

    public onResize(index: number, event: NgGridItemEvent): void {
        // @todo
    }
}
