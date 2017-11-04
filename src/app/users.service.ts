import {Injectable} from "@angular/core";


@Injectable()

export class UsersService {
  activeUsers =['Max', 'Anna'];
  inactiveUsers = ['Chris', "Manu"];
  changeToActive = 0;
  changeToInactive = 0;

  setToActive(id: number)
    {
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id,1);
      this.changeToActive ++;
      console.log( "changes to Active: " + this.changeToActive );
      //console.log(this.activeUsers);
      //console.log(this.inactiveUsers);
    };

  setToInactive(id: number)
  {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id,1);
    this.changeToInactive ++;
    console.log( "changes to Inactive: " +  this.changeToInactive );
    //console.log(this.activeUsers);
    //console.log(this.inactiveUsers);
  };


}
