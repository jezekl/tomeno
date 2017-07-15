import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger, state } from '@angular/animations';

@Component({
  selector: 'app-horizontal-slider',
  templateUrl: './horizontal-slider.component.html',
  styleUrls: ['./horizontal-slider.component.scss'],
  animations: [
    trigger('changeSlide', [
      state('left',  style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(-100%)' })),
      transition('* => *', animate('600ms cubic-bezier(.35,0,.25,1)'))
    ])
  ]
})
export class HorizontalSliderComponent implements OnInit {
  @HostBinding('@changeSlide') animation;

  @Input() set state(value) {
    this.animation = value;
  }

  constructor() { }

  ngOnInit() { }

}
