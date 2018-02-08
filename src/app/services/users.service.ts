import{Injectable}from'@angular/core';
import { User } from '../models/user';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService {
    private users: User[] = [
    new User("Michael","Jackson","https://www.thefamouspeople.com/profiles/images/michael-jackson-3.jpg"),
    new User('Scarlett',"Johansson", "http://www.myfilmviews.com/wp-content/uploads/2012/12/scarlett_johansson.jpg"),
    new User('Brad',"Pitt","http://cdn.glamour.es/uploads/images/thumbs/201238/las_50_caras_de_brad_848381170_667x1000.jpg")
  ];

  constructor() {

  }

  list(): User[] { //Observable<User[]>{
    return this.users;
    // Mock
    //return Observable.of(this.users);
  }

  create(name: string, lastName: string, image: string) {
    this.users.push(new User(name, lastName, image));
    return Observable.of({}); 
  }
}
