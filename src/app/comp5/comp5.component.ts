import {Component, OnInit} from '@angular/core';
import {Service1Service} from '../services/service1.service';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.scss']
})
export class Comp5Component implements OnInit {

  prop1: Service1Service;
  prop2: any;
  prop3: any;

  constructor(param1: Service1Service) {
    this.prop1 = param1;
  }

  ngOnInit(): void {

    this.prop1.prop1().subscribe(value => {
      console.log(value);

      for (const valueElementKey in value['explore-italic']) {

        if (valueElementKey === 'womens') {
          this.prop2 = {...value['explore-italic'][valueElementKey], type: 'womens'};
          console.log(this.prop2);
        }

        if (valueElementKey === 'mens') {
          this.prop3 = {...value['explore-italic'][valueElementKey], type: 'mens'};
          console.log(this.prop3);
        }

      }
    });

  }

}
