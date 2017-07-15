import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/timer';
import { Reference } from '../../model/reference';

export const REFERENCES = [
  {
    name: 'itms',
    title: 'ITMS',
    subtitle: 'webdesign',
    image: 'it/IT.jpg',
  }, {
    name: 'ji',
    title: 'Jímky',
    subtitle: 'webdesign',
    image: 'ji/JI.jpg'
  }, {
    name: 'ps',
    title: 'Plastové sklepy',
    subtitle: 'webdesign / corporate',
    image: 'ps/PS.jpg'
  }, {
    name: 'rsh',
    title: 'Rodeo steak house',
    subtitle: 'webdesign / corporate',
    image: 'rsh/RSH.jpg'
  }, {
    name: 'wr',
    title: 'Wilsonka race',
    subtitle: 'webdesign / corporate',
    image: 'wr/WR.jpg'
  }, {
    name: 'zn',
    title: 'Znojemka club & bowling',
    subtitle: 'corporate',
    image: 'zn/ZN.jpg'
  }
];

@Component({
  selector: 'app-work',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  references: Reference[] = REFERENCES;
  routes: string[] = [];
  side = 'left';
  activeRoute: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.routes = this.references.map(reference => reference.name);

    this.activatedRoute.params.subscribe(params => {
      if (params.route === 'work') {
        Observable.timer(1).subscribe(() => this.side = 'left');
        this.activeRoute = '';
      } else if (this.routes.indexOf(params.route) !== -1) {
        Observable.timer(1).subscribe(() => this.side = 'right');
        this.activeRoute = params.route;
      } else {
        Observable.timer(600).subscribe(() => this.side = 'left');
        this.activeRoute = '';
      }
    });
  }

  @HostListener('swiperight', ['$event.target'])
  private onSwipeRight() {
    this.router.navigate(['work']);
  }
}
