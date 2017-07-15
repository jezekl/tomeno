import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-carousel',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  @ViewChild('wrapper') wrapper;
  start = true;
  end = false;
  subscribers: any = {};

  constructor() { }

  ngOnInit() { }

  private checkForEndings() {
    this.checkForStart();
    this.checkForEnd();
  }

  private checkForStart() {
    if (this.wrapper.nativeElement.scrollLeft <= 0) {
      this.stopSliding();
      this.start = true;
    } else {
      this.start = false;
    }
  }

  private checkForEnd() {
    const wrapper = this.wrapper.nativeElement;
    if (wrapper.clientWidth + wrapper.scrollLeft >= wrapper.scrollWidth) {
      this.stopSliding();
      this.end = true;
    } else {
      this.end = false;
    }
  }

  moveScrollbar(direction, step) {
    const element = this.wrapper.nativeElement;
    direction ? element.scrollLeft += step : element.scrollLeft -= step;
    this.checkForEndings();
  }

  startSliding(direction: boolean) {
    this.stopSliding();

    this.subscribers.slide = Observable.interval(3)
      .subscribe(() => this.moveScrollbar(direction, 3));
  }

  stopSliding() {
    if (this.subscribers.hasOwnProperty('slide')) {
      this.subscribers.slide.unsubscribe();
    }
  }


}
