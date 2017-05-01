import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartsModule } from 'ng2-charts';
import { DonutComponent } from './donut.component';

describe('DonutComponent', () => {
    let component: DonutComponent;
    let fixture: ComponentFixture<DonutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
            ChartsModule
            ],
            declarations: [ DonutComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DonutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
