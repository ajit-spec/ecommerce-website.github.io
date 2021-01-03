import {Component, OnInit} from '@angular/core';
import {Service1Service} from '../services/service1.service';

@Component({
  selector: 'app-comp7',
  templateUrl: './comp7.component.html',
  styleUrls: ['./comp7.component.scss']
})
export class Comp7Component implements OnInit {

  prop1: Service1Service;
  prop2: any;

  constructor(param1: Service1Service) {
    this.prop1 = param1;
  }

  ngOnInit(): void {

    this.prop1.prop1().subscribe(value => {
      console.log(value);
      this.prop2 = value.apparel.women;
      console.log(this.prop2);
    });

  }

}
