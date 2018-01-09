import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-comtent',
  templateUrl: './comtent.component.html',
  styleUrls: ['./comtent.component.css']
})
export class ComtentComponent implements OnInit {

  title = '';
  desc = '';

  constructor(public router: Router) {
    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        if (event.url == '/dashboard') {
          this.title = '首页';
          this.desc = '';
        }else if (event.url.startsWith('/stock') ) {
          this.title = '这是股票信息管理';
          this.desc = '股票信息增删改查';
        }else if (event.url.startsWith('/chart') ) {
          this.title = '图表信息';
          this.desc = '图表管理';
        }
      });
  }

  ngOnInit() {
  }

}
