import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {ButtonComponent, ButtonModule} from '../lib/components/button';

const meta: Meta<ButtonComponent> = {
    title: 'Lunaria/Button',
    component: ButtonComponent,
    decorators: [
        moduleMetadata({
            imports: [ButtonModule],
        }),
    ],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
    render: () => ({
        template: `
            <button lu-button size="mini">Mini</button>
            <button lu-button size="tiny">Tiny</button>
            <button lu-button size="small">Small</button>
            <button lu-button>Default</button>
            <button lu-button size="large">Large</button>
            <button lu-button size="big">Big</button>
            <button lu-button size="huge">Huge</button>
            <button lu-button size="massive">Massive</button>
        `,
    }),
};

export const Variants: Story = {
    render: () => ({
        template: `
            <button lu-button color="red">Red</button>
            <button lu-button color="orange">Orange</button>
            <button lu-button color="yellow">Yellow</button>
            <button lu-button color="olive">Olive</button>
            <button lu-button color="green">Green</button>
            <button lu-button color="teal">Teal</button>
            <button lu-button color="blue">Blue</button>
            <button lu-button color="violet">Violet</button>
            <button lu-button color="purple">Purple</button>
            <button lu-button color="pink">Pink</button>
            <button lu-button color="brown">Brown</button>
            <button lu-button color="grey">Grey</button>
            <button lu-button color="black">Black</button>
        `,
    }),
};

export const Outline: Story = {
    render: () => ({
        template: `
            <button lu-button [outline]="true" color="red">Red</button>
            <button lu-button [outline]="true" color="orange">Orange</button>
            <button lu-button [outline]="true" color="yellow">Yellow</button>
            <button lu-button [outline]="true" color="olive">Olive</button>
            <button lu-button [outline]="true" color="green">Green</button>
            <button lu-button [outline]="true" color="teal">Teal</button>
            <button lu-button [outline]="true" color="blue">Blue</button>
            <button lu-button [outline]="true" color="violet">Violet</button>
            <button lu-button [outline]="true" color="purple">Purple</button>
            <button lu-button [outline]="true" color="pink">Pink</button>
            <button lu-button [outline]="true" color="brown">Brown</button>
            <button lu-button [outline]="true" color="grey">Grey</button>
            <button lu-button [outline]="true" color="black">Black</button>
        `,
    }),
};
