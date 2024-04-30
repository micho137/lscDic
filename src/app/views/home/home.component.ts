import {Component, Input, OnInit, Output} from '@angular/core';
import {CardLSCComponent} from "../../components/card-lsc/card-lsc.component";
import {SelectComponent} from "../../components/select/select.component";
import {PaginationComponent} from "../../components/pagination/pagination.component";
import {InputSearchComponent} from "../../components/input-search/input-search.component";
import { CardLscService } from "../../services/card-lsc/card-lsc.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardLSCComponent, SelectComponent, PaginationComponent, InputSearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  cards: Array<any> = [];
  paginatedCards: Array<any> = [];
  currentPage: number = 1;
  totalElements:number = 0;

  ngOnInit() {
    this.getAllSigns()
  }

  constructor(private cardLscService:CardLscService) {}

  getAllSigns(){
    this.cardLscService.getAllSigns().subscribe((data)=>{
      this.cards = data;
      this.totalElements = data.length;
      this.calculatePaginatedCards()
    })
  }

  calculatePaginatedCards() {
    const startIndex = (this.currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    this.paginatedCards = this.cards.slice(startIndex, endIndex);
  }

  changePage(page:number){
    this.currentPage = page;
    this.calculatePaginatedCards()
  }

  filterArraySigns(config:string){
    if(config==='ALL'){
      this.calculatePaginatedCards()
    }else{
      const newArray:any[] = this.cards.filter((row:any)=>
        row.config === config
      )
      this.paginatedCards = newArray;
    }
  }

  filterSignSearch(signName:string){
    const signNameLower = signName.toLowerCase(); 
    const arrayWord:any[] = this.cards.filter((row:any)=>
      row.name.toLowerCase() === signNameLower
    )
    this.paginatedCards = arrayWord
  }
}
