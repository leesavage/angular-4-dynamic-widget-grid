import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { NgGridModule } from 'angular2-grid';
import { ChartsModule } from 'ng2-charts';
import { HeaderComponent } from './header.component';
import { WidgetService } from 'services/widget.service';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
            MaterialModule.forRoot(),
            NgGridModule,
            ChartsModule
            ],
            declarations: [ HeaderComponent ],
            providers: [
            WidgetService
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
