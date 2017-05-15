import {UserViewmodel} from './user';
export class UserPrivateViewmodel extends UserViewmodel {

  getName(){
    return 'PrivateName : ' + this.name;
  }
}
