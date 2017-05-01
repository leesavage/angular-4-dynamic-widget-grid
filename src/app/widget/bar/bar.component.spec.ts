import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartsModule } from 'ng2-charts';
import { BarComponent } from './bar.component';

describe('BarComponent', () => {
    let component: BarComponent;
    let fixture: ComponentFixture<BarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
            ChartsModule
            ],
            declarations: [ BarComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
