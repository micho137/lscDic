import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [],
  templateUrl: './input-search.component.html',
  styles: ``
})
export class InputSearchComponent {
  @Output() signToSearch:EventEmitter<string> = new EventEmitter<string>()

  findSign(event:any){
    const data:string = String(event.target.value)
    this.signToSearch.emit(data);
  }

}
