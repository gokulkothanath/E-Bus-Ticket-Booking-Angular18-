import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
 apiUrl:string=environment.apiUrl
 http=inject(HttpClient)
  constructor() { }
  getLocations():Observable<any>{
    return this.http.get(this.apiUrl+'GetBusLocations')
  }
  searchBus(from:number,to:number,date:string):Observable<any>{
    return this.http.get(this.apiUrl+`searchBus?fromLocation=${from}&toLocation=${to}&travelDate=${date}`)
  }
  getBusSchedule(id:number){
    return this.http.get(this.apiUrl+`getBusSchedule?id=${id}`)
  }
}
