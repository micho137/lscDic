import { Component } from '@angular/core';
import {CardLSCComponent} from "../card-lsc/card-lsc.component";
import axios, {AxiosResponse} from "axios";
import {environments} from "../../environments/environments";
import {SelectComponent} from "../select/select.component";
import {PaginationComponent} from "../pagination/pagination.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardLSCComponent, SelectComponent, PaginationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards: Array<any> = [];

  totalPages:number = 0;
  currentPage:number = 1;
  pageSize:number = 0;
  totalElements:number = 0;

  constructor() {
    this.getSigns()
  }

  async changePage(page: number): Promise<void> {
    this.currentPage = page;
    await this.getSigns();
  }
  async getSigns(){
    try {
      const response:AxiosResponse = await axios.get(environments.baseUrl+"/sena",{
        params: {
          page: this.currentPage-1,
          size: 7
        }
      });
      this.cards = response.data.content;

      this.currentPage = response.data.number;
      this.pageSize = response.data.size;
      this.totalElements = response.data.totalElements;
      this.totalPages = response.data.totalPages;

    }catch(error){
      console.log(error);
    }
  }
}
