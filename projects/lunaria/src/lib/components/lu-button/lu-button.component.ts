import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'button[lu-button],input[lu-button],div[lu-button],a[lu-button]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./lu-button.component.scss']
})
export class LuButtonComponent {

    @Input("appearance") appearance: "solid" | "outline" = "solid";
    @Input("theme") theme: "rounded" | "pilled" = "rounded";
    @Input("color") color: "regular" | "warning" | "success" | "secondary" = "regular" 

    @HostBinding("class")
    get classes(): string {
        return `
        ${this.__rounded_classes()}
        ${this.__appearance_classes()}
        ${this.__appearance_colors()}
        `
    }

    private __appearance_classes(): string {
        return this.appearance === "solid"? "": "lu-btn-outline"
    }

    private __rounded_classes(): string {
        let css_cls: string = "regular";
        switch (this.theme) {
            case "rounded":
                css_cls = "";
                break;
            case "pilled":
                css_cls = "lu-btn-pilled"
                break;
        }
        return css_cls;
    }

    private __appearance_colors(): string {
        let css_cls: string = "regular";
        switch (this.color) {
            case "regular":
                css_cls = "lu-btn-regular";
                break;
            case "warning":
                css_cls = "lu-btn-warning"
                break;
            case "success":
                css_cls = "lu-btn-success"
                break;
            case "secondary":
                css_cls = "lu-btn-secondary"
                break;
        }

        return css_cls;
    }
}
