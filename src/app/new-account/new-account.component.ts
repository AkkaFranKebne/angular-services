import { Component } from '@angular/core';
import {LoggingService} from "../logging.service";
import {AccountsService} from "../accounts.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //constructor: [LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService,
              private accountService: AccountsService
  ) {
    this.accountService.statusUpdate.subscribe(
      (status: string) => alert("New status: "+ status)
    )
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    //this.loggingService.logStatusChange(accountStatus);
  }
}
