import {UserViewmodel} from './user';
export class UserPublicViewmodel extends UserViewmodel {

  getName(){
    return 'PublicName : ' + this.name;
  }
}
