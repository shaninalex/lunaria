import {AfterViewInit, Component, forwardRef, Injector, Input, Optional, Self} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl, NgModel} from '@angular/forms';

@Component({
    selector: 'lu-form-input',
    imports: [],
    template: `
        <div class="field">
            <div class="lu-input">
                <input
                    [class.invalid]="hasError"
                    [class.touched]="isTouched"
                    [class.dirty]="isDirty"
                    [value]="value"
                    [disabled]="disabled"
                    [type]="type"
                    [placeholder]="placeholder"
                    (input)="onInput($event)"
                    (blur)="onTouched()"
                />
            </div>
        </div>
    `,
    styleUrl: './input.component.css',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true
        }
    ]
})
export class InputComponent implements ControlValueAccessor, AfterViewInit {
    @Input() type: string = 'text';
    @Input() placeholder: string = '';

    value: string = '';
    disabled = false;
    private ngControl: NgControl | null = null;
    constructor(private injector: Injector) {}

    ngAfterViewInit(): void {
        this.ngControl = this.injector.get(NgControl, null, { self: true });
    }

    onChange: (value: string) => void = () => {};
    onTouched: () => void = () => {};
    writeValue(value: string): void {
        this.value = value || '';
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    onInput(event: Event): void {
        const input = event.target as HTMLInputElement;
        this.value = input.value;
        this.onChange(this.value);
    }

    // State helpers
    get hasError(): boolean {
        return !!this.ngControl?.control?.invalid && !!this.ngControl?.control?.touched;
    }

    get isTouched(): boolean {
        return !!this.ngControl?.control?.touched;
    }

    get isDirty(): boolean {
        return !!this.ngControl?.control?.dirty;
    }

    get errors(): any {
        return this.ngControl?.control?.errors;
    }
}
