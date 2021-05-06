import { AuthenticationService } from './../login//Authservice.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  constructor(public authservice:AuthenticationService) { }

  ngOnInit(): void {
  }
display(){
  if(this.authservice.isLoggedin){
    return 'Logout';
  }
  return 'Login';
}


}
