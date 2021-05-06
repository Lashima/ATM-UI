import { UserDetails } from '../../model/loginmodel';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import{AuthenticationService} from 'src/app/components/login/Authservice.component';
import { BnNgIdleService } from 'bn-ng-idle';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  error: boolean;
  username:string;
  password:string;
  
  constructor(
    public route: ActivatedRoute,
    public router: Router,
   public authService: AuthenticationService,
   private bnIdle: BnNgIdleService,

    ) { }

  ngOnInit(): void {
    this.bnIdle.startWatching(40).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        console.log('session expired');
        alert('your session expered ! do it again'); 
        this.router.navigate(['/home']);
      }
    });
  }
  
   login(){
   if(this.username && this.password)
   {
     const usr=new UserDetails();
     usr.username=this.username;
     usr.password=this.password;
 this.authService.Login(usr);
 this.router.navigate(['/user']);
   }
   return;
   
   }

 getuser(){
   return this.authService.userdata.username;
 }



}
