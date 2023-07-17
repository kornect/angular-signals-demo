import {Component, inject} from '@angular/core';
import {SignalsWithRxjsService, User} from "./signals-with-rxjs.service";

@Component({
  selector: 'app-signals-with-rxjs',
  templateUrl: './signals-with-rxjs.component.html',
  styleUrls: ['./signals-with-rxjs.component.scss']
})
export class SignalsWithRxjsComponent {
  private service = inject(SignalsWithRxjsService);

  users = this.service.users;
  selectedUser = this.service.selectedUser;
  posts = this.service.posts;

  selectUser(user: User) {
    this.service.selectUser(user.id);
  }
}
