import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getUsers(15).subscribe((results: any) => {
      console.log(results);
    });

    this.userService.getUser(12).subscribe((result: any) => {
      console.log(result);
    });
  }
}
