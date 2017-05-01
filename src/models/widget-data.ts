import { Component } from '@angular/core';

export class WidgetData {
    public component: any;
    public inputs: any;

    constructor(component: any, inputs?: any) {
        this.component = component;
        if (inputs == null) {
            this.inputs = { style: 'Standard' };
        } else {
            this.inputs = inputs;
        }
    }
}
