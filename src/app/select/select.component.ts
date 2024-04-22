import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  templateUrl: './select.component.html',
})
export class SelectComponent {
  @Input() options:Array<any> = []
  constructor() {
    console.log(this.options)
  }

}
