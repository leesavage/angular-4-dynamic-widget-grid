import { TestBed, inject } from '@angular/core/testing';

import { WidgetService } from './widget.service';

describe('WidgetService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [WidgetService]
        });
    });

    it('should ...', inject([WidgetService], (service: WidgetService) => {
        expect(service).toBeTruthy();
    }));
});
