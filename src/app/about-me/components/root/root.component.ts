import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-about-me',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  side = 'left';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      switch (params.route) {
        case 'about-me':
          Observable.timer(1).subscribe(() => this.side = 'left');
          break;
        case 'offered-services':
          Observable.timer(1).subscribe(() => this.side = 'right');
          break;
        default:
          Observable.timer(600).subscribe(() => this.side = 'left');
          break;
      }
    });
  }

  changeSide(side: boolean) {
    const route = side ? 'offered-services' : 'about-me';

    this.router.navigate([route]);
  }

  @HostListener('swiperight', ['$event.target'])
  private onSwipeRight() {
    this.router.navigate(['about-me']);
  }

  @HostListener('swipeleft', ['$event.target'])
  private onSwipeLeft() {
    this.router.navigate(['offered-services']);
  }
}
