import { Component, OnInit } from '@angular/core';
import {Service1Service} from '../services/service1.service';

@Component({
  selector: 'app-comp10',
  templateUrl: './comp10.component.html',
  styleUrls: ['./comp10.component.scss']
})
export class Comp10Component implements OnInit {

  prop1: Service1Service;
  prop2: any;

  constructor(param1: Service1Service) {
    this.prop1 = param1;
  }

  ngOnInit(): void {

    this.prop1.prop1().subscribe(value => {
      console.log(value);
      this.prop2 = value.apparel.men;
      console.log(this.prop2);
    });

  }

}
