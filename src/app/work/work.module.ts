import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from '../carousel/carousel.module';
import { SliderModule } from '../slider/slider.module';
import { RouterModule } from '@angular/router';
import { McRAIButtonModule, McRAIIconModule } from '@mcrai/ui';

import { RootComponent } from './components/root/root.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { ReferenceDetailComponent } from './components/reference-detail/reference-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SliderModule,
    CarouselModule,
    RouterModule,
    McRAIButtonModule,
    McRAIIconModule
  ],
  declarations: [
    RootComponent,
    ReferenceComponent,
    ReferenceDetailComponent
  ],
  exports: [
    RootComponent
  ]
})
export class WorkModule { }
