import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromEvent';

const REFERENCES = {
  itms: {
    title: 'ITMS-plast',
    text: 'ITMS Plastic is a specialist in the production of septic tanks, water tanks, pipelines, sand filters, plastic cellars and watermeter shafts and wells.',
    subtitle: 'website / corporate',
    website: '',
    images: [
      'it/IT_1.png',
      'it/IT_2.png',
      'it/IT_3.png',
      'it/IT_4.png',
      'it/IT_5.png',
    ],
    videos: []
  },
  ji: {
    title: 'Jímka',
    text: 'Jimka.cz deals with the production of plastic waste stones, sewage tanks and underground waste water tanks.',
    subtitle: 'website / corporate',
    website: '',
    images: [
      'ji/JI_1.png',
      'ji/JI_2.png',
      'ji/JI_3.png'
    ],
    videos: []
  },
  ps: {
    title: 'Plastové sklepy',
    text: 'Engaged in the production of plastic cellars. A highly attractive product on the market. Low price, high quality.',
    subtitle: 'website / corporate / video / 3D',
    website: 'http://www.plastove-sklepy.cz/',
    images: [
      'ps/PS_1.png',
      'ps/PS_2.png',
      'ps/PS_3.png',
      'ps/PS_4.png',
      'ps/PS_5.png',
    ],
    videos: [
      'p5LhdhOS6g0'
    ]
  },
  rsh: {
    title: 'Rodeo steak house',
    text: 'A newly opened restaurant with an American-style bar in Třebíč that offers the largest non-smoking area.',
    subtitle: 'website / corporate',
    website: 'http://www.rodeosteakhouse.cz/',
    images: [
      'rsh/RSH_1.png',
      'rsh/RSH_2.png',
      'rsh/RSH_3.png',
      'rsh/RSH_4.png',
    ],
    videos: []
  },
  wr: {
    title: 'Wilsonka RACE',
    text: 'WILSONKA RACE is an extreme cross-country obstacle race driven by challenging natural terrain around the Wilsonka Autocamp.',
    subtitle: 'website / corporate',
    website: 'http://www.wilsonkarace.cz/',
    images: [
      'wr/WR_1.png',
      'wr/WR_2.png',
      'wr/WR_3.png',
      'wr/WR_4.png',
      'wr/WR_5.png',
    ],
    videos: []
  },
  zn: {
    title: 'Znojemka',
    text: 'Attractive and modern interior, perfect sound technology, DJ\'s with current hits, perfect entertainment.',
    subtitle: 'corporate',
    website: '',
    images: [
      'zn/ZN_1.png',
      'zn/ZN_2.png',
      'zn/ZN_3.png',
      'zn/ZN_4.png',
      'zn/ZN_5.png',
      'zn/ZN_6.png',
      'zn/ZN_7.png',
      'zn/ZN_8.png',
      'zn/ZN_9.png',
    ],
    videos: []
  }
};

@Component({
  selector: 'app-reference-detail',
  templateUrl: './reference-detail.component.html',
  styleUrls: ['./reference-detail.component.scss']
})
export class ReferenceDetailComponent implements OnInit {
  @ViewChild('carousel') carousel;
  reference;

  @Input() set name(value: string) {
    this.reference = REFERENCES[value];
  }

  constructor(
    private eleRef: ElementRef,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.registerWheelEvent();
  }

  private registerWheelEvent() {
    Observable.fromEvent(this.eleRef.nativeElement, 'mousewheel')
      .subscribe(this.onMouseWheel.bind(this));
  }

  private onMouseWheel(event) {
    const delta = Math.max(0, Math.min(1, (event.wheelDelta || -event.detail)));
    this.carousel.moveScrollbar(!delta, 50);
  }

  getVideoUrl(id: string) {
    const url = 'https://www.youtube.com/embed/' + id;

    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
