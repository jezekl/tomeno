import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './components/root/root.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { SocialMediaListComponent } from './components/social-media-list/social-media-list.component';

import { McRAIIconModule } from '@mcrai/ui';

@NgModule({
  imports: [
    CommonModule,
    McRAIIconModule
  ],
  declarations: [
    RootComponent,
    ContactListComponent,
    SocialMediaListComponent
  ],
  exports: [
    RootComponent
  ]
})
export class ContactModule { }
