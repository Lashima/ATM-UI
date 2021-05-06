import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {
  elements=ELEMENTS;
  }

 interface Element{
  file:string;
  amount:number;
  userlist:string[];
}

const ELEMENTS: Element[] = [
  { 
    file:'Shared(12340)',
     amount: 900.038,
     userlist: ['/assets/images/profilee2.png'] 
    },
  { 
  
     file:'Personal(1267)',
     amount: 4000, 
     userlist: ['/assets/images/profilee.png'] 
    },
  { 
   
     file: 'Shared(34560)', 
     amount: 789.60, 
     userlist: ['/assets/images/profilee3.png']},
];