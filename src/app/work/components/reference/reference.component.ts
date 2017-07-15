import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Reference } from '../../model/reference';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
  animations: [
    trigger('scale', [
      state('inactive', style({ transform: 'perspective(700px) rotateX(0) rotateY(0) translateZ(0)' })),
      state('active',   style({ transform: 'perspective(700px) rotateX(0) rotateY(0) translateZ(65px)' })),
      transition('inactive => active', [
        animate('500ms cubic-bezier(.3, .6, .4, 1)', keyframes([
          style({ transform: 'perspective(700px) rotateX(0) rotateY(0) translateZ(0)', offset: 0   }),
          style({ transform: 'perspective(700px) rotateX(7deg) rotateY(-5deg) translateZ(32px)', offset: .16 }),
          style({ transform: 'perspective(700px) rotateX(0) rotateY(0) translateZ(65px)', offset: 1   })
        ]))
      ]),
      transition('active => inactive', animate('200ms')),
    ]),
  ]
})
export class ReferenceComponent implements OnInit {
  @Input() reference: Reference;
  @HostBinding('style.background-image') image;
  @HostBinding('@scale') state = 'inactive';
  @HostListener('mouseenter', ['$event.target']) onEnter() {
    this.state = 'active';
  }
  @HostListener('mouseleave', ['$event.target']) onLeave() {
    this.state = 'inactive';
  }

  ngOnInit() {
    this.image = 'url(../../../assets/images/' + this.reference.image + ')';
  }
}
