import { Pipe, PipeTransform } from '@angular/core';
import { People } from './user';

@Pipe({
  name: 'userFilters'
})
export class UserFiltersPipe implements PipeTransform {

  transform(users: People[], searchName: string):People[] {
    if(!users || !searchName){
      return users;
    }
    var pp =users.filter(user =>
      user.name.toLowerCase().match(searchName.toLowerCase()));
      console.log(pp);
    return pp;
    
  }

}
