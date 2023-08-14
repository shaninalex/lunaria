import { Component } from '@angular/core';

@Component({
  selector: 'button[lu-button],input[lu-button],div[lu-button],a[lu-button]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./lu-button.component.scss']
})
export class LuButtonComponent {

}
