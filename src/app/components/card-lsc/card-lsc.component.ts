import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-lsc',
  standalone: true,
  imports: [],
  templateUrl: './card-lsc.component.html',
})
export class CardLSCComponent {
  @Input() cardData = {
    name:'',
    url:'',
    config:'',
    duration:0,
    type:''
  }
}
