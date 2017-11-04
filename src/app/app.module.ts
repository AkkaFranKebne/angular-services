import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import {AccountsService} from "./accounts.service";
import {LoggingService} from "./logging.service";
import { ActiveUsersComponent } from './active-users/active-users.component';
import { NonactiveUsersComponent } from './nonactive-users/nonactive-users.component';
import {UsersService} from "./users.service";

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    NonactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccountsService, LoggingService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
