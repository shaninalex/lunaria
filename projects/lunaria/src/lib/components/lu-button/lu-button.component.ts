import { Component, Input } from '@angular/core';

@Component({
    selector: 'button[lu-button],input[lu-button],div[lu-button],a[lu-button]',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./lu-button.component.scss'],
    host: {
        class: 'lu-btn',

        // color
        '[class.lu-btn-white]': `color === 'white'`,
        '[class.lu-btn-primary]': `color === 'primary'`,
        '[class.lu-btn-warning]': `color === 'warning'`,
        '[class.lu-btn-danger]': `color === 'danger'`,
        '[class.lu-btn-success]': `color === 'success'`,

        // color outline
        '[class.lu-btn-outline-white]': `color === 'white' && outline === true`,
        '[class.lu-btn-outline-primary]': `color === 'primary' && outline === true`,
        '[class.lu-btn-outline-warning]': `color === 'warning' && outline === true`,
        '[class.lu-btn-outline-danger]': `color === 'danger' && outline === true`,
        '[class.lu-btn-outline-success]': `color === 'success' && outline === true`,

        // sizes
        '[class.lu-btn-sm]': `size === 'small'`,
        '[class.lu-btn-lg]': `size === 'large'`,
    }
})
export class LuButtonComponent {

    @Input("size") size: "small" | "normal" | "large";
    @Input("outline") outline: boolean;
    @Input("color") color: "white" | "primary" | "warning" | "danger" | "success";

}
