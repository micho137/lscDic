import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent{
  @Input() currentPage:number = 0;
  @Input() pageSize:number = 0;
  @Input() numberPages:number = 0;
  @Input() totalElements:number = 0;
  @Output() changePage :EventEmitter<number> = new EventEmitter<number>();

  onPageChange(page:number){
    this.changePage.emit(page);
  }

  getPagesArray():number[]{
    return Array.from({length:this.numberPages},(_,index)=>index+1);
  }

}
