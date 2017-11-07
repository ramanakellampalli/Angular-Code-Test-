import {Component, OnInit} from '@angular/core';
import { AppService } from './app.service';
import * as _ from "lodash";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items = [];

  constructor(private _AppService: AppService) {}

  private listValue = [{}];
  private keyList:string[] = [];

  ngOnInit() {
    this._AppService.getData()
      .subscribe(resData => this.items = resData);
  }

  doSorting(k) {
    if (k === 'name') {
        this.listValue =  _.sortBy(this.listValue, o => o.name);
    }

    if (k === 'category') {
        this.listValue =  _.sortBy(this.listValue, o => o.category);
    }
      if (k === 'amount') {
        this.listValue =  _.sortBy(this.listValue, o => o.amount);
    }
}
}


