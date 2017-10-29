import { Component, OnInit } from '@angular/core';
import {AccountsService} from "./accounts.service";
import {LoggingService} from "./logging.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [AccountsService, LoggingService]
})
export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];


  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  constructor(private accountService: AccountsService) {}

  ngOnInit(){
      this.accounts = this.accountService.accounts;
  }

}
