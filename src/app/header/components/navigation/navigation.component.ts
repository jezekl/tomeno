import { Component, OnInit } from '@angular/core';

export const NAVIGATION = [
  {
    name: 'Home',
    url: '/home'
  },
  {
    name: 'About me',
    url: '/about-me'
  },
  {
    name: 'Work',
    url: '/work'
  },
  {
    name: 'Contact',
    url: '/contact'
  }
];

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navigation = NAVIGATION;

  constructor() { }

  ngOnInit() { }

}
