import { Component, HostBinding, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  animations: [
    trigger('fadeOut', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate(500, style({ opacity: 0 }))
      ])
    ]),
    trigger('rotateIn', [
      transition(':enter', [
        style({ transform: 'rotateY(0)' }),
        animate(1900, style({ transform: 'rotateY(720deg)' })
        )
      ])
    ]),
  ]
})
export class IntroComponent implements OnInit {
  @HostBinding('@fadeOut') doAnimate = true;

  constructor() { }

  ngOnInit() { }

}
