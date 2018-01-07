import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  private stocks: Array<Stock>;

  constructor(public router: Router) {
  }

  ngOnInit() {
    this.stocks = [
      new Stock(1, '第一', 1.36, 1, '第一个内容', ['IT', 'web']),
      new Stock(2, '第二', 2.36, 2, '第一个内容', ['金融']),
      new Stock(3, '第三', 3.36, 3, '第一个内容', ['互联网']),
      new Stock(4, '第四', 4.36, 4, '第一个内容', ['IT']),
      new Stock(5, '第五', 5.36, 5, '第一个内容', ['web']),
    ];
  }

  create() {
    this.router.navigateByUrl('/stock/0');
  }

  update(stock: Stock) {
    console.log(stock);
    this.router.navigateByUrl('/stock/' + stock.id);
  }
}
export class Stock {
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }

}
