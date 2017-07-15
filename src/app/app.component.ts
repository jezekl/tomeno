import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  onSwipeLeft() {
    console.log('left');
  }

  onSwipeDown() {
    console.log('down');
  }
}
