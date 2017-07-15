import { Component, OnInit } from '@angular/core';

const SITES = [
  {
    url: 'https://www.facebook.com/tomas.piggnigg',
    icon: 'facebook'
  }, {
    url: 'https://www.linkedin.com/in/menousek71989/',
    icon: 'linkedin'
  }, {
    url: 'https://www.instagram.com/hawrun/',
    icon: 'instagram'
  }
];

@Component({
  selector: 'app-social-media-list',
  templateUrl: './social-media-list.component.html',
  styleUrls: ['./social-media-list.component.scss']
})
export class SocialMediaListComponent implements OnInit {
  sites = SITES;

  constructor() { }

  ngOnInit() { }

}
