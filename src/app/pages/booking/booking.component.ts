import { Component, inject, OnInit } from '@angular/core';
import { CatalogueService } from '../../core/services/catalogue.service';
import { ActivatedRoute } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [NgFor,NgClass,NgIf],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {
  id:number=0
 selectedSeats:Set<number>=new Set()
dataService=inject(CatalogueService)
activeRoute=inject(ActivatedRoute)
busData:any
seatSelect(i:number){
  if(this.selectedSeats.has(i)){
    this.selectedSeats.delete(i)
  }else{
    this.selectedSeats.add(i);
  }
}
ngOnInit(): void {
this.activeRoute.params.subscribe((res)=>{this.id=res['id']})
// this.dataService.getBusSchedule(this.id).subscribe((res)=>{
//   this.busData=res
// })
this.busData=[0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0]
}
}
