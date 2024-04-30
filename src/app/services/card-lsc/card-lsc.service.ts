import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environments} from "../../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class CardLscService {

  constructor(private http: HttpClient) { }

  getAllSigns():Observable<any>{
    return this.http.get(environments.baseUrl+"/sena");
  }
}
