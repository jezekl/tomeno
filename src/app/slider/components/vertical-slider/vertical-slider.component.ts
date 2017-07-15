import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger, state } from '@angular/animations';

@Component({
  selector: 'app-vertical-slider',
  templateUrl: './vertical-slider.component.html',
  styleUrls: ['./vertical-slider.component.scss'],
  animations: [
    trigger('changeSlide', [
      state('home', style({ transform: 'translateY(0)' })),
      state('about-me', style({ transform: 'translateY(-25%)' })),
      state('offered-services', style({ transform: 'translateY(-25%)' })),
      state('work', style({ transform: 'translateY(-50%)' })),
      state('contact', style({ transform: 'translateY(-75%)' })),
      state('*', style({ transform: 'translateY(-50%)' })),
      transition('* => *', animate('600ms cubic-bezier(.35,0,.25,1)'))
    ])
  ]
})
export class VerticalSliderComponent implements OnInit {
  @HostBinding('@changeSlide') animation: string;

  @Input() set state(value) {
    this.animation = value;
  }

  constructor() { }

  ngOnInit() { }

}
