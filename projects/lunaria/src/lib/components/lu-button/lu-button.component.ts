import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'button[lu-button],input[lu-button],div[lu-button],a[lu-button]',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./lu-button.component.scss'],
    host: {
        class: 'lu-btn',
        
        // theme
        '[class.lu-btn-pilled]': `theme === 'pilled'`,

        // color
        '[class.lu-btn-color-primary]': `color === 'primary'`,
        '[class.lu-btn-color-warning]': `color === 'warning'`,
        '[class.lu-btn-color-success]': `color === 'success'`,
        '[class.lu-btn-color-secondary]': `color === 'secondary'`,
        '[class.lu-btn-color-error]': `color === 'error'`,

        // appearance
        '[class.lu-btn-outline]': `appearance === 'outline'`,
        // '[class.lu-btn-rounded]': `appearance === 'rounded'`,

        '[class.lu-btn-size-sm]': `size === 'small'`,
        '[class.lu-btn-size-lg]': `size === 'large'`,

    }
})
export class LuButtonComponent {

    @Input("size") size: "small" | "normal" | "large" = "normal";
    @Input("appearance") appearance: "rounded" | "outline" = "rounded";
    @Input("theme") theme: "regular" | "pilled" = "regular";
    @Input("color") color: "primary" | "warning" | "success" | "secondary" | "error" = "primary"

    // TODO: icons
    // TODO: spinner/loader

}
