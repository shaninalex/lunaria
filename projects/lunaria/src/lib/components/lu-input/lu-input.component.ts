import { Component, Input } from '@angular/core';

@Component({
    selector: 'lu-input',
    templateUrl: './lu-input.component.html',
    styleUrls: ['./lu-input.component.scss']
})
export class LuInputComponent {
    @Input('icon') icon: string | null;

    constructor() {
        this.icon = null
    }
}
