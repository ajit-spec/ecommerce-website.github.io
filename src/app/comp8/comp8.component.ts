import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comp8',
  templateUrl: './comp8.component.html',
  styleUrls: ['./comp8.component.scss']
})
export class Comp8Component implements OnInit {

  @Input() prop1: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
