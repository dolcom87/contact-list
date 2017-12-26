import {Http} from "@angular/http";
import {Injectable} from '@angular/core';

import "rxjs/add/operator/map";

@Injectable()
export class PersonsProvider {

  host: string = "https://randomuser.me/api/";

  constructor(public http: Http) {

  }

  getPerson(cnt: number = 1) {
    // count - количество запрашиваемых персон (1 по умолчанию)
    return this.http.get(this.host + '?results=' + cnt).map(data => data.json()).map(res => {return res['results']});
  }

}
