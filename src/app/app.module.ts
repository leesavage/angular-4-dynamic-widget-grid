import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@angular/material';
import { NgGridModule } from 'angular2-grid';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { AddNewWidgetComponent } from './add-new-widget/add-new-widget.component';
import { GridComponent } from './grid/grid.component';
import { HeaderComponent } from './header/header.component';
import { WidgetComponent } from './widget/widget.component';
import { BarComponent } from './widget/bar/bar.component';
import { DonutComponent } from './widget/donut/donut.component';
import { PolarComponent } from './widget/polar/polar.component';
import { WidgetService } from 'services/widget.service';

@NgModule({
    declarations: [
        AppComponent,
        AddNewWidgetComponent,
        GridComponent,
        HeaderComponent,
        WidgetComponent,
        BarComponent,
        DonutComponent,
        PolarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        NgGridModule,
        NoopAnimationsModule,
        ChartsModule
    ],
    exports: [
        MaterialModule
    ],
    entryComponents: [
        AddNewWidgetComponent
    ],
    providers: [
        WidgetService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
