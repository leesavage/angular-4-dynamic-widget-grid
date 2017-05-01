import { WidgetFactory } from './widget-factory';
import { Bar } from './../models/bar';
import { Donut } from './../models/donut';
import { Polar } from './../models/polar';
import { BarComponent } from './../app/widget/bar/bar.component';
import { DonutComponent } from './../app/widget/donut/donut.component';
import { PolarComponent } from './../app/widget/polar/polar.component';

describe('Widget Factory', () => {

    it('Returns Bar widget with correct default size', () => {
        let barWidget = WidgetFactory.createWidget('Bar');
        expect(barWidget).toEqual(jasmine.any(Bar));
        expect(barWidget.config.sizex).toEqual(25);
        expect(barWidget.config.sizey).toEqual(14);
    });

    it('Returns Donut widget with correct default size', () => {
        let donutWidget = WidgetFactory.createWidget('Donut');
        expect(donutWidget).toEqual(jasmine.any(Donut));
        expect(donutWidget.config.sizex).toEqual(17);
        expect(donutWidget.config.sizey).toEqual(18);
    });

    it('Returns Polar widget with correct default size', () => {
        let polarWidget = WidgetFactory.createWidget('Polar');
        expect(polarWidget).toEqual(jasmine.any(Polar));
        expect(polarWidget.config.sizex).toEqual(20);
        expect(polarWidget.config.sizey).toEqual(21);
    });

    it('Throws exception for invalid type', () => {
        let invalidType = false;
        try {
            let invalidWidget = WidgetFactory.createWidget('non-existent');
        } catch (err) {
            if (err.message === 'Widget non-existent does not exist.') {
                invalidType = true;
            }
        }
        expect(invalidType).toEqual(true);
    });

});
