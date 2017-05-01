import { Widget } from './widget';
import { PolarComponent } from 'app/widget/polar/polar.component';
import { WidgetData } from 'models/widget-data';

export class Polar extends Widget {
    public widgetData: WidgetData = new WidgetData(PolarComponent);

    constructor() {
        super();
        this.config.sizex = 20;
        this.config.sizey = 21;
    }
}
