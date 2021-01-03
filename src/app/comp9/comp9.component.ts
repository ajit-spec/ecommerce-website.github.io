import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-comp9',
  templateUrl: './comp9.component.html',
  styleUrls: ['./comp9.component.scss']
})
export class Comp9Component implements OnInit, OnChanges {

  @Input() prop1: number;
  prop2: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.prop2 = (this.prop1 * 18) + 'px';

  }

}
