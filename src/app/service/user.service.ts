import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Response } from '../interface/response.interface';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly ipaUrl: string = 'https://randomuser.me/api/';
  constructor(private http: HttpClient) {}

  // fetch users
  getUsers(size: number = 10): Observable<any> {
    return this.http
      .get<any>(`${this.ipaUrl}/?results=${size}`)
      .pipe(map((response: Response) => this.processResponse(response)));
  }

  // fetch one usuer using user UUID
  getUser(uuid: number = 1): Observable<any> {
    return this.http
      .get<any>(`${this.ipaUrl}/?uuid=${uuid}`)
      .pipe(map((response) => this.processResponse(response)));
  }

  private processResponse(response: Response): Response {
    return {
      info: { ...response.info },
      results: response.results.map(
        (user: any) =>
          <User>{
            uuid: user.login.uuid,
            firstname: user.name.first,
            lastname: user.name.last,
            email: user.email,
            username: user.login.username,
            gender: user.gender,
            address: `${user.location.street.number} ${user.location.street.city} ${user.location.street.country}`,
            dateOfBirth: user.dob.date,
            phone: user.phone,
            imageUrl: user.picture.medium,
            coordinate: {
              latitude: +user.location.coordinates.latitude,
              logitude: +user.location.coordinates.longitude,
            },
          }
      ),
    };
  }
}
