import { Widget } from './widget';
import { DonutComponent } from 'app/widget/donut/donut.component';
import { WidgetData } from 'models/widget-data';

export class Donut extends Widget {
    public widgetData: WidgetData = new WidgetData(DonutComponent);

    constructor() {
        super();
        this.config.sizex = 17;
        this.config.sizey = 18;
    }
}
