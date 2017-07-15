import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/service';

const SERVICES = [
  {
    icon: 'webdesign',
    name: 'webdesign'
  }, {
    icon: 'corporate',
    name: 'corporate'
  }, {
    icon: 'storyboard',
    name: 'storyboard'
  }, {
    icon: 'social_sites',
    name: 'social sites'
  }, {
    icon: 'concept_art',
    name: 'concept art'
  }
];

@Component({
  selector: 'app-offered-services',
  templateUrl: './offered-services.component.html',
  styleUrls: ['./offered-services.component.scss']
})
export class OfferedServicesComponent implements OnInit {
  services: Service[] = SERVICES;

  constructor() { }

  ngOnInit() { }

}
