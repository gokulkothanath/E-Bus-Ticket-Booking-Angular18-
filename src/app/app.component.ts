import { Component, ElementRef, viewChild, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'Ticket-Booking';
  
  closeModal(){
    const modal=document.getElementById("exampleModal");
    if(modal !=null){
      modal.style.display='block'
    }
  }
  openModal(){
    const modal=document.getElementById("exampleModal");
    if(modal !=null){
      modal.style.display='none'
    }
  }
}
