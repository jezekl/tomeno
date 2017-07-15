import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideComponent } from './components/slide/slide.component';
import { VerticalSliderComponent } from './components/vertical-slider/vertical-slider.component';
import { HorizontalSliderComponent } from './components/horizontal-slider/horizontal-slider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SlideComponent,
    VerticalSliderComponent,
    HorizontalSliderComponent
  ],
  exports: [
    SlideComponent,
    VerticalSliderComponent,
    HorizontalSliderComponent
  ]
})
export class SliderModule { }
