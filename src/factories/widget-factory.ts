import { Widget } from './../models/widget';
import { Bar } from './../models/bar';
import { Donut } from './../models/donut';
import { Polar } from './../models/polar';

export class WidgetFactory {
    public static createWidget(className: string): Widget {
        if (className === 'Bar') {
            return new Bar();
        } else if (className === 'Donut') {
            return new Donut();
        } else if (className === 'Polar') {
            return new Polar();
        }

        throw new Error('Widget ' + className + ' does not exist.');
    }
}
