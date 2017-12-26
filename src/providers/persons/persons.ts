import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonsProvider {

  host: string = "https://randomuser.me/api/";

  constructor(public http: HttpClient) {}

  getPerson() {
    return this.http.get(this.host).map(data => data.json());
  }

}
