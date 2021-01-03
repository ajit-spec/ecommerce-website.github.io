import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {

  @Input() image: string;
  @Input() caption: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
