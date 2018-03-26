import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user: { username: string,
           password: string,
  };

  constructor() {
  }

  ngOnInit() {
    this.user = {username: 'Semlinker' , password: '123345' };
  }

}
