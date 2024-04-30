import { Injectable } from '@angular/core';
import {environments} from "../../../environments/environments";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConfigDataService {

  constructor(private http: HttpClient) { }

  getAllConfig():Observable<any>{
    return this.http.get(environments.baseUrl+"/config");
  }
}
