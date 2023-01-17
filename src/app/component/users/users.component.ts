import { Component } from '@angular/core';
import { Response } from 'src/app/interface/response.interface';
import { User } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  response: Response;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getUsers(15).subscribe((results: any) => {
      console.log(results);
      this.response = results;
    });
  }
}
