import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ButtonModule, InputComponent} from '../../../lunaria/src/lib/components';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ButtonModule, InputComponent, ReactiveFormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'demo';
    form: FormGroup = new FormGroup({
        'name': new FormControl('', Validators.required),
        'email': new FormControl('', [Validators.required, Validators.email]),
    })

    onSubmit() {
        console.log(this.form.value)
    }
}
