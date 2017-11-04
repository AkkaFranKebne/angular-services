import {Injectable} from "@angular/core";


@Injectable()

export class UsersService {
  activeUsers =['Max', 'Anna'];
  inactiveUsers = ['Chris', "Manu"];

  setToActive(id: number)
    { console.log(this.inactiveUsers[id]);
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id,1);
      //console.log(this.activeUsers);
      //console.log(this.inactiveUsers);
    };

  setToInactive(id: number)
  {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id,1);
    //console.log(this.activeUsers);
    //console.log(this.inactiveUsers);
  };


}
