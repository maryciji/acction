import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  searchInput: FormControl = new FormControl();
  data: Date = new Date();
  num: number = 6;
  
  constructor() {
    this.searchInput.valueChanges
      .debounceTime(500)
      .subscribe(stockCode => this.getStockInfo(stockCode));
  }

  ngOnInit() {
  }

  getStockInfo(value: String) {
    console.log(value);
  }

}
