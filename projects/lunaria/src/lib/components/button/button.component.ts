import {Component, Input} from '@angular/core';

type BtnSizeT = 'mini' | 'tiny' | 'small' | 'default' | 'large' | 'big' | 'huge' | 'massive';
type BtnColorT = 'red' | 'orange' | 'yellow' | 'olive' | 'green' | 'teal' | 'blue' | 'violet' | 'purple' | 'pink' | 'brown' | 'grey' | 'black';

/**
 * Reusable Lunaria Button
 *
 * @component
 */
@Component({
    selector: '[lu-button]',
    standalone: false,
    template: `
        <ng-content />`,
    host: {
        class: 'ui button',

        // Sizes
        '[class.mini]': `size === 'mini'`,
        '[class.tiny]': `size === 'tiny'`,
        '[class.small]': `size === 'small'`,
        '[class.large]': `size === 'large'`,
        '[class.big]': `size === 'big'`,
        '[class.huge]': `size === 'huge'`,
        '[class.massive]': `size === 'massive'`,

        // Colors
        '[class.red]': `color === 'red'`,
        '[class.orange]': `color === 'orange'`,
        '[class.yellow]': `color === 'yellow'`,
        '[class.olive]': `color === 'olive'`,
        '[class.green]': `color === 'green'`,
        '[class.teal]': `color === 'teal'`,
        '[class.blue]': `color === 'blue'`,
        '[class.violet]': `color === 'violet'`,
        '[class.purple]': `color === 'purple'`,
        '[class.pink]': `color === 'pink'`,
        '[class.brown]': `color === 'brown'`,
        // '[class.grey]': `color === 'grey'`,
        '[class.black]': `color === 'black'`,

        // Outline
        '[class.outline]': `outline === true`,
    },
    styleUrl: 'button.component.scss'
})
export class ButtonComponent {

    /**
     * Button size.
     * - Affects font size and padding via `em`.
     * - Available values: `mini`, `tiny`, `small`, `default`, `large`, etc.
     */
    @Input() size: BtnSizeT = 'default';

    /**
     * Button colors. I do not use bootstrap like 'success', 'waring', 'default' system
     * because of amount of colors we have
     * */
    @Input() color: BtnColorT = 'grey';

    /**
     * Outline button with transparent background and border.
     * */
    @Input() outline: boolean = false;
}
