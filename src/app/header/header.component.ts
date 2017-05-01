import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { AddNewWidgetComponent } from './../add-new-widget/add-new-widget.component';
import { WidgetService } from 'services/widget.service';
import { WidgetFactory } from 'factories/widget-factory';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(
        public dialog: MdDialog,
        public widgetService: WidgetService
        ) { }

    openDialog() {
        const dialogRef = this.dialog.open(AddNewWidgetComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result != null) {
                try {
                    let widget = WidgetFactory.createWidget(result);
                    this.widgetService.setWidget(widget);
                } catch (err) {
                    alert(err.message + ' Please select from available widgets.');
                }
            }
        });
    }

}
