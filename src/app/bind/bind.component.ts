import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  constructor() {
    Observable.from([1, 2, 3, 4])
      .filter(e => e % 2 === 0) /*过滤*/
      .map(e => e * e) /*映射*/
      .subscribe( /*订阅*/
        e => console.log(e),
        err => console.error(err),
        () => console.log('结束啦')
      )
  }

  ngOnInit() {
  }

}
