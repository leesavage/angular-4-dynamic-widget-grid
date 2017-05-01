import { Widget } from './widget';
import { BarComponent } from 'app/widget/bar/bar.component';
import { WidgetData } from 'models/widget-data';

export class Bar extends Widget {
    public widgetData: WidgetData = new WidgetData(BarComponent);

    constructor() {
        super();
        this.config.sizex = 25;
        this.config.sizey = 14;
    }
}
