import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from '@angular/material';
import { NgGridModule } from 'angular2-grid';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './../app.component';
import { HeaderComponent } from './../header/header.component';
import { GridComponent } from './../grid/grid.component';
import { WidgetComponent } from './../widget/widget.component';
import { BarComponent } from './../widget/bar/bar.component';
import { DonutComponent } from './../widget/donut/donut.component';
import { PolarComponent } from './../widget/polar/polar.component';
import { WidgetService } from 'services/widget.service';

describe('GridComponent', () => {
    let component: GridComponent;
    let fixture: ComponentFixture<GridComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MaterialModule.forRoot(),
                NgGridModule,
                ChartsModule
            ],
            declarations: [
                AppComponent,
                HeaderComponent,
                GridComponent,
                WidgetComponent,
                BarComponent,
                DonutComponent,
                PolarComponent
            ],
            providers: [
                WidgetService
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
