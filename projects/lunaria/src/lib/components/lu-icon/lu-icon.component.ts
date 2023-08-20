import { Component, Input } from '@angular/core';


@Component({
    selector: 'lu-icon',
    templateUrl: './lu-icon.component.html',
    styleUrls: ['./lu-icon.component.scss']
})
export class LuIconComponent {

    @Input('icon') icon: string;
    @Input('color') color: 'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink' | 'white';
    @Input('size') size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" = 'md';
    @Input('boxed') boxed: boolean = false;
    @Input('outlined') outlined: boolean = false;
    @Input('hovered') hovered: boolean = false;

}

