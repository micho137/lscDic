import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges{
  limit:number = 10;
  @Input() currentPage:number = 0;
  @Input() totalElements:number = 0;
  @Input() paginatedCards:any = null;
  @Output() changePage : EventEmitter<number> = new EventEmitter<number>();

  pages:number[] = []

  ngOnChanges(changes:SimpleChanges) {
    if(changes['totalElements'] && this.totalElements!==0) {
      this.pagesCount()
    }
    if(changes['paginatedCards'] && this.paginatedCards!== null){
      if (this.paginatedCards.length < 10) {
        this.pages=[1]
        //this.pages = [...this.pages];
      } else {
        this.pagesCount();
      }
    }
  }

  pagesCount(){
    const pageMath : number = Math.ceil(this.totalElements / this.limit);
    this.pages = this.range(1,pageMath)
  }

  range(start:number, end:number):number[]{
    return [...Array(end).keys()].map((el)=>el+start);
  }

  onPageChange(page:number){
    this.changePage.emit(page);
  }
}
