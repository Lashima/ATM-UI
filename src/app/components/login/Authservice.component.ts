import { UserDetails } from '../../model/loginmodel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router";


export const AUTH_TOKEN_KEY='auth_token';
export const AUTH_USER_DATA='user_data';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

public authtoken:string | null=null;
public userdata:UserDetails |null=null;

  constructor(private http: HttpClient,
    public route: ActivatedRoute,
    public router: Router
    ) { }

  Checkstorage(){
   const authToken=sessionStorage.getItem(AUTH_TOKEN_KEY);
   const userdata=sessionStorage.getItem(AUTH_USER_DATA);
   this.authtoken=authToken;
   if(userdata){
       this.userdata=JSON.parse(userdata) as any;
   }
   else{
       this.userdata=null;
   }
  }


  Login(authData:UserDetails){
    sessionStorage.setItem(AUTH_TOKEN_KEY,authData.username+'Random_string');
    sessionStorage.setItem(AUTH_TOKEN_KEY,JSON.stringify(authData));
    this.Checkstorage();
    console.log(sessionStorage);

  }
isLoggedin(){
     return this.authtoken!==null;
 }


 logout(){
  if(!this.isLoggedin()) return;
  sessionStorage.clear();
  this.Checkstorage();
  this.router.navigate(['/home']);
}

 AutoLogout(expiratinDate:number){
setTimeout(()=>{
  this.logout();
},expiratinDate
);
 }



}