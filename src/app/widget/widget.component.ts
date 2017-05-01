import { Component, Input, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver } from '@angular/core';
import { WidgetData } from 'models/widget-data';
import { BarComponent } from './bar/bar.component';
import { DonutComponent } from './donut/donut.component';
import { PolarComponent } from './polar/polar.component';

@Component({
    selector: 'app-widget',
    entryComponents: [
        BarComponent,
        PolarComponent,
        DonutComponent
    ],
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.css']
})
export class WidgetComponent {
    currentComponent = null;
    @ViewChild('dynamicWidgetContainer', { read: ViewContainerRef }) dynamicWidgetContainer: ViewContainerRef;


    constructor(private resolver: ComponentFactoryResolver) { }

    // Widget Data contains two properties use as follows
    // component: Class for the component you want to create
    // inputs: An object with key/value pairs mapped to input name/input value
    @Input() set componentData(data: WidgetData) {
        if (!data) {
            return;
        }

        // Inputs need to be in the following format to be resolved properly
        let inputProviders = Object.keys(data.inputs).map((inputName) => { return { provide: inputName, useValue: data.inputs[inputName] }; });
        let resolvedInputs = ReflectiveInjector.resolve(inputProviders);

        // We create an injector out of the data we want to pass down and this components injector
        let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicWidgetContainer.parentInjector);

        // We create a factory out of the component we want to create
        let factory = this.resolver.resolveComponentFactory(data.component);

        // We create the component using the factory and the injector
        let component = factory.create(injector);

        // We insert the component into the dom container
        this.dynamicWidgetContainer.insert(component.hostView);

        // Destroy the previously created component
        if (this.currentComponent) {
            this.currentComponent.destroy();
        }

        this.currentComponent = component;
    }
}
