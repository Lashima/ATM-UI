import { LogoutComponent } from './components/logout/logout.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import{FinanceComponent} from './components/finance/finance.component'
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithdrawComponent } from './components/withdraw/withdraw.component';


const routes: Routes = [{path:'',
redirectTo:'home',pathMatch:'full'},
{
 path: 'home', component:HomeComponent},
 {path: 'finance', component:FinanceComponent}, 
 {path: 'login', component:LoginComponent},
 {path: 'logout', component:LogoutComponent},
 {path: 'user', component:UserComponent},
 {path: 'thankyou', component:ThankyouComponent},
 {path: 'withdraw', component:WithdrawComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
