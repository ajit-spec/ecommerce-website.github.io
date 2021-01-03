import {Component, OnInit} from '@angular/core';
import {Service1Service} from '../services/service1.service';
import {map, toArray} from 'rxjs/operators';
import {from} from 'rxjs';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  prop1: Service1Service;
  prop2 = [];

  ngOnInit(): void {

    this.prop1.prop1().subscribe(value => {
      console.log(value);

      for (const valueKey in value.gifts) {
        if (value.gifts.hasOwnProperty(valueKey)) {
          this.prop2.push(value.gifts[valueKey]);
        }
      }

      console.log(this.prop2);

    });

  }

  constructor(param1: Service1Service) {
    this.prop1 = param1;
  }

}

