
import { AuthenticationService } from './../login/Authservice.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authservice:AuthenticationService,
    public route: ActivatedRoute,
    public router: Router,
   ) { }

  ngOnInit(): void {
   
  }
logout(){
  this.authservice.logout();
}
backtouser(){
  this.router.navigate(['/user']);
}
}
