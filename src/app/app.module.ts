

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FinanceComponent } from './components/finance/finance.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import{CommonModule } from '@angular/common';
import {DecimalPipe} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BnNgIdleService } from 'bn-ng-idle';
import { LogoutComponent } from './components/logout/logout.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FinanceComponent,
    LoginComponent,
    UserComponent,
    ThankyouComponent,
    WithdrawComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    
  ],
  providers: [DecimalPipe,BnNgIdleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
