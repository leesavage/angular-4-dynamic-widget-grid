import { Component } from '@angular/core';
import { MdDialog, MdDialogRef, MdIconModule } from '@angular/material';

@Component({
    selector: 'app-add-new-widget',
    templateUrl: './add-new-widget.component.html',
    styleUrls: ['./add-new-widget.component.css']
})
export class AddNewWidgetComponent {
    constructor(public dialogRef: MdDialogRef<AddNewWidgetComponent>) { }
}
