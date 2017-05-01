import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Widget } from './../models/widget';

@Injectable()
export class WidgetService {
    private subject: Subject<Widget> = new Subject<Widget>();


    constructor() { }

    public setWidget(widget: Widget): void {
        this.subject.next(widget);
    }

    public getWidget(): Observable<Widget> {
        return this.subject.asObservable();
    }
}
