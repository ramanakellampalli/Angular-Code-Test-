import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  private _url = 'data/data.json'
  constructor(private _http: Http) {}
  getData() {
    return this._http.get(this._url)
      .map((response: Response ) => response.json());
  }
}
