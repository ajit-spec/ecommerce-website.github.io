import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Service1Service} from './services/service1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  prop1: BreakpointObserver;
  smallscreen: boolean;

  prop2: Service1Service;
  prop4: string;

  constructor(param1: BreakpointObserver, param2: Service1Service) {
    this.prop1 = param1;
    this.prop2 = param2;
  }

  prop5(): void {
    localStorage.removeItem('loggedinuser');
  }

  ngOnInit(): void {

    this.prop1.observe([
        `(max-width: 1023px)`
      ]
    ).subscribe(value => {
      console.log(value);
      this.smallscreen = value.matches;
    });

    this.prop4 = JSON.parse(localStorage.getItem('loggedinuser'));

  }

}
