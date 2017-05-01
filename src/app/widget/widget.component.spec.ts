import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BarComponent } from './bar/bar.component';
import { DonutComponent } from './donut/donut.component';
import { PolarComponent } from './polar/polar.component';
import { WidgetComponent } from './widget.component';
import { ChartsModule } from 'ng2-charts';

describe('WidgetComponent', () => {
    let component: WidgetComponent;
    let fixture: ComponentFixture<WidgetComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ChartsModule
            ],
            declarations: [
                WidgetComponent,
                PolarComponent,
                DonutComponent,
                BarComponent
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WidgetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
