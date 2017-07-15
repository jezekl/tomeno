import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { NAVIGATION } from '../../../header/components/navigation/navigation.component';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-page',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  route: string;
  side: string;
  showIntro = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private eleRef: ElementRef
  ) { }

  ngOnInit() {
    this.turnOffIntro();
    this.registerWheelEvent();

    this.activatedRoute.params.subscribe(params => {
      this.route = params.route;
      this.side  = params.side;
    });
  }

  private turnOffIntro() {
    Observable.timer(2000).subscribe(() => this.showIntro = false);
  }

  private registerWheelEvent() {
    Observable.fromEvent(this.eleRef.nativeElement, 'mousewheel')
      .throttleTime(200)
      .debounceTime(200)
      .subscribe(this.onMouseWheel.bind(this));
  }

  private onMouseWheel(event) {
    const delta = Math.max(0, Math.min(1, (event.wheelDelta || -event.detail)));

    if (delta) {
      this.setPrevSlide();
    } else {
      this.setNextSlide();
    }
  }

  @HostListener('swipedown', ['$event.target'])
  private setPrevSlide() {
    const index = NAVIGATION.findIndex((link, i) => link.url.split('/')[1] === this.route);

    if (index !== -1 && index > 0) {
      const slide = NAVIGATION[index - 1].url;
      this.router.navigate([slide]);
    }
  }

  @HostListener('swipeup', ['$event.target'])
  private setNextSlide() {
    const index = NAVIGATION.findIndex((link, i) => link.url.split('/')[1] === this.route);

    if (index !== -1 && index < NAVIGATION.length - 1) {
      const slide = NAVIGATION[index + 1].url;
      this.router.navigate([slide]);
    }
  }

}
