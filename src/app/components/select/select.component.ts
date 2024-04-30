import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ConfigDataService} from "../../services/configData/config-data.service";

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  templateUrl: './select.component.html',
})
export class SelectComponent implements OnInit {
  options: any;
  @Output() selectValue:EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this.getConfig()
  }

  constructor(private configDataService: ConfigDataService) {}

  getConfig(){
    this.configDataService.getAllConfig().subscribe((data)=>{
      this.options = data;
    })
  }

  sendSelectValue(event:any){
    const data:string = String(event.target.value)
    this.selectValue.emit(data);
  }

}
