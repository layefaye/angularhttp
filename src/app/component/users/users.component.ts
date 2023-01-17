import { Component } from '@angular/core';
import { User } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: any[] = [];
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getUsers(15).subscribe((results: any) => {
      console.log(results);
    });

    this.userService.getUser(12).subscribe((result: any) => {
      console.log(result);
    });
    // this.getUsers(12);
  }

  // getUsers(size: number): void {
  //   this.userService.getUsers(15).subscribe((results: any) => {
  //     console.log(results);
  //     this.users = <User[]>results;
  //   });
  // }
}
