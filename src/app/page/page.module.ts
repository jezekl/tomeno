import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SliderModule } from '../slider/slider.module';
import { HeaderModule } from '../header/header.module';
import { HomeModule } from '../home/home.module';
import { AboutMeModule } from '../about-me/about-me.module';
import { WorkModule } from '../work/work.module';
import { ContactModule } from '../contact/contact.module';
import { McRAIIconModule } from '@mcrai/ui';

import { routes } from './page.routes';

import { RootComponent } from './components/root/root.component';
import { IntroComponent } from './components/intro/intro.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SliderModule,
    HeaderModule,
    HomeModule,
    AboutMeModule,
    WorkModule,
    ContactModule,
    McRAIIconModule
  ],
  declarations: [RootComponent, IntroComponent]
})
export class PageModule { }
