import { Component, inject,OnInit } from '@angular/core';
import { CatalogueService } from '../../core/services/catalogue.service';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import {FormBuilder, Validators,FormGroup,ReactiveFormsModule} from '@angular/forms'
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [AsyncPipe,NgFor,NgIf,ReactiveFormsModule,DatePipe,RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  location$:Observable<any[]>=new Observable<any>
  fb=inject(FormBuilder)
   searchForm:FormGroup=this.fb.group({
    from:[Number,Validators.required],
    to:[Number,Validators.required],
    date:['',Validators.required] 
   })
   today=new Date()
   currDate=new Date().toISOString().split('T')[0]
   limitDate=new Date(this.today.getFullYear(), this.today.getMonth() + 1, this.today.getDate()).toISOString().split('T')[0];
   flag:Boolean=false
   busList:any
   get form(){
    return this.searchForm.controls
   }
   get err(){
    return this.form['from'].value==this.form['to'].value
   }
 dataService=inject(CatalogueService)
 onSubmit(){
  this.flag=true
  // console.log(this.form['from'].value);
  if(!this.err){  
  //  this.dataService.searchBus(this.form['from'].value,this.form['to'].value,this.form['date'].value).subscribe((res)=>{
  //   this.busList=res
  //  })
  this.busList=[
    {
      "availableSeats": 20,
      "totalSeats": 50,
      "price": 620,
      "arrivalTime": "2025-01-27T11:05:46.013Z",
      "scheduleId": 7,
      "departureTime": "2025-01-27T12:05:46.013Z",
      "busName": "A-One",
      "busVehicleNo": "KL48AA1269",
      "fromLocationName": "Banglore",
      "toLocationName": "Pune",
      "vendorName": "A-one",
      "scheduleDate": "2025-01-27T11:05:46.013Z",
      "vendorId": 0
    }
  ]
  }
 }
 ngOnInit(): void {
   this.location$=this.dataService.getLocations()
 }
}
