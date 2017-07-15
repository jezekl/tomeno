import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  @HostBinding('style.height') height: string;
  @HostBinding('style.width') width: string;
  // @HostBinding('style.flexBasis') flexBasis: string;

  @HostListener('window:resize', ['$event']) onResize(event) {
    this.width  = this.getViewportWidth();
    this.height = this.getViewportHeight();
  }

  constructor() {
    this.height    = this.getViewportHeight();
    this.width     = this.getViewportWidth();
    // this.flexBasis = this.getViewportHeight();
  }

  ngOnInit() { }

  getViewportWidth() {
    return window.innerWidth + 'px';
  }

  getViewportHeight() {
    return window.innerHeight + 'px';
  }
}
