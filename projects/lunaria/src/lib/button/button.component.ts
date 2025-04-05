import {Component} from '@angular/core';

@Component({
    selector: '[lu-button]',
    standalone: false,
    template: `
        <ng-content></ng-content>`,
    host: {
        class: 'lu-btn',
    }
})
export class ButtonComponent {

}
