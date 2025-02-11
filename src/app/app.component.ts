import { NgIf } from '@angular/common';
import { Component, ElementRef, viewChild, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  signUp:boolean=false
  title = 'Ticket-Booking';
  modal=viewChild<ElementRef<HTMLDivElement>>('myModal')
   signingUp(){
    this.signUp=!this.signUp
   }
  openModal(){
    const modalElem=this.modal()?.nativeElement
    if(modalElem){
      modalElem.style.display='block'
    }
  }
  closeModal(){
    const modalElem=this.modal()?.nativeElement
    if(modalElem){
      modalElem.style.display='none'
    }
  }
}
