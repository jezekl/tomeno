import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './components/root/root.component';
import { McRAIIconModule, McRAIButtonModule } from '@mcrai/ui';

@NgModule({
  imports: [
    CommonModule,
    McRAIIconModule,
    McRAIButtonModule
  ],
  declarations: [
    RootComponent
  ],
  exports: [
    RootComponent
  ]
})
export class CarouselModule { }
