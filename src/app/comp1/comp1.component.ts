import {Component, Input, OnInit} from '@angular/core';
import {Service1Service} from '../services/service1.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  @Input() prop1: boolean;
  @Input() prop2: any;

  prop3: Service1Service;
  prop4: string;

  prop5(): void {
    localStorage.removeItem('loggedinuser');
  }

  constructor(param1: Service1Service) {
    this.prop3 = param1;
  }

  ngOnInit(): void {
    this.prop4 = JSON.parse(localStorage.getItem('loggedinuser'));
  }

}
