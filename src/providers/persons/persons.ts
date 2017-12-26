import {Http} from "@angular/http";
import {Injectable} from '@angular/core';

import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

export class Person {
  name: string;
  last: string;
  email: string;
  phone: string;
  username: string;
  thumbnail: string;
  large: string;

  constructor(public uname: string,
              public ulast: string,
              public uemail: string,
              public uphone: string,
              public uusername: string,
              public uthumbnail: string,
              public ularge: string) {

    this.name = uname;
    this.last = ulast;
    this.email = uemail;
    this.phone = uphone;
    this.username = uusername;
    this.thumbnail = uthumbnail;
    this.large = ularge;
  }
}

@Injectable()
export class PersonsProvider {

  host: string = "https://randomuser.me/api/";

  constructor(public http: Http) {

  }

  getPersons(cnt: number = 1): Observable<[Person]> {
    // cnt - количество запрашиваемых персон (по умолчанию 1)
    return this.http.get(this.host + '?results=' + cnt).map(data => data.json()).map(
      res => {
        return res.results.map(el => new Person(
          el.name.first,
          el.name.last,
          el.email,
          el.phone,
          el.login.username,
          el.picture.thumbnail,
          el.picture.large));
      }
    );
  }

}
